import type { UsageEvent } from './parser.js';
import type { PricingSummary } from './pricing.js';

export function buildOperationsReport(events: UsageEvent[], summary: PricingSummary): string {
  const groupedByRegion: Record<string, { users: string[]; units: number }> = {};

  for (const event of events) {
    const key = event.region.toUpperCase();

    if (!groupedByRegion[key]) {
      groupedByRegion[key] = { users: [], units: 0 };
    }

    groupedByRegion[key].users.push(event.userId);
    groupedByRegion[key].units = groupedByRegion[key].units + event.units;
  }

  let output = 'Operations usage report\n';
  output += '=======================\n';
  output += `Events processed: ${events.length}\n`;
  output += `Units processed: ${summary.totalUnits}\n`;
  output += `Invoice total: $${summary.total.toFixed(2)}\n`;
  output += '\nRegional summary\n';

  for (const region of Object.keys(groupedByRegion)) {
    const entry = groupedByRegion[region];
    output += `- ${region}: ${entry.units} units across ${new Set(entry.users).size} users\n`;
  }

  output += '\nPlan totals\n';

  for (const plan of Object.keys(summary.planBreakdown)) {
    output += `- ${plan}: $${summary.planBreakdown[plan].toFixed(2)}\n`;
  }

  return output;
}
