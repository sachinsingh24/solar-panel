import React, { useMemo, useState } from 'react';
import { CALC, subsidyFor } from '../data';
import { fmtINR, fmtINRShort } from '../format';
import { Reveal, Icon, SectionHead } from '../ui';

const PRESETS = [1500, 3000, 5000, 10000];

/* Turn a monthly electricity bill into a full solar business case. */
function estimate(monthlyBill) {
  const { TARIFF, GEN_PER_KW_DAY, COST_PER_KW, TARIFF_INFLATION, YEARS } = CALC;

  const monthlyUnits = monthlyBill / TARIFF;
  const annualUnits = monthlyUnits * 12;

  // Size the system to roughly cover annual consumption (min 1 kW).
  const kw = Math.max(1, Math.round(monthlyUnits / (GEN_PER_KW_DAY * 30)));

  const annualGen = kw * GEN_PER_KW_DAY * 365;
  const offsetUnits = Math.min(annualGen, annualUnits);

  const annualSavings = offsetUnits * TARIFF; // year-1, at today's tariff
  const monthlySavings = annualSavings / 12;

  const gross = kw * COST_PER_KW;
  const subsidy = subsidyFor(kw);
  const netCost = Math.max(0, gross - subsidy);

  const payback = annualSavings > 0 ? netCost / annualSavings : 0;

  // Compounding factor for `YEARS` of tariff inflation.
  const g = TARIFF_INFLATION;
  const factor = (Math.pow(1 + g, YEARS) - 1) / g;

  const annualBill = annualUnits * TARIFF;
  const gridOnly25 = annualBill * factor; // what you'd pay the grid over 25 yrs
  const residualAnnual = (annualUnits - offsetUnits) * TARIFF; // power still bought
  const solarPath25 = netCost + residualAnnual * factor; // total outlay with solar
  const lifetimeSavings = gridOnly25 - solarPath25;

  return {
    kw, monthlyUnits, gross, subsidy, netCost, monthlySavings, annualSavings,
    payback, gridOnly25, solarPath25, lifetimeSavings,
  };
}

export default function SavingsCalculator() {
  const [bill, setBill] = useState(CALC.BILL_START);
  const r = useMemo(() => estimate(bill), [bill]);

  const pct = ((bill - CALC.BILL_MIN) / (CALC.BILL_MAX - CALC.BILL_MIN)) * 100;
  const barMax = Math.max(r.gridOnly25, r.solarPath25) || 1;

  return (
    <section className="section section--tint calc" id="savings">
      <div className="container">
        <SectionHead
          eyebrow="Your savings, your numbers"
          title="See what solar does to your bill"
          sub="Drag your average monthly electricity bill and watch the numbers update instantly."
        />

        <Reveal className="calc__card">
          {/* ---- Controls ---- */}
          <div className="calc__controls">
            <div className="calc__billhead">
              <span className="calc__billlabel">Your monthly electricity bill</span>
              <span className="calc__billvalue">{fmtINR(bill)}</span>
              <p className="calc__help">Use your average bill from the last 3–6 months for the best estimate.</p>
            </div>

            <input
              className="calc__slider"
              type="range"
              min={CALC.BILL_MIN}
              max={CALC.BILL_MAX}
              step={100}
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              style={{ '--pct': `${pct}%` }}
              aria-label="Monthly electricity bill in rupees"
            />
            <div className="calc__scale">
              <span>{fmtINR(CALC.BILL_MIN)}</span>
              <span>{fmtINR(CALC.BILL_MAX)}+</span>
            </div>

            <div className="calc__presethead">Quick choices</div>
            <div className="calc__presets">
              {PRESETS.map((p) => (
                <button
                  key={p}
                  className={`chip ${bill === p ? 'chip--on' : ''}`}
                  onClick={() => setBill(p)}
                >
                  {fmtINR(p)}
                </button>
              ))}
            </div>

            <div className="calc__reco">
              <Icon name="panel" size={22} />
              <span>
                Recommended system{' '}
                <strong>≈ {r.kw} kW</strong>
              </span>
            </div>
            <div className="calc__usage">
              <span>Estimated electricity use</span>
              <strong>{Math.round(r.monthlyUnits)} units/month</strong>
              <small>Your final system size also depends on roof space and sunlight.</small>
            </div>
          </div>

          {/* ---- Results ---- */}
          <div className="calc__results">
            <div className="calc__tiles">
              <div className="tile">
                <span className="tile__label">Estimated savings per month</span>
                <span className="tile__value tile__value--leaf">{fmtINR(r.monthlySavings)}</span>
              </div>
              <div className="tile">
                <span className="tile__label">System cost after subsidy</span>
                <span className="tile__value">{fmtINRShort(r.netCost)}</span>
                <span className="tile__sub">{fmtINRShort(r.gross)} − {fmtINRShort(r.subsidy)} subsidy</span>
              </div>
              <div className="tile">
                <span className="tile__label">Estimated time to recover cost</span>
                <span className="tile__value">{r.payback.toFixed(1)} yrs</span>
              </div>
              <div className="tile">
                <span className="tile__label">Estimated savings per year</span>
                <span className="tile__value tile__value--leaf">{fmtINRShort(r.annualSavings)}</span>
              </div>
            </div>

            {/* ---- 25-year comparison ---- */}
            <div className="compare">
              <div className="compare__head">Estimated comparison over 25 years</div>

              <div className="compare__row">
                <span className="compare__name">
                  <Icon name="bolt" size={16} /> Total electricity bill without solar
                </span>
                <div className="compare__track">
                  <div
                    className="compare__fill compare__fill--grid"
                    style={{ width: `${(r.gridOnly25 / barMax) * 100}%` }}
                  />
                </div>
                <span className="compare__amt">{fmtINRShort(r.gridOnly25)}</span>
              </div>

              <div className="compare__row">
                <span className="compare__name">
                  <Icon name="sun" size={16} /> Total cost with solar
                </span>
                <div className="compare__track">
                  <div
                    className="compare__fill compare__fill--solar"
                    style={{ width: `${(r.solarPath25 / barMax) * 100}%` }}
                  />
                </div>
                <span className="compare__amt">{fmtINRShort(r.solarPath25)}</span>
              </div>

              <div className="compare__net">
                <span>Estimated money saved over 25 years</span>
                <strong>{fmtINRShort(r.lifetimeSavings)}</strong>
              </div>
            </div>

            <a className="btn btn--gold calc__cta" href="#contact">
              Get my exact quote <Icon name="arrow" size={18} />
            </a>
          </div>
        </Reveal>

        <p className="calc__note">
          This is an estimate using ₹{CALC.TARIFF} per electricity unit, about {CALC.GEN_PER_KW_DAY} units generated
          per kW each day, and an installation cost of about ₹{(CALC.COST_PER_KW / 1000).toFixed(0)} thousand per kW.
          It assumes electricity prices rise by {Math.round(CALC.TARIFF_INFLATION * 100)}% each year. Your final savings depend on your roof,
          sunlight, electricity use and subsidy approval. We confirm everything during a free site survey.
        </p>
      </div>
    </section>
  );
}
