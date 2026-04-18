import type { InstitutionalNotes } from '../types';

interface Props {
  globalRisks: string[];
  institutionalNotes: InstitutionalNotes;
  onChangeRisks: (risks: string[]) => void;
  onChangeNotes: (notes: InstitutionalNotes) => void;
}

export function RiskEthicsPanel({ globalRisks, institutionalNotes, onChangeRisks, onChangeNotes }: Props) {
  const updateNote = (key: keyof InstitutionalNotes, value: string) => {
    onChangeNotes({ ...institutionalNotes, [key]: value });
  };

  const updateRisk = (index: number, value: string) => {
    const newRisks = [...globalRisks];
    newRisks[index] = value;
    onChangeRisks(newRisks);
  };

  const addRisk = () => onChangeRisks([...globalRisks, ""]);
  const removeRisk = (index: number) => onChangeRisks(globalRisks.filter((_, i) => i !== index));

  return (
    <div className="cp-card cp-hide-print">
      <h2>Risk & Ethics Overview</h2>
      
      <div className="form-group">
        <label>Cross-Cutting Risks</label>
        <p className="text-small text-muted" style={{ marginBottom: '8px' }}>
          Identify risks that span across the entire workflow (e.g. general dataset bias, system unavailability).
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '8px' }}>
          {globalRisks.map((risk, index) => (
            <div key={index} className="flex-row">
              <input 
                style={{ flex: 1 }}
                value={risk}
                onChange={e => updateRisk(index, e.target.value)}
                placeholder="Describe a global risk..."
              />
              <button 
                className="cp-button-danger"
                onClick={() => removeRisk(index)}
              >×</button>
            </div>
          ))}
        </div>
        <button className="cp-button-secondary" onClick={addRisk}>+ Add Risk</button>
      </div>

      <hr style={{ margin: '24px 0', border: 'none', borderTop: '1px solid var(--color-border-default)' }} />

      <h3 style={{ marginTop: 0 }}>Institutional Notes</h3>
      
      <div className="form-group">
        <label>Policy References</label>
        <input 
          value={institutionalNotes.policyReference || ''}
          onChange={e => updateNote('policyReference', e.target.value)}
          placeholder="e.g. University AI Guidelines 2024"
        />
      </div>

      <div className="form-group">
        <label>Reviewer Notes</label>
        <textarea 
          value={institutionalNotes.reviewerNotes || ''}
          onChange={e => updateNote('reviewerNotes', e.target.value)}
          placeholder="Comments from or for ethics reviewers"
        />
      </div>

      <div className="form-group" style={{ marginBottom: 0 }}>
        <label>General Notes</label>
        <textarea 
          value={institutionalNotes.generalNotes || ''}
          onChange={e => updateNote('generalNotes', e.target.value)}
        />
      </div>
    </div>
  );
}
