/* ============================================================
   Site content + configuration
   ------------------------------------------------------------
   Everything a non-developer might want to change lives here:
   brand details, section copy, the catalogue, and the numbers
   behind the savings calculator. Edit this file, not the JSX.
   ============================================================ */

/* Build a path to an image in /public/images */
export const img = (name) => `${process.env.PUBLIC_URL}/images/${name}`;

/* ---- 1. YOUR BUSINESS — edit these ------------------------ */
export const BRAND = {
  name: 'Shree Samarth Energy Solution',
  tagline: 'Rooftop solar, done right.',
  phone: '+91 98344 56918',
  phoneHref: 'tel:+919834456918',
  whatsapp: '919834456918', // country code + number, no “+”
  email: 'erparul9@gmail.com',
  serviceArea: 'Maharashtra & across India',
};

/* ---- 2. HERO trust strip ---------------------------------- */
export const IMPACT = [
  { target: 90, suffix: '%', prefix: '', label: 'Cut in your electricity bill' },
  { target: 78000, suffix: '', prefix: '₹', label: 'Central subsidy for eligible homes' },
  { target: 25, suffix: '+ yrs', prefix: '', label: 'System lifespan' },
  { target: null, display: '3–5 yrs', label: 'Typical payback period' },
];

/* ---- 3. WHY solar, why now -------------------------------- */
export const WHY = [
  {
    icon: 'trend',
    title: 'Power only gets costlier',
    text:
      'Grid tariffs in India climb almost every year. Every unit you generate on your own roof is a unit you never have to buy again — for the next 25 years.',
  },
  {
    icon: 'roof',
    title: 'Your roof is a wasted asset',
    text:
      'That empty rooftop soaking up the sun all day can become a quiet power plant that pays you back month after month.',
  },
  {
    icon: 'gift',
    title: 'The government is paying you to switch',
    text:
      'Under the PM Surya Ghar scheme, eligible residential rooftop systems receive central subsidy support of up to ₹78,000.',
  },
  {
    icon: 'leaf',
    title: 'Clean power, zero fuel',
    text:
      'Sunlight is free, silent and unlimited. No diesel, no smoke, no fuel bill that creeps up every quarter.',
  },
];

/* ---- 4. HOW it works -------------------------------------- */
export const STEPS = [
  {
    num: '01',
    title: 'Sunlight hits your panels',
    text: 'Photovoltaic modules on your roof turn daylight into DC electricity from sunrise to sunset.',
  },
  {
    num: '02',
    title: 'The inverter makes it usable',
    text: 'A grid-tie inverter converts that DC into the 230V AC power your home and appliances actually run on.',
  },
  {
    num: '03',
    title: 'Your home runs on solar first',
    text: 'Your fans, lights, AC and pump draw from the sun before they ever touch a paid grid unit.',
  },
  {
    num: '04',
    title: 'Extra units earn you credit',
    text: 'Surplus power flows back through a net meter and is banked as credit for nights and cloudy monsoon days.',
  },
];

/* ---- 5. BENEFITS ------------------------------------------ */
export const BENEFITS = [
  { icon: 'rupee', title: 'Slash your bills', text: 'Cut your electricity bill by 70–90%. A well-sized system can wipe out the energy charge almost entirely.' },
  { icon: 'gift', title: 'Government subsidy', text: 'Eligible residential rooftops under PM Surya Ghar Muft Bijli Yojana can receive central subsidy support of up to ₹78,000.' },
  { icon: 'clock', title: 'Fast payback', text: 'Most homes recover the full cost in 3–5 years — then enjoy two decades of near-free power.' },
  { icon: 'shield', title: 'Built to last', text: 'Tier-1 panels carry a 25-year performance warranty and keep generating long after they’ve paid for themselves.' },
  { icon: 'meter', title: 'Net metering', text: 'Export your daytime surplus to the grid and draw it back when the sun isn’t shining.' },
  { icon: 'spark', title: 'Almost no upkeep', text: 'No moving parts. An occasional rinse and a yearly check-up is all your system asks for.' },
  { icon: 'lock', title: 'Beat every tariff hike', text: 'Lock the price of your own power at ₹0. Future rate increases stop hurting your wallet.' },
  { icon: 'home', title: 'Adds property value', text: 'A solar-ready home with tiny running costs commands a stronger price at resale.' },
];

