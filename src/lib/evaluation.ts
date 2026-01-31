export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function normalCdf(z: number): number {
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989423 * Math.exp((-z * z) / 2);
  const p =
    d *
    t *
    (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  const cdf = z > 0 ? 1 - p : p;
  return clamp(cdf, 0, 1);
}

export function probabilityToReach(threshold: number, mean: number, std: number): number {
  const safeStd = std <= 0 ? 1 : std;
  const z = (threshold - mean) / safeStd;
  return clamp(1 - normalCdf(z), 0, 1);
}

export type ProbabilityLevel = 'high' | 'mid' | 'low';

export function levelFromProbability(p: number): ProbabilityLevel {
  if (p > 0.9) return 'high';
  if (p >= 0.7) return 'mid';
  return 'low';
}

