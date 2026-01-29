import type { MockExam, StudentProfile, TargetSchool } from '@/lib/types';
import { readJson, writeJson } from '@/lib/storage';

const KEY_PROFILE = 'shhs:studentProfile:v1';
const KEY_TARGETS = 'shhs:targets:v1';
const KEY_MOCKS = 'shhs:mockExams:v1';

export function createId(prefix: string): string {
  return `${prefix}_${Math.random().toString(16).slice(2)}_${Date.now().toString(16)}`;
}

export function loadStudentProfile(): StudentProfile {
  return readJson<StudentProfile>(KEY_PROFILE, {
    district: null,
    juniorType: null,
    middleSchoolId: null,
    stableScore: null,
    highScore: null,
    lowScore: null,
  });
}

export function saveStudentProfile(profile: StudentProfile): void {
  writeJson(KEY_PROFILE, profile);
}

export function loadTargets(): TargetSchool[] {
  return readJson<TargetSchool[]>(KEY_TARGETS, []);
}

export function saveTargets(targets: TargetSchool[]): void {
  writeJson(KEY_TARGETS, targets);
}

export function loadMockExams(): MockExam[] {
  return readJson<MockExam[]>(KEY_MOCKS, []);
}

export function saveMockExams(exams: MockExam[]): void {
  writeJson(KEY_MOCKS, exams);
}