/* ---- 6. CATALOGUE — what's inside a system ---------------- */
export const COMPONENTS = [
  {
    image: 'comp-panels.jpg',
    tag: 'The generator',
    title: 'Solar panels',
    text: 'High-efficiency Mono-PERC / N-type Tier-1 modules, sized to your roof and load. This is the workhorse that quietly makes your power every day.',
  },
  {
    image: 'comp-inverter.jpg',
    tag: 'The brain',
    title: 'Grid-tie inverter',
    text: 'Converts panel DC into household AC, tracks your generation, and syncs safely with the grid. Wi-Fi monitoring on supported models lets you watch output from your phone.',
  },
  {
    image: 'work-structure.jpg',
    tag: 'The backbone',
    title: 'Mounting structure',
    text: 'Hot-dip galvanised / aluminium framing, custom-fabricated on site to hold your panels at the right tilt and stand up to monsoon winds for decades.',
  },
  {
    image: 'comp-netmeter.jpg',
    tag: 'Metering & safety',
    title: 'Net meter & protection',
    text: 'Bi-directional net meter, AC/DC distribution boxes, surge protection and proper earthing — the safety backbone that makes the whole system reliable and grid-legal.',
  },
];

/* ---- 7. CATALOGUE — system sizes -------------------------- */
export const PACKAGES = [
  { size: '1 kW', forWhom: 'Small home', units: '~4 units/day', offsets: 'a ~₹1,000/mo bill', price: '₹35,000', subsidyEligible: true, popular: false },
  { size: '3 kW', forWhom: 'Most homes', units: '~12 units/day', offsets: 'a ~₹3,000/mo bill', price: '₹1.17 L', subsidyEligible: true, popular: true },
  { size: '5 kW', forWhom: 'Large home / villa', units: '~20 units/day', offsets: 'a ~₹5,000/mo bill', price: '₹2.47 L', subsidyEligible: true, popular: false },
  { size: '10 kW', forWhom: 'Shop / small business', units: '~40 units/day', offsets: 'a ~₹10,000/mo bill', price: '₹5.9 L', subsidyEligible: false, popular: false },
];

/* ---- 7b. CORPORATE / commercial & industrial -------------- */
export const CORP_BENEFITS = [
  { icon: 'rupee', title: 'Slash operating costs', text: 'Commercial and industrial tariffs are the steepest of all — so every solar unit saves you more, and well-sized systems often pay back in just 3–4 years.' },
  { icon: 'shield', title: 'Big tax write-offs', text: 'Claim up to 40% accelerated depreciation in the first year, plus GST input credit — a large slice of the cost comes straight back as tax savings.' },
  { icon: 'spark', title: 'Zero-investment option', text: 'Don’t want the capital cost? Go solar on an OPEX / PPA basis and simply buy your own rooftop power at a lower, fixed rate from day one.' },
  { icon: 'panel', title: 'Scales to megawatts', text: 'Rooftop, ground-mount or solar-carport arrays engineered from tens of kW to MW-scale, matched precisely to your load profile.' },
  { icon: 'leaf', title: 'Meets your ESG goals', text: 'Cut Scope-2 emissions, earn IGBC / LEED green-building points and back your sustainability reporting with real generation data.' },
  { icon: 'lock', title: 'Beat tariff & demand hikes', text: 'Lock a big share of your energy cost for 25 years and take the sting out of rising commercial rates and demand charges.' },
];

export const CORP_MODELS = [
  {
    tag: 'CapEx',
    title: 'Own your system',
    text: 'You invest upfront and keep 100% of the savings — plus depreciation and the highest long-term returns. Best when you have the capital and want maximum ROI.',
    points: ['Maximum lifetime savings', 'Accelerated depreciation', 'Asset on your books'],
  },
  {
    tag: 'OPEX / PPA',
    title: 'Zero upfront',
    text: 'We fund, install and maintain the system; you simply pay for the solar power you use at a rate below the grid. Start saving from month one with no capital outlay.',
    points: ['No capital investment', 'Pay only for what you use', 'We handle all O&M'],
  },
];

