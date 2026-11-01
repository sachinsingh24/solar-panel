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
  { target: null, display: '3–5 yrs', label: 'Typical time to recover the cost' },
];

/* ---- 3. WHY solar, why now -------------------------------- */
export const WHY = [
  {
    icon: 'trend',
    title: 'Power only gets costlier',
    text:
      'Electricity prices in India rise often. Every unit produced on your roof is one less unit you need to buy from your electricity company — for many years.',
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
    text: 'Solar power runs your fans, lights, air conditioner and pump first. You buy electricity from the grid only when your solar system does not produce enough.',
  },
  {
    num: '04',
    title: 'Extra units earn you credit',
    text: 'Extra daytime power is sent to the electricity grid. Your electricity company records it as credit, which you can use during the night or cloudy days according to its rules.',
  },
];

/* ---- 5. BENEFITS ------------------------------------------ */
export const BENEFITS = [
  { icon: 'rupee', title: 'Lower your electricity bill', text: 'A properly sized system can reduce your monthly bill by up to 70–90%, depending on your use and sunlight.' },
  { icon: 'gift', title: 'Government subsidy', text: 'Eligible residential rooftops under PM Surya Ghar Muft Bijli Yojana can receive central subsidy support of up to ₹78,000.' },
  { icon: 'clock', title: 'Recover your cost sooner', text: 'Many homes recover the installation cost in about 3–5 years. The system can then continue producing power for many more years.' },
  { icon: 'shield', title: 'Built to last', text: 'Quality solar panels have a 25-year performance warranty and can keep producing electricity for decades.' },
  { icon: 'meter', title: 'Net metering', text: 'Export your daytime surplus to the grid and draw it back when the sun isn’t shining.' },
  { icon: 'spark', title: 'Almost no upkeep', text: 'No moving parts. An occasional rinse and a yearly check-up is all your system asks for.' },
  { icon: 'lock', title: 'Reduce the effect of price increases', text: 'Once installed, sunlight used by your system does not increase in price, helping protect you from future electricity rate increases.' },
  { icon: 'home', title: 'Adds property value', text: 'A solar-ready home with tiny running costs commands a stronger price at resale.' },
];

/* ---- 6. CATALOGUE — what's inside a system ---------------- */
export const COMPONENTS = [
  {
    image: 'comp-panels.jpg',
    tag: 'The generator',
    title: 'Solar panels',
    text: 'High-quality solar panels are selected for your available roof space and electricity use. These panels generate power whenever sunlight reaches them.',
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
    text: 'Strong galvanised steel or aluminium frames are made and fitted on site. They hold the panels at the right angle and are designed to withstand local monsoon winds.',
  },
  {
    image: 'comp-netmeter.jpg',
    tag: 'Metering & safety',
    title: 'Net meter & protection',
    text: 'A bidirectional meter, electrical distribution boxes, surge protection and proper earthing help measure solar generation safely and meet electricity-grid requirements.',
  },
];

/* ---- 7. CATALOGUE — system sizes -------------------------- */
export const PACKAGES = [
  { size: '1 kW', forWhom: 'Small home', units: 'about 4 units/day', offsets: 'a bill of about ₹1,000/month', price: '₹35,000', subsidyEligible: true, popular: false },
  { size: '3 kW', forWhom: 'Most homes', units: 'about 12 units/day', offsets: 'a bill of about ₹3,000/month', price: '₹1.17 lakh', subsidyEligible: true, popular: true },
  { size: '5 kW', forWhom: 'Large home / villa', units: 'about 20 units/day', offsets: 'a bill of about ₹5,000/month', price: '₹2.47 lakh', subsidyEligible: true, popular: false },
  { size: '10 kW', forWhom: 'Shop / small business', units: 'about 40 units/day', offsets: 'a bill of about ₹10,000/month', price: '₹5.9 lakh', subsidyEligible: false, popular: false },
];

/* ---- 7b. CORPORATE / commercial & industrial -------------- */
export const CORP_BENEFITS = [
  { icon: 'rupee', title: 'Reduce operating costs', text: 'Businesses usually pay higher electricity rates, so each unit produced by solar can create meaningful savings. A correctly sized system may recover its cost in about 3–4 years.' },
  { icon: 'shield', title: 'Possible tax benefits', text: 'Eligible businesses may claim accelerated depreciation and GST credit. Your accountant can confirm the benefits for your business.' },
  { icon: 'spark', title: 'No upfront payment option', text: 'With a solar power agreement, a provider can fund and maintain the system. Your business pays for the electricity it uses, usually at an agreed rate.' },
  { icon: 'panel', title: 'Systems for every business size', text: 'We design rooftop, ground-mounted and solar-carport systems based on your electricity use, available space and budget.' },
  { icon: 'leaf', title: 'Support sustainability goals', text: 'Solar power reduces electricity taken from fossil-fuel sources and can support green-building and environmental reporting.' },
  { icon: 'lock', title: 'Reduce future electricity increases', text: 'A solar system produces its own power for decades, helping protect your business from part of future electricity price increases.' },
];

export const CORP_MODELS = [
  {
    tag: 'Buy the system',
    title: 'Own your system',
    text: 'You pay for the system upfront. You receive the electricity savings and any tax benefits, and the system belongs to your business.',
    points: ['Greater long-term savings', 'Available tax benefits', 'System belongs to you']
  },
  {
    tag: 'Power agreement',
    title: 'Pay no money upfront',
    text: 'We or a funding partner install and maintain the system. Your business pays for the solar electricity used at an agreed rate.',
    points: ['No upfront installation cost', 'Pay only for solar power used', 'Provider handles maintenance']
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
    a: 'The right system size can reduce your monthly bill by about 70–90%. For example, a ₹3,000 bill may fall to fixed charges of only a few hundred rupees. Actual savings depend on your roof, sunlight and electricity use.',
  },
  {
    q: 'What is the PM Surya Ghar subsidy?',
    a: 'PM Surya Ghar provides central subsidy support to eligible home rooftops: ₹30,000 per kW for the first 2 kW, and ₹18,000 for a third kW. The maximum subsidy is ₹78,000. Eligibility and final payment depend on approval by the MNRE process and your electricity distribution company.'
  },
  {
    q: 'Do you handle commercial and industrial projects?',
    a: 'Yes. We work with factories, warehouses, offices, hotels, hospitals and housing societies. Systems can range from small commercial installations to large projects. You can either buy and own the system, or use a power agreement that requires no upfront payment.',
  },
  {
    q: 'How long will it last, and what’s the warranty?',
    a: 'Panels typically carry a 25-year performance warranty and inverters 5–10 years. In practice you can expect 25+ years of useful generation from a good system.',
  },
  {
    q: 'What about cloudy days and the monsoon?',
    a: 'Panels still produce some power from the daylight on cloudy days, but less than on a clear sunny day. Extra units produced on sunny days may receive credit through net metering according to your electricity company’s rules.'
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
