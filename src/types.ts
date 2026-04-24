export interface AppState {
  meta: Meta;
  stages: Stage[];
  globalRisks: string[];
  institutionalNotes: InstitutionalNotes;
  lastUpdated: string;
}

export interface Meta {
  projectTitle: string;
  researchArea: string;
  studyType: string;
  organisation?: string;
  description: string;
  rationale?: string;
  risks?: string;
  assumptions?: string;
}

export interface Stage {
  id: string;
  title: string;
  description: string;
  order: number;
  aiInvolvement: 'none' | 'limited' | 'significant';
  aiDescription: string;
  humanRole: string;
  inputs: string;
  outputs: string;
  risks: string;
  ethicsConsiderations: string;
  reproducibilityNotes: string;
  rationale?: string;
  assumptions?: string;
}

export interface InstitutionalNotes {
  policyReference?: string;
  reviewerNotes?: string;
  generalNotes?: string;
}