export const CORP_INDUSTRIES = [
  'Factories & MIDC units', 'Warehouses & logistics', 'Offices & IT parks',
  'Hotels & resorts', 'Hospitals & labs', 'Schools & colleges',
  'Malls & retail', 'Cold storage', 'Petrol pumps', 'Housing societies',
];

/* ---- 8. GALLERY — real installations ---------------------- */
export const GALLERY = [
  { image: 'install-highrise.jpg', caption: 'Rooftop array on a high-rise residence' },
  { image: 'install-tilted.jpg', caption: 'Tilt-mounted array with a hillside view' },
  { image: 'work-carport.jpg', caption: 'Elevated structure — shade below, power above' },
  { image: 'install-rooftop-1.jpg', caption: 'Commercial shed rooftop installation' },
  { image: 'work-fabrication.jpg', caption: 'On-site structure fabrication' },
  { image: 'install-rooftop-2.jpg', caption: 'Twin-row layout on an industrial roof' },
  { image: 'work-drilling.jpg', caption: 'Careful, code-compliant mounting' },
  { image: 'comp-inverter2.jpg', caption: 'Neat inverter & safety-gear wiring' },
];

/* ---- 9. FAQ ----------------------------------------------- */
export const FAQS = [
  {
    q: 'How much can I actually save?',
    a: 'A right-sized system offsets roughly 70–90% of your bill. Many homeowners take a ₹3,000 monthly bill down to just a few hundred rupees in fixed charges — which adds up to several lakhs kept in your pocket over 25 years.',
  },
  {
    q: 'What is the PM Surya Ghar subsidy?',
    a: 'PM Surya Ghar provides central subsidy for eligible residential rooftops: ₹30,000 per kW for the first 2 kW, ₹18,000 for the 3rd kW, capped at ₹78,000. Final eligibility and disbursement are confirmed through the MNRE application process and the relevant DISCOM.',
  },
  {
    q: 'Do you handle commercial and industrial projects?',
    a: 'Absolutely — a large part of our work is C&I: factories, warehouses, offices, hotels, hospitals and housing societies, from tens of kW up to MW-scale. We offer both CapEx (you own it) and OPEX/PPA (zero-upfront) models, and help you claim accelerated depreciation and GST benefits.',
  },
  {
    q: 'How long will it last, and what’s the warranty?',
    a: 'Panels typically carry a 25-year performance warranty and inverters 5–10 years. In practice you can expect 25+ years of useful generation from a good system.',
  },
  {
    q: 'What about cloudy days and the monsoon?',
    a: 'Panels still generate in diffused daylight — just less. Net metering banks your surplus sunny-day units as credit, so those balance out the cloudy days and nights automatically.',
  },
  {
    q: 'How much maintenance does it need?',
    a: 'Very little. An occasional wash to clear dust and one inspection a year is all it takes. There’s no fuel and no moving parts to wear out.',
  },
  {
    q: 'How long does installation take?',
    a: 'A typical home system is surveyed, installed and commissioned within a few days, once net-metering approvals and paperwork are in place.',
  },
];

/* ---- 10. SAVINGS CALCULATOR assumptions ------------------- *
 * All figures are transparent, conservative estimates for a
 * grid-tied residential system in India. Tweak to match your
 * local DISCOM tariff and current pricing.                     */
export const CALC = {
  TARIFF: 8, // ₹ per unit (kWh) — average residential slab
  GEN_PER_KW_DAY: 4.2, // units generated per kW per day (yearly avg)
  COST_PER_KW: 65000, // ₹ turnkey cost per kW before subsidy
  TARIFF_INFLATION: 0.05, // assumed yearly grid tariff rise (5%)
  YEARS: 25, // system life used for lifetime figures
  BILL_MIN: 500,
  BILL_MAX: 20000,
  BILL_START: 3000,
};

/* Residential PM Surya Ghar subsidy, in ₹, by system size (kW). */
export function subsidyFor(kw) {
  if (!Number.isFinite(kw) || kw <= 0) return 0;

  // PM Surya Ghar: ₹30,000/kW for each of the first 2 kW,
  // ₹18,000 for the third kW, and ₹78,000 maximum.
  const firstTwoKw = Math.min(Math.max(kw, 0), 2);
  const thirdKw = Math.max(0, Math.min(kw - 2, 1));
  return Math.min(78000, firstTwoKw * 30000 + thirdKw * 18000);
}
