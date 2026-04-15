export type Plan = 'free' | 'pro' | 'enterprise';

export interface UsageEvent {
  userId: string;
  plan: Plan;
  units: number;
  region: string;
}

const VALID_PLANS: Plan[] = ['free', 'pro', 'enterprise'];

export function parseUsageCsv(csv: string): UsageEvent[] {
  const lines = csv.split(/\r?\n/).filter(Boolean);

  if (lines.length <= 1) {
    return [];
  }

  return lines.slice(1).flatMap((line) => {
    const [userId, planRaw, unitsRaw, region] = line.split(',');

    if (!userId || !planRaw || !region) {
      return [];
    }

    if (!VALID_PLANS.includes(planRaw as Plan)) {
      return [];
    }

    return [{
      userId,
      plan: planRaw as Plan,
      units: Number(unitsRaw || 0),
      region,
    }];
  });
}
