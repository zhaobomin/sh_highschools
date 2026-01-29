import type { ApiResponse } from '@/lib/api';
import type { District, HighSchool, HighSchoolType, MiddleSchool, ScoreLine } from '@/lib/types';
import { highSchools, middleSchools, scoreLines, schoolScoreLines, quotaLines, schoolQuotaLines } from '@/mocks/data';

function delay(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

export async function mockListSchools(params?: {
  q?: string;
  district?: District | '全部';
  type?: HighSchoolType | '全部';
  studentDistrict?: District | null;
  middleSchoolId?: string | null;
}): Promise<ApiResponse<HighSchool[]>> {
  await delay(200);

  const q = (params?.q ?? '').trim();
  const district = params?.district;
  const type = params?.type;

  const filtered = highSchools.filter((s) => {
    if (q && !s.name.includes(q)) return false;
    if (district && district !== '全部' && s.district !== district) return false;
    if (type && type !== '全部' && s.type !== type) return false;
    return true;
  });

  // Enrich with stats
  const enriched = filtered.map(s => {
    const stats: HighSchool['stats'] = {};
    
    // 1. Score to District
    if (params?.studentDistrict) {
      const sl = scoreLines.find(x => x.schoolId === s.id && x.district === params.studentDistrict);
      if (sl) stats.scoreToDistrict = sl.score;

      // 3. Quota to District
      const ql = quotaLines.find(x => x.schoolId === s.id && x.district === params.studentDistrict);
      if (ql) stats.quotaToDistrict = ql.count;
    }

    // 2. Score to School
    if (params?.middleSchoolId) {
      const ssl = schoolScoreLines.find(x => x.schoolId === s.id && x.middleSchoolId === params.middleSchoolId);
      if (ssl) stats.scoreToSchool = ssl.score;

      // 4. Quota to School
      const sql = schoolQuotaLines.find(x => x.schoolId === s.id && x.middleSchoolId === params.middleSchoolId);
      if (sql) stats.quotaToSchool = sql.count;
    }

    // 5. Probability (Mock)
    stats.probability = Math.floor(Math.random() * 40) + 50; // 50-90%

    return { ...s, stats };
  });

  return { data: enriched, meta: { total: enriched.length } };
}

export async function mockListScoreLines(params: {
  schoolId: string;
  district?: District | '全部';
}): Promise<ApiResponse<ScoreLine[]>> {
  await delay(150);

  const filtered = scoreLines.filter((sl) => {
    if (sl.schoolId !== params.schoolId) return false;
    if (params.district && params.district !== '全部' && sl.district !== params.district) return false;
    return true;
  });

  return { data: filtered, meta: { total: filtered.length } };
}

export async function mockGetLatestScoreLine(params: {
  schoolId: string;
  district?: District | null;
}): Promise<ApiResponse<ScoreLine | null>> {
  await delay(120);

  const candidates = scoreLines.filter((sl) => {
    if (sl.schoolId !== params.schoolId) return false;
    if (params.district && sl.district !== params.district) return false;
    return true;
  });

  const latest = candidates.sort((a, b) => b.year - a.year)[0] ?? null;
  return { data: latest };
}

export async function mockListMiddleSchools(params?: {
  district?: District | null;
  type?: '公办' | '民办' | null;
}): Promise<ApiResponse<MiddleSchool[]>> {
  await delay(200);

  const filtered = middleSchools.filter((ms) => {
    if (params?.district && ms.district !== params.district) return false;
    if (params?.type && ms.type !== params.type) return false;
    return true;
  });

  return { data: filtered, meta: { total: filtered.length } };
}

