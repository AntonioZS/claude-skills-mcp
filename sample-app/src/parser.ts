export type Plan = 'free' | 'pro' | 'enterprise';

export type RejectedUsageReason =
  | 'missing-field'
  | 'invalid-plan'
  | 'invalid-units'
  | 'negative-units';

export interface UsageEvent {
  userId: string;
  plan: Plan;
  units: number;
  region: string;
}

export interface RejectedUsageRow {
  rowNumber: number;
  rawLine: string;
  reason: RejectedUsageReason;
  details?: string;
}

export interface ParseUsageResult {
  accepted: UsageEvent[];
  rejected: RejectedUsageRow[];
}

const VALID_PLANS: Plan[] = ['free', 'pro', 'enterprise'];

export function parseUsageCsv(csv: string): ParseUsageResult {
  const lines = csv.split(/\r?\n/).filter(Boolean);

  if (lines.length <= 1) {
    return { accepted: [], rejected: [] };
  }

  return lines.slice(1).reduce<ParseUsageResult>((result, line, index) => {
    const rowNumber = index + 2;
    const [userIdRaw = '', planRaw = '', unitsRaw = '', regionRaw = ''] = line.split(',');
    const userId = userIdRaw.trim();
    const plan = planRaw.trim();
    const unitsValue = unitsRaw.trim();
    const region = regionRaw.trim();

    if (!userId || !plan || !region || !unitsValue) {
      result.rejected.push({
        rowNumber,
        rawLine: line,
        reason: 'missing-field',
        details: 'Rows must include userId, plan, units, and region.',
      });
      return result;
    }

    if (!VALID_PLANS.includes(plan as Plan)) {
      result.rejected.push({
        rowNumber,
        rawLine: line,
        reason: 'invalid-plan',
        details: `Unsupported plan: ${plan}`,
      });
      return result;
    }

    const units = Number(unitsValue);

    if (!Number.isFinite(units)) {
      result.rejected.push({
        rowNumber,
        rawLine: line,
        reason: 'invalid-units',
        details: `Units must be a valid number: ${unitsValue}`,
      });
      return result;
    }

    if (units < 0) {
      result.rejected.push({
        rowNumber,
        rawLine: line,
        reason: 'negative-units',
        details: `Units must be zero or greater: ${units}`,
      });
      return result;
    }

    result.accepted.push({
      userId,
      plan: plan as Plan,
      units,
      region,
    });

    return result;
  }, { accepted: [], rejected: [] });
}
