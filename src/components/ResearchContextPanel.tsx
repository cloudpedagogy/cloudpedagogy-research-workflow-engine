import type { AppState } from '../types';

interface Props {
  state: AppState;
  onChange: (updates: Partial<AppState['meta']>) => void;
}

export function ResearchContextPanel({ state, onChange }: Props) {
  const { meta } = state;
  return (
    <div className="cp-card cp-hide-print">
      <h2>Research Context</h2>
      <div className="form-group">
        <label>Project Title</label>
        <input 
          value={meta.projectTitle} 
          onChange={e => onChange({ projectTitle: e.target.value })} 
          placeholder="e.g. AI-Assisted Analysis of Urban Air Pollution"
        />
      </div>
      <div className="form-group">
        <label>Research Area</label>
        <input 
          value={meta.researchArea} 
          onChange={e => onChange({ researchArea: e.target.value })} 
        />
      </div>
      <div className="form-group">
        <label>Study Type (e.g., Observational, Trial, Qualitative)</label>
        <input 
          value={meta.studyType} 
          onChange={e => onChange({ studyType: e.target.value })} 
        />
      </div>
      <div className="form-group">
        <label>Organisation (Optional)</label>
        <input 
          value={meta.organisation || ''} 
          onChange={e => onChange({ organisation: e.target.value })} 
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea 
          value={meta.description} 
          onChange={e => onChange({ description: e.target.value })} 
        />
      </div>
    </div>
  );
}
