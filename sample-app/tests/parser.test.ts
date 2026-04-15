import { describe, expect, it } from 'vitest';

import { parseUsageCsv } from '../src/parser.js';

describe('parseUsageCsv', () => {
  it('parses valid rows from a csv export', () => {
    const csv = [
      'userId,plan,units,region',
      'alice,free,40,us',
      'bob,pro,220,eu',
    ].join('\n');

    expect(parseUsageCsv(csv)).toEqual([
      { userId: 'alice', plan: 'free', units: 40, region: 'us' },
      { userId: 'bob', plan: 'pro', units: 220, region: 'eu' },
    ]);
  });

  it('ignores incomplete rows', () => {
    const csv = [
      'userId,plan,units,region',
      'alice,free,40,us',
      'missing-region,pro,20',
    ].join('\n');

    expect(parseUsageCsv(csv)).toHaveLength(1);
  });
});
