import { describe, expect, it } from 'vitest';

import { calculateMonthlyBill } from '../src/pricing.js';
import type { UsageEvent } from '../src/parser.js';

describe('calculateMonthlyBill', () => {
  it('keeps free plan usage under the allowance at zero cost', () => {
    const events: UsageEvent[] = [
      { userId: 'alice', plan: 'free', units: 90, region: 'us' },
    ];

    expect(calculateMonthlyBill(events)).toMatchObject({
      subtotal: 0,
      surcharge: 0,
      total: 0,
      totalUnits: 90,
    });
  });

  it('charges pro plan usage above the allowance and applies regional surcharge', () => {
    const events: UsageEvent[] = [
      { userId: 'bob', plan: 'pro', units: 250, region: 'eu' },
    ];

    expect(calculateMonthlyBill(events)).toMatchObject({
      subtotal: 24,
      surcharge: 4.8,
      total: 28.8,
      totalUnits: 250,
    });
  });
});
