import { describe, expect, it } from 'vitest';

import { parseUsageCsv } from '../src/parser.js';

describe('parseUsageCsv', () => {
  it('parses valid rows from a csv export', () => {
    const csv = [
      'userId,plan,units,region',
      'alice,free,40,us',
      'bob,pro,220,eu',
    ].join('\n');

    expect(parseUsageCsv(csv)).toEqual({
      accepted: [
        { userId: 'alice', plan: 'free', units: 40, region: 'us' },
        { userId: 'bob', plan: 'pro', units: 220, region: 'eu' },
      ],
      rejected: [],
    });
  });

  it('normalizes whitespace around valid fields', () => {
    const csv = [
      'userId,plan,units,region',
      ' alice , pro , 250 , eu ',
    ].join('\n');

    expect(parseUsageCsv(csv)).toEqual({
      accepted: [
        { userId: 'alice', plan: 'pro', units: 250, region: 'eu' },
      ],
      rejected: [],
    });
  });

  it('captures incomplete and invalid rows with explicit reasons', () => {
    const csv = [
      'userId,plan,units,region',
      'alice,free,40,us',
      'missing-region,pro,20',
      'bad-plan,business,55,us',
      'bad-units,pro,nope,eu',
      'negative,enterprise,-10,apac',
    ].join('\n');

    expect(parseUsageCsv(csv)).toEqual({
      accepted: [
        { userId: 'alice', plan: 'free', units: 40, region: 'us' },
      ],
      rejected: [
        {
          rowNumber: 3,
          rawLine: 'missing-region,pro,20',
          reason: 'missing-field',
          details: 'Rows must include userId, plan, units, and region.',
        },
        {
          rowNumber: 4,
          rawLine: 'bad-plan,business,55,us',
          reason: 'invalid-plan',
          details: 'Unsupported plan: business',
        },
        {
          rowNumber: 5,
          rawLine: 'bad-units,pro,nope,eu',
          reason: 'invalid-units',
          details: 'Units must be a valid number: nope',
        },
        {
          rowNumber: 6,
          rawLine: 'negative,enterprise,-10,apac',
          reason: 'negative-units',
          details: 'Units must be zero or greater: -10',
        },
      ],
    });
  });

  it('returns empty results for header-only csv input', () => {
    const csv = 'userId,plan,units,region';

    expect(parseUsageCsv(csv)).toEqual({
      accepted: [],
      rejected: [],
    });
  });
});
