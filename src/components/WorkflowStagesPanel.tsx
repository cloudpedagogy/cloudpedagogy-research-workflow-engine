import type { Stage } from '../types';
import { useState } from 'react';
import { StageDetailEditor } from './StageDetailEditor';

interface Props {
  stages: Stage[];
  onChange: (stages: Stage[]) => void;
}

export function WorkflowStagesPanel({ stages, onChange }: Props) {
  const [selectedStageId, setSelectedStageId] = useState<string | null>(null);

  const addStage = () => {
    const newId = `s${Date.now()}`;
    const newStage: Stage = {
      id: newId,
      title: "New Stage",
      description: "",
      order: stages.length + 1,
      aiInvolvement: "none",
      aiDescription: "",
      humanRole: "",
      inputs: "",
      outputs: "",
      risks: "",
      ethicsConsiderations: "",
      reproducibilityNotes: ""
    };
    onChange([...stages, newStage]);
    setSelectedStageId(newId);
  };

  const removeStage = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(stages.filter(s => s.id !== id).map((s, idx) => ({ ...s, order: idx + 1 })));
    if (selectedStageId === id) setSelectedStageId(null);
  };

  const moveStage = (index: number, direction: 'up' | 'down', e: React.MouseEvent) => {
    e.stopPropagation();
    if (direction === 'up' && index === 0) return;
    if (direction === 'down' && index === stages.length - 1) return;

    const newStages = [...stages];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    
    // Swap
    const temp = newStages[index];
    newStages[index] = newStages[targetIndex];
    newStages[targetIndex] = temp;

    // Fix orders
    const reordered = newStages.map((s, idx) => ({ ...s, order: idx + 1 }));
    onChange(reordered);
  };

  const updateStage = (updated: Stage) => {
    onChange(stages.map(s => s.id === updated.id ? updated : s));
  };

  const selectedStage = stages.find(s => s.id === selectedStageId);

  return (
    <div className="cp-hide-print">
      <div className="cp-card">
        <div className="flex-between" style={{ marginBottom: '16px' }}>
          <h2>Workflow Stages</h2>
          <button className="cp-button-primary" onClick={addStage}>+ Add Stage</button>
        </div>

        {stages.length === 0 ? (
          <p className="text-muted">No stages defined. Add a stage to build your workflow model.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {stages.map((stage, index) => (
              <div 
                key={stage.id} 
                className="cp-card" 
                style={{ 
                  margin: 0, 
                  cursor: 'pointer', 
                  border: selectedStageId === stage.id ? '2px solid var(--color-text-primary)' : undefined,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
                onClick={() => setSelectedStageId(stage.id)}
              >
                <div>
                  <span className="semibold" style={{ marginRight: '16px' }}>Stage {stage.order}</span>
                  {stage.title || 'Untitled Stage'}
                </div>
                <div className="flex-row" style={{ gap: '8px' }}>
                  <button 
                    disabled={index === 0}
                    onClick={(e) => moveStage(index, 'up', e)}
                    className="cp-button-secondary"
                    title="Move Up"
                  >↑</button>
                  <button 
                    disabled={index === stages.length - 1}
                    onClick={(e) => moveStage(index, 'down', e)}
                    className="cp-button-secondary"
                    title="Move Down"
                  >↓</button>
                  <button 
                    onClick={(e) => removeStage(stage.id, e)}
                    className="cp-button-danger"
                    title="Remove"
                  >×</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedStage && (
        <StageDetailEditor 
          stage={selectedStage} 
          onChange={updateStage} 
          onClose={() => setSelectedStageId(null)}
        />
      )}
    </div>
  );
}
