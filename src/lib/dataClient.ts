import fetcher, { type ApiResponse } from '@/lib/api';
import type { District, HighSchool, HighSchoolType, JuniorType, MiddleSchool, ScoreLine } from '@/lib/types';
import { mockGetLatestScoreLine, mockListMiddleSchools, mockListSchools, mockGetSchoolDetail, mockListFilterOptions } from '@/mocks/api';


const useMocks = false; // import.meta.env.VITE_USE_MOCKS === '1';

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
    () => fetcher.get('/schools/', { params }),
    () => mockListSchools(params)
  );
}

export async function listMiddleSchools(params?: {
  district?: District | null;
  type?: '公办' | '民办' | null;
}): Promise<ApiResponse<MiddleSchool[]>> {
  // 不传递筛选参数，获取完整的初中学校列表
  return fallback(
    () => fetcher.get('/filter/middle-schools'),
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

export async function getSchoolDetail(schoolId: string): Promise<HighSchool | null> {
  return fallback(
    () => fetcher.get(`/schools/${encodeURIComponent(schoolId)}`),
    () => mockGetSchoolDetail(schoolId)
  );
}

export async function getStudentProfile(): Promise<ApiResponse<any | null>> {
  return fallback(
    () => fetcher.get('/filter/student-profile'),
    () => Promise.resolve({ data: null })
  );
}

export async function saveStudentProfile(data: any): Promise<ApiResponse<any>> {
  return fallback(
    () => fetcher.post('/filter/student-profile', data),
    () => Promise.resolve({ data })
  );
}

export async function getFilterOptions(): Promise<ApiResponse<{
  districts: District[];
  junior_types: JuniorType[];
  middle_schools: MiddleSchool[];
}>> {
  return fallback(
    () => fetcher.get('/filter/options'),
    () => mockListFilterOptions()
  );
}
