import type { ApiResponse } from '@/lib/api';
import type { District, HighSchool, HighSchoolType, MiddleSchool, ScoreLine } from '@/lib/types';
import { districts, highSchools, middleSchools, scoreLines, schoolScoreLines, quotaLines, schoolQuotaLines } from '@/mocks/data';

function delay(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

export async function mockListSchools(params?: {
  q?: string;
  district?: District | '全部';
  type?: HighSchoolType | '全部';
  middleSchoolId?: string | null;
  stableScore?: number | null;
  highScore?: number | null;
  lowScore?: number | null;
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
    if (params?.district && params.district !== '全部') {
      const sl = scoreLines.find(x => x.schoolId === s.id && x.district === params.district);
      if (sl) stats.scoreToDistrict = sl.score;

      // 3. Quota to District
      const ql = quotaLines.find(x => x.schoolId === s.id && x.district === params.district);
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

    // 5. Unified Admission Score (Mock)
    let baseScore: number;
    if (s.type === '市重点') {
      baseScore = 680 + Math.random() * 20;
    } else if (s.type === '区重点') {
      baseScore = 650 + Math.random() * 20;
    } else {
      baseScore = 620 + Math.random() * 20;
    }
    stats.scoreUnified = Math.round(baseScore);

    // 6. Autonomous Enrollment Quota (Mock)
    let autonomousQuota: number;
    if (s.type === '市重点') {
      autonomousQuota = 50 + Math.floor(Math.random() * 50);
    } else if (s.type === '区重点') {
      autonomousQuota = 20 + Math.floor(Math.random() * 30);
    } else {
      autonomousQuota = 5 + Math.floor(Math.random() * 15);
    }
    stats.quotaAutonomous = autonomousQuota;

    // 7. Probability based on student scores
    if (params?.stableScore !== null && params?.stableScore !== undefined) {
      const studentScore = params.stableScore;
      let baseProbability = 0;
      
      // Calculate probability based on unified admission score
      if (stats.scoreUnified) {
        if (studentScore >= stats.scoreUnified + 10) {
          baseProbability = 90; // High probability
        } else if (studentScore >= stats.scoreUnified) {
          baseProbability = 75; // Good probability
        } else if (studentScore >= stats.scoreUnified - 10) {
          baseProbability = 60; // Moderate probability
        } else if (studentScore >= stats.scoreUnified - 20) {
          baseProbability = 40; // Low probability
        } else {
          baseProbability = 20; // Very low probability
        }
      }
      
      // Adjust based on student's high and low scores
      if (params.highScore !== null && params.highScore !== undefined && stats.scoreUnified) {
        if (params.highScore >= stats.scoreUnified) {
          baseProbability += 10;
        }
      }
      
      if (params.lowScore !== null && params.lowScore !== undefined && stats.scoreUnified) {
        if (params.lowScore < stats.scoreUnified - 20) {
          baseProbability -= 10;
        }
      }
      
      // Ensure probability is within reasonable range
      stats.probability = Math.max(10, Math.min(95, Math.round(baseProbability)));
    } else {
      // Fallback to random if no scores provided
      stats.probability = Math.floor(Math.random() * 40) + 50; // 50-90%
    }

    // Set defaults for missing values
    if (stats.scoreToDistrict === undefined) stats.scoreToDistrict = stats.scoreUnified;
    if (stats.scoreToSchool === undefined) stats.scoreToSchool = Math.round(stats.scoreUnified - 5);
    if (stats.quotaToDistrict === undefined) {
      let districtQuota: number;
      if (s.type === '市重点') {
        districtQuota = 20 + Math.floor(Math.random() * 30);
      } else if (s.type === '区重点') {
        districtQuota = 15 + Math.floor(Math.random() * 20);
      } else {
        districtQuota = 10 + Math.floor(Math.random() * 15);
      }
      stats.quotaToDistrict = districtQuota;
    }
    if (stats.quotaToSchool === undefined) {
      let schoolQuota: number;
      if (s.type === '市重点') {
        schoolQuota = 5 + Math.floor(Math.random() * 10);
      } else if (s.type === '区重点') {
        schoolQuota = 3 + Math.floor(Math.random() * 7);
      } else {
        schoolQuota = 2 + Math.floor(Math.random() * 5);
      }
      stats.quotaToSchool = schoolQuota;
    }

    return { ...s, stats, isTarget: false };
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

export async function mockListFilterOptions(): Promise<ApiResponse<{
  districts: District[];
  middle_schools: MiddleSchool[];
}>> {
  await delay(200);

  return {
    data: {
      districts,
      middle_schools: middleSchools,
    },
    meta: {
      total: middleSchools.length,
    },
  };
}

export async function mockGetSchoolDetail(schoolId: string): Promise<HighSchool | null> {
  await delay(200);

  const school = highSchools.find(s => s.id === schoolId);
  if (!school) return null;

  // Enrich with stats
  const stats: HighSchool['stats'] = {};
  
  // 1. Score to District
  const sl = scoreLines.find(x => x.schoolId === school.id);
  if (sl) stats.scoreToDistrict = sl.score;

  // 2. Score to School
  const ssl = schoolScoreLines.find(x => x.schoolId === school.id);
  if (ssl) stats.scoreToSchool = ssl.score;

  // 3. Quota to District
  const ql = quotaLines.find(x => x.schoolId === school.id);
  if (ql) stats.quotaToDistrict = ql.count;

  // 4. Quota to School
  const sql = schoolQuotaLines.find(x => x.schoolId === school.id);
  if (sql) stats.quotaToSchool = sql.count;

  // 5. Unified Admission Score (Mock)
  let baseScore: number;
  if (school.type === '市重点') {
    baseScore = 680 + Math.random() * 20;
  } else if (school.type === '区重点') {
    baseScore = 650 + Math.random() * 20;
  } else {
    baseScore = 620 + Math.random() * 20;
  }
  stats.scoreUnified = Math.round(baseScore);

  // 6. Autonomous Enrollment Quota (Mock)
  let autonomousQuota: number;
  if (school.type === '市重点') {
    autonomousQuota = 50 + Math.floor(Math.random() * 50);
  } else if (school.type === '区重点') {
    autonomousQuota = 20 + Math.floor(Math.random() * 30);
  } else {
    autonomousQuota = 5 + Math.floor(Math.random() * 15);
  }
  stats.quotaAutonomous = autonomousQuota;

  // 7. Probability (Mock)
  stats.probability = Math.floor(Math.random() * 40) + 50; // 50-90%

  // Set defaults for missing values
  if (stats.scoreToDistrict === undefined) stats.scoreToDistrict = stats.scoreUnified;
  if (stats.scoreToSchool === undefined) stats.scoreToSchool = Math.round(stats.scoreUnified - 5);
  if (stats.quotaToDistrict === undefined) {
    let districtQuota: number;
    if (school.type === '市重点') {
      districtQuota = 20 + Math.floor(Math.random() * 30);
    } else if (school.type === '区重点') {
      districtQuota = 15 + Math.floor(Math.random() * 20);
    } else {
      districtQuota = 10 + Math.floor(Math.random() * 15);
    }
    stats.quotaToDistrict = districtQuota;
  }
  if (stats.quotaToSchool === undefined) {
    let schoolQuota: number;
    if (school.type === '市重点') {
      schoolQuota = 5 + Math.floor(Math.random() * 10);
    } else if (school.type === '区重点') {
      schoolQuota = 3 + Math.floor(Math.random() * 7);
    } else {
      schoolQuota = 2 + Math.floor(Math.random() * 5);
    }
    stats.quotaToSchool = schoolQuota;
  }

  return { ...school, stats };
}
