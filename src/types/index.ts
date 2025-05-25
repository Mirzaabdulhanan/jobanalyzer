export interface JobTrend {
  id: string;
  role: string;
  demand: number;
  growthRate: number;
  averageSalary: number;
  industry: string;
  location: string;
  requiredSkills: string[];
  postDate: string;
}

export interface SkillTrend {
  id: string;
  name: string;
  demandScore: number;
  growthRate: number;
  relatedRoles: string[];
  industries: string[];
}

export interface IndustryData {
  name: string;
  jobCount: number;
  growthRate: number;
  topSkills: string[];
  averageSalary: number;
}

export interface LocationData {
  name: string;
  jobCount: number;
  growthRate: number;
  topIndustries: string[];
  averageSalary: number;
}

export type TimeRange = '7d' | '30d' | '90d' | '1y';

export interface FilterOptions {
  industries: string[];
  locations: string[];
  skills: string[];
  roles: string[];
  timeRange: TimeRange;
}