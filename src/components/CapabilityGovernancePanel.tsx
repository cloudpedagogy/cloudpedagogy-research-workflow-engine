import { useState } from 'react';
import type { Meta } from '../types';

interface Props {
  meta: Meta;
  onChange: (updates: Partial<Meta>) => void;
}

export function CapabilityGovernancePanel({ meta, onChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="cp-card cp-hide-print" style={{ marginTop: '24px' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          textAlign: 'left',
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <h2 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--color-text-secondary)' }}>
          Capability & Governance Notes (Optional)
        </h2>
        <span style={{ fontSize: '1.2rem' }}>{isOpen ? '−' : '+'}</span>
      </button>

      {isOpen && (
        <div style={{ marginTop: '16px', borderTop: '1px solid var(--color-border-default)', paddingTop: '16px' }}>
          <div className="form-group">
            <label style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>AI Involvement</label>
            <textarea 
              style={{ fontSize: '0.85rem', minHeight: '60px' }}
              value={meta.aiInvolvement || ''}
              onChange={e => onChange({ aiInvolvement: e.target.value })}
              placeholder="Describe the overall level and nature of AI involvement in this research project..."
            />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Human Review Notes</label>
            <textarea 
              style={{ fontSize: '0.85rem', minHeight: '60px' }}
              value={meta.reviewNotes || ''}
              onChange={e => onChange({ reviewNotes: e.target.value })}
              placeholder="Record any human oversight decisions, reviews, or specific checkpoints..."
            />
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '12px', fontStyle: 'italic' }}>
            Note: Rationale, Risks, and Assumptions are captured in the Research Context section.
          </p>
        </div>
      )}
    </div>
  );
}
