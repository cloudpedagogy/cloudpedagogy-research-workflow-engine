import type { Stage } from '../types';

interface Props {
  stage: Stage;
  onChange: (stage: Stage) => void;
  onClose: () => void;
}

export function StageDetailEditor({ stage, onChange, onClose }: Props) {
  const update = (updates: Partial<Stage>) => {
    onChange({ ...stage, ...updates });
  };

  return (
    <div className="cp-card" style={{ marginTop: '16px', borderTop: '4px solid #000' }}>
      <div className="flex-between" style={{ marginBottom: '16px' }}>
        <h3>Editing: Stage {stage.order}</h3>
        <button className="cp-button-secondary" onClick={onClose}>Close Editor</button>
      </div>

      <div className="form-group">
        <label>Stage Title</label>
        <input 
          value={stage.title}
          onChange={e => update({ title: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label>Stage Description</label>
        <textarea 
          value={stage.description}
          onChange={e => update({ description: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label>Inputs</label>
        <input 
          value={stage.inputs}
          onChange={e => update({ inputs: e.target.value })}
          placeholder="Data, literature, resources entering this stage"
        />
      </div>

      <div className="form-group">
        <label>Outputs</label>
        <input 
          value={stage.outputs}
          onChange={e => update({ outputs: e.target.value })}
          placeholder="Artifacts or data generated"
        />
      </div>

      <div className="form-group" style={{ backgroundColor: '#F9FAFB', padding: '16px', borderRadius: '4px' }}>
        <h4 style={{ marginTop: 0 }}>AI & Human Roles</h4>
        
        <div className="form-group">
          <label>AI Involvement</label>
          <select 
            value={stage.aiInvolvement}
            onChange={e => update({ aiInvolvement: e.target.value as 'none' | 'limited' | 'significant' })}
          >
            <option value="none">None</option>
            <option value="limited">Limited</option>
            <option value="significant">Significant</option>
          </select>
        </div>

        {stage.aiInvolvement !== 'none' && (
          <div className="form-group">
            <label>AI Usage Description</label>
            <textarea 
              value={stage.aiDescription}
              onChange={e => update({ aiDescription: e.target.value })}
              placeholder="How are AI tools used here?"
            />
          </div>
        )}

        <div className="form-group" style={{ marginBottom: 0 }}>
          <label>Human Role / Oversight</label>
          <textarea 
            value={stage.humanRole}
            onChange={e => update({ humanRole: e.target.value })}
            placeholder="What decisions or validations does the human researcher perform?"
          />
        </div>
      </div>

      <div className="form-group">
        <label>Risks & Mitigations</label>
        <textarea 
          value={stage.risks}
          onChange={e => update({ risks: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label>Ethics Considerations</label>
        <textarea 
          value={stage.ethicsConsiderations}
          onChange={e => update({ ethicsConsiderations: e.target.value })}
        />
      </div>

      <div className="form-group" style={{ marginBottom: 0 }}>
        <label>Reproducibility Notes</label>
        <textarea 
          value={stage.reproducibilityNotes}
          onChange={e => update({ reproducibilityNotes: e.target.value })}
          placeholder="Record parameters, model versions, or seeds needed to reproduce outputs"
        />
      </div>
    </div>
  );
}
