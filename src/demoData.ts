import type { AppState } from './types';

export const demoState: AppState = {
  meta: {
    projectTitle: "AI-Assisted Analysis of Urban Air Pollution and Health Outcomes",
    researchArea: "Epidemiology",
    studyType: "Observational Study",
    organisation: "School of Public Health",
    description: "A study examining the relationship between urban air pollution exposure and respiratory health outcomes using large-scale datasets."
  },
  stages: [
    {
      id: "s1",
      title: "Research Question Definition",
      description: "Define the research question and scope of the study.",
      order: 1,
      aiInvolvement: "limited",
      aiDescription: "AI tools may be used to explore related literature and refine question wording.",
      humanRole: "Lead researcher defines and approves final research question.",
      inputs: "Initial research ideas, literature",
      outputs: "Final research question",
      risks: "Over-reliance on AI summarisation of literature",
      ethicsConsiderations: "Ensure accurate interpretation of prior research",
      reproducibilityNotes: "Document sources used to refine the question"
    },
    {
      id: "s2",
      title: "Data Collection",
      description: "Collect relevant environmental and health datasets.",
      order: 2,
      aiInvolvement: "none",
      aiDescription: "",
      humanRole: "Researchers select and validate data sources.",
      inputs: "Public datasets, health records",
      outputs: "Cleaned dataset",
      risks: "Data quality and completeness",
      ethicsConsiderations: "Privacy and data protection compliance",
      reproducibilityNotes: "Record data sources and access methods"
    },
    {
      id: "s3",
      title: "Data Analysis",
      description: "Analyse relationships between variables using statistical and AI-assisted methods.",
      order: 3,
      aiInvolvement: "significant",
      aiDescription: "AI tools may assist with exploratory analysis and pattern detection.",
      humanRole: "Researchers validate and interpret results.",
      inputs: "Prepared dataset",
      outputs: "Analysis results",
      risks: "Misinterpretation of AI-generated outputs",
      ethicsConsiderations: "Transparency in methods",
      reproducibilityNotes: "Document analysis steps and parameters"
    }
  ],
  globalRisks: [
    "Over-reliance on AI outputs",
    "Bias in datasets",
    "Lack of transparency in AI-assisted methods"
  ],
  institutionalNotes: {
    policyReference: "Refer to institutional guidance on AI use in research and data ethics.",
    reviewerNotes: "Example workflow for demonstration",
    generalNotes: "All fields should remain editable after loading"
  },
  lastUpdated: new Date().toISOString()
};

export const emptyState: AppState = {
  meta: {
    projectTitle: "",
    researchArea: "",
    studyType: "",
    organisation: "",
    description: ""
  },
  stages: [],
  globalRisks: [],
  institutionalNotes: {
    policyReference: "",
    reviewerNotes: "",
    generalNotes: ""
  },
  lastUpdated: new Date().toISOString()
};
