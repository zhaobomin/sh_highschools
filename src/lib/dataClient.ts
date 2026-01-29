import fetcher, { type ApiResponse } from '@/lib/api';
import type { District, HighSchool, HighSchoolType, MiddleSchool, ScoreLine } from '@/lib/types';
import { mockGetLatestScoreLine, mockListMiddleSchools, mockListSchools } from '@/mocks/api';

const useMocks = true; // import.meta.env.VITE_USE_MOCKS === '1';

async function fallback<T>(real: () => Promise<T>, mocked: () => Promise<T>): Promise<T> {
  if (useMocks) return mocked();
  try {
    return await real();
  } catch {
    return mocked();
  }
}

export async function listSchools(params?: {
  q?: string;
  district?: District | '全部';
  type?: HighSchoolType | '全部';
  studentDistrict?: District | null;
  middleSchoolId?: string | null;
}): Promise<ApiResponse<HighSchool[]>> {
  return fallback(
    () => fetcher.get('/schools', { params }),
    () => mockListSchools(params)
  );
}

export async function listMiddleSchools(params?: {
  district?: District | null;
  type?: '公办' | '民办' | null;
}): Promise<ApiResponse<MiddleSchool[]>> {
  return fallback(
    () => fetcher.get('/middle-schools', { params }),
    () => mockListMiddleSchools(params)
  );
}

export async function getLatestScoreLine(params: {
  schoolId: string;
  district?: District | null;
}): Promise<ApiResponse<ScoreLine | null>> {
  return fallback(
    () => fetcher.get(`/schools/${encodeURIComponent(params.schoolId)}/score-lines/latest`, { params }),
    () => mockGetLatestScoreLine(params)
  );
}

