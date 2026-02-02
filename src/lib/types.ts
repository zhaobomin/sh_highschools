export type District =
  | '黄浦'
  | '徐汇'
  | '长宁'
  | '静安'
  | '普陀'
  | '虹口'
  | '杨浦'
  | '闵行'
  | '宝山'
  | '嘉定'
  | '浦东'
  | '金山'
  | '松江'
  | '青浦'
  | '奉贤'
  | '崇明';

export type JuniorType = '公办' | '民办';

export type HighSchoolType = '市重点' | '区重点' | '一般高中';

export interface HighSchool {
  id: string;
  name: string;
  code?: string;
  district: District;
  type: HighSchoolType;
  fullType?: string;
  accommodation?: string;
  isTarget?: boolean;
  stats?: {
    scoreToDistrict?: number | null;
    scoreToSchool?: number | null;
    scoreUnified?: number | null;
    quotaAutonomous?: number | null;
    quotaToDistrict?: number | null;
    quotaToSchool?: number | null;
    probability?: number;
  };
}

export interface QuotaLine {
  id: string;
  schoolId: string;
  district: District;
  count: number;
}

export interface SchoolQuotaLine {
  id: string;
  schoolId: string;
  middleSchoolId: string;
  count: number;
}

export interface SchoolScoreLine {
  id: string;
  schoolId: string;
  middleSchoolId: string;
  score: number;
}

export interface ScoreLine {
  id: string;
  schoolId: string;
  schoolName: string;
  district: District;
  year: number;
  score: number;
  scoreUpper?: number;
  scoreLower?: number;
}

export interface MiddleSchool {
  id: string;
  name: string;
  district: District;
  type: JuniorType;
}

export interface StudentProfile {
  district: District | null;
  middleSchoolId: string | null;
  stableScore: number | null;
  highScore: number | null;
  lowScore: number | null;
}

export interface StudentProfileResponse {
  district: District | null;
  middle_school_id: string | null;
  middle_school_name?: string | null;
  stable_score: number | null;
  high_score: number | null;
  low_score: number | null;
}

export interface TargetEvaluationModel {
  mean: number | null;
  std: number | null;
  count: number;
  source: string;
}

export interface TargetEvaluationProfile {
  district: District | null;
  middleSchoolId: string | null;
  stableScore: number | null;
  highScore: number | null;
  lowScore: number | null;
}

export interface TargetEvaluationChannel {
  score: number | null;
  quota: number | null;
  probability: number | null;
  gap: number | null;
}

export interface TargetEvaluationSchool {
  id: string;
  name: string;
  district: District;
  type: HighSchoolType;
  fullType?: string;
  channels: {
    autonomous: TargetEvaluationChannel;
    district: TargetEvaluationChannel;
    school: TargetEvaluationChannel;
    unified: TargetEvaluationChannel;
  };
  overall: {
    probability: number | null;
    level: 'high' | 'mid' | 'low' | 'na';
  };
}

export interface TargetEvaluationResponse {
  profile: TargetEvaluationProfile;
  model: TargetEvaluationModel;
  targets: TargetEvaluationSchool[];
}

export interface TargetSchool {
  id: string;
  schoolId: string;
  createdAt: string;
}

export interface MockExam {
  id: string;
  name: string;
  examDate: string | null;
  scores: {
    chinese: number | null;
    math: number | null;
    english: number | null;
    politics: number | null;
    history: number | null;
    pe: number | null;
  };
  totalScore: number;
  createdAt: string;
  updatedAt: string;
}

export interface MockExamStats {
  count: number;
  mean: number | null;
  std: number | null;
  min: number | null;
  max: number | null;
}
