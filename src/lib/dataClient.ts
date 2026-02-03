import fetcher, { type ApiResponse } from '@/lib/api';
import type {
  District,
  HighSchool,
  HighSchoolType,
  MiddleSchool,
  ScoreLine,
  StudentProfileResponse,
  TargetEvaluationResponse,
  TargetEvaluationSchool,
  TargetEvaluationModel,
} from '@/lib/types';

import { mockGetLatestScoreLine, mockListMiddleSchools, mockListSchools, mockGetSchoolDetail, mockListFilterOptions } from '@/mocks/api';

export type {
  TargetEvaluationSchool,
  TargetEvaluationModel,
};


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
  middleSchoolId?: string | null;
  stableScore?: number | null;
  highScore?: number | null;
  lowScore?: number | null;
}): Promise<ApiResponse<HighSchool[]>> {
  return fallback(
    () => fetcher.get('/schools/', { params }),
    () => mockListSchools(params)
  );
}

export async function addTargetSchool(params: { schoolId: string }): Promise<ApiResponse<{ id?: string; school_code: string; isTarget: boolean }>> {
  return fallback(
    () => fetcher.post('/schools/targets', { school_code: params.schoolId }),
    () => Promise.resolve({ data: { school_code: params.schoolId, isTarget: true } })
  );
}

export async function listTargetSchools(): Promise<ApiResponse<HighSchool[]>> {
  return fallback(
    () => fetcher.get('/schools/targets'),
    () => Promise.resolve({ data: [], meta: { total: 0 } })
  );
}

export async function getTargetEvaluation(): Promise<ApiResponse<TargetEvaluationResponse>> {
  return fallback(
    () => fetcher.get('/schools/targets/evaluation'),
    () => Promise.resolve({
      data: {
        profile: {
          district: null,
          middleSchoolId: null,
          stableScore: null,
          highScore: null,
          lowScore: null,
        },
        model: { mean: null, std: null, count: 0, source: 'none' },
        targets: [],
      },
    })
  );
}

export async function removeTargetSchool(params: { schoolId: string }): Promise<ApiResponse<{ school_code: string; isTarget: boolean }>> {
  return fallback(
    () => fetcher.delete(`/schools/targets/${encodeURIComponent(params.schoolId)}`),
    () => Promise.resolve({ data: { school_code: params.schoolId, isTarget: false } })
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

export async function getSchoolDetail(schoolId: string): Promise<ApiResponse<HighSchool | null>> {
  return fallback(
    async () => {
      const schoolData = await fetcher.get(`/schools/${encodeURIComponent(schoolId)}/detail`);
      
      if (schoolData.data) {
        // 转换为旧接口格式，确保兼容性
        // 注意：分数区间需要特殊处理，使用最高值作为旧接口的单一分数
        schoolData.data.stats = {
          scoreToDistrict: Array.isArray(schoolData.data.scores?.toDistrict) ? schoolData.data.scores.toDistrict[1] : schoolData.data.scores?.toDistrict,
          scoreToSchool: Array.isArray(schoolData.data.scores?.toSchool) ? schoolData.data.scores.toSchool[1] : schoolData.data.scores?.toSchool,
          scoreUnified: schoolData.data.scores?.unified ?? schoolData.data.scores?.parallel,
          quotaAutonomous: schoolData.data.enrollment?.autonomous,
          quotaToDistrict: schoolData.data.enrollment?.toDistrict,
          quotaToSchool: schoolData.data.enrollment?.toSchool,
          probability: schoolData.data.probability,
        };
      }
      
      return schoolData;
    },
    async () => {
      const data = await mockGetSchoolDetail(schoolId);
      return { data };
    }
  );
}

export async function getStudentProfile(): Promise<ApiResponse<StudentProfileResponse | null>> {
  return fallback(
    () => fetcher.get('/filter/student-profile'),
    () => Promise.resolve({ data: null })
  );
}

export async function saveStudentProfile(data: StudentProfileResponse): Promise<ApiResponse<StudentProfileResponse>> {
  return fallback(
    () => fetcher.post('/filter/student-profile', data),
    () => Promise.resolve({ data })
  );
}

export async function getFilterOptions(): Promise<ApiResponse<{
  districts: District[];
  middle_schools: MiddleSchool[];
}>> {
  return fallback(
    () => fetcher.get('/filter/options'),
    () => mockListFilterOptions()
  );
}
