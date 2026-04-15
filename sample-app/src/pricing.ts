import type { UsageEvent } from './parser.js';

export interface PricingSummary {
  subtotal: number;
  surcharge: number;
  total: number;
  totalUnits: number;
  planBreakdown: Record<string, number>;
}

const BASE_RATES = {
  free: 0,
  pro: 0.12,
  enterprise: 0.08,
} as const;

const INCLUDED_UNITS = {
  free: 100,
  pro: 50,
  enterprise: 500,
} as const;

const REGION_SURCHARGE = {
  us: 0,
  eu: 0.2,
  apac: 0.15,
} as const;

export function calculateMonthlyBill(events: UsageEvent[]): PricingSummary {
  const summary: PricingSummary = {
    subtotal: 0,
    surcharge: 0,
    total: 0,
    totalUnits: 0,
    planBreakdown: {},
  };

  for (const event of events) {
    const includedUnits = INCLUDED_UNITS[event.plan] ?? 0;
    const billableUnits = Math.max(event.units - includedUnits, 0);
    const rate = BASE_RATES[event.plan] ?? 0;
    let lineTotal = billableUnits * rate;

    if (event.plan === 'pro' && event.units > 1000) {
      lineTotal = lineTotal * 0.9;
    }

    const surchargeRate = REGION_SURCHARGE[event.region.toLowerCase() as keyof typeof REGION_SURCHARGE] ?? 0;
    const surcharge = lineTotal * surchargeRate;

    summary.subtotal += lineTotal;
    summary.surcharge += surcharge;
    summary.totalUnits += event.units;
    summary.planBreakdown[event.plan] = (summary.planBreakdown[event.plan] || 0) + lineTotal + surcharge;
  }

  summary.subtotal = round(summary.subtotal);
  summary.surcharge = round(summary.surcharge);
  summary.total = round(summary.subtotal + summary.surcharge);

  return summary;
}

function round(value: number): number {
  return Math.round(value * 100) / 100;
}
