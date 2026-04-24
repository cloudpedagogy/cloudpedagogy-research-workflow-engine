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
      <div className="form-group">
        <label style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Optional: Rationale</label>
        <textarea 
          value={meta.rationale || ''} 
          onChange={e => onChange({ rationale: e.target.value })} 
          placeholder="Why is this research being conducted? What is the core reasoning?"
        />
      </div>
      <div className="form-group">
        <label style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Optional: Project-wide Risks / Concerns</label>
        <textarea 
          value={meta.risks || ''} 
          onChange={e => onChange({ risks: e.target.value })} 
          placeholder="High-level risks or concerns for this project..."
        />
      </div>
      <div className="form-group" style={{ marginBottom: 0 }}>
        <label style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Optional: Assumptions</label>
        <textarea 
          value={meta.assumptions || ''} 
          onChange={e => onChange({ assumptions: e.target.value })} 
          placeholder="Global assumptions for this research project..."
        />
      </div>
    </div>
  );
}
