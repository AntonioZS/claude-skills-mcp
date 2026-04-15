import { describe, expect, it } from 'vitest';

import { buildOperationsReport } from '../src/report.js';
import type { RejectedUsageRow, UsageEvent } from '../src/parser.js';
import type { PricingSummary } from '../src/pricing.js';

describe('buildOperationsReport', () => {
  it('includes a rejected-row summary when rejected rows are provided', () => {
    const events: UsageEvent[] = [
      { userId: 'alice', plan: 'pro', units: 250, region: 'eu' },
      { userId: 'bob', plan: 'enterprise', units: 600, region: 'us' },
    ];

    const summary: PricingSummary = {
      subtotal: 32,
      surcharge: 4.8,
      total: 36.8,
      totalUnits: 850,
      planBreakdown: {
        pro: 28.8,
        enterprise: 8,
      },
    };

    const rejectedRows: RejectedUsageRow[] = [
      {
        rowNumber: 4,
        rawLine: 'bad-plan,business,55,us',
        reason: 'invalid-plan',
      },
      {
        rowNumber: 5,
        rawLine: 'bad-units,pro,nope,eu',
        reason: 'invalid-units',
      },
      {
        rowNumber: 6,
        rawLine: 'negative,enterprise,-10,apac',
        reason: 'negative-units',
      },
    ];

    expect(buildOperationsReport(events, summary, rejectedRows)).toContain('Rejected rows: 3');
    expect(buildOperationsReport(events, summary, rejectedRows)).toContain(
      'Rejected reasons: invalid-plan (1), invalid-units (1), negative-units (1)',
    );
  });
});