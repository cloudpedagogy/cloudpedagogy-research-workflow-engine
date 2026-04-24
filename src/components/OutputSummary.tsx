import type { AppState } from '../types';

interface Props {
  state: AppState;
}

export function OutputSummary({ state }: Props) {
  const { meta, stages, globalRisks, institutionalNotes } = state;

  return (
    <div id="print-content" className="cp-card printable-section">
      <div style={{ textAlign: 'center', borderBottom: '2px solid black', paddingBottom: '16px', marginBottom: '24px' }}>
        <h1 style={{ marginBottom: '8px' }}>Research Workflow Summary</h1>
        <p className="text-secondary" style={{ margin: 0 }}>Generated via CloudPedagogy Research Workflow Engine</p>
        <p className="text-small text-muted" style={{ margin: 0 }}>Last Updated: {new Date(state.lastUpdated).toLocaleString()}</p>
      </div>

      {/* 1. Research Context */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ borderBottom: '1px solid var(--color-border-default)', paddingBottom: '8px' }}>1. Research Context</h2>
        <table style={{ width: '100%', border: 'none' }}>
          <tbody>
            <tr>
              <th style={{ width: '25%', padding: '8px 0', border: 'none' }}>Project Title</th>
              <td style={{ padding: '8px 0', border: 'none' }}>{meta.projectTitle || '-'}</td>
            </tr>
            <tr>
              <th style={{ padding: '8px 0', border: 'none' }}>Research Area</th>
              <td style={{ padding: '8px 0', border: 'none' }}>{meta.researchArea || '-'}</td>
            </tr>
            <tr>
              <th style={{ padding: '8px 0', border: 'none' }}>Study Type</th>
              <td style={{ padding: '8px 0', border: 'none' }}>{meta.studyType || '-'}</td>
            </tr>
            <tr>
              <th style={{ padding: '8px 0', border: 'none' }}>Organisation</th>
              <td style={{ padding: '8px 0', border: 'none' }}>{meta.organisation || '-'}</td>
            </tr>
            <tr>
              <th style={{ padding: '8px 0', border: 'none', verticalAlign: 'top' }}>Description</th>
              <td style={{ padding: '8px 0', border: 'none' }}>{meta.description || '-'}</td>
            </tr>
            {meta.rationale && (
              <tr>
                <th style={{ padding: '8px 0', border: 'none', verticalAlign: 'top' }}>Rationale</th>
                <td style={{ padding: '8px 0', border: 'none', whiteSpace: 'pre-wrap' }}>{meta.rationale}</td>
              </tr>
            )}
            {meta.risks && (
              <tr>
                <th style={{ padding: '8px 0', border: 'none', verticalAlign: 'top' }}>Project Risks</th>
                <td style={{ padding: '8px 0', border: 'none', whiteSpace: 'pre-wrap' }}>{meta.risks}</td>
              </tr>
            )}
            {meta.assumptions && (
              <tr>
                <th style={{ padding: '8px 0', border: 'none', verticalAlign: 'top' }}>Assumptions</th>
                <td style={{ padding: '8px 0', border: 'none', whiteSpace: 'pre-wrap' }}>{meta.assumptions}</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>

      {/* 2. Workflow Stages */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ borderBottom: '1px solid var(--color-border-default)', paddingBottom: '8px' }}>2. Workflow Stages</h2>
        {stages.length === 0 ? (
          <p className="text-muted">No stages defined.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {stages.map((stage) => (
              <div key={stage.id} style={{ border: '1px solid var(--color-border-default)', borderRadius: '4px', padding: '16px' }}>
                <h3 style={{ marginTop: 0 }}>Stage {stage.order}: {stage.title}</h3>
                <p style={{ marginBottom: stage.rationale ? '8px' : '16px' }}>{stage.description}</p>
                {stage.rationale && (
                  <p style={{ marginBottom: '16px', fontSize: '0.9rem' }}><strong>Rationale:</strong> {stage.rationale}</p>
                )}
                
                <table style={{ marginBottom: '16px', fontSize: '0.9rem' }}>
                  <tbody>
                    <tr><td style={{ width: '30%', fontWeight: 600 }}>Inputs:</td><td>{stage.inputs || '-'}</td></tr>
                    <tr><td style={{ fontWeight: 600 }}>Outputs:</td><td>{stage.outputs || '-'}</td></tr>
                  </tbody>
                </table>

                <div style={{ backgroundColor: '#F9FAFB', padding: '12px', borderRadius: '4px', marginBottom: '16px' }}>
                  <h4 style={{ margin: '0 0 8px 0', fontSize: '0.9rem' }}>AI & Human Oversight</h4>
                  <div style={{ fontSize: '0.9rem' }}>
                    <p style={{ margin: '0 0 4px 0' }}><strong>AI Involvement:</strong> <span style={{ textTransform: 'capitalize' }}>{stage.aiInvolvement}</span></p>
                    {stage.aiInvolvement !== 'none' && (
                      <p style={{ margin: '0 0 8px 0' }}><strong>AI Description:</strong> {stage.aiDescription}</p>
                    )}
                    <p style={{ margin: 0 }}><strong>Human Role:</strong> {stage.humanRole || '-'}</p>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', fontSize: '0.9rem' }}>
                  <div>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '0.9rem' }}>Risks & Ethics</h4>
                    <p style={{ margin: '0 0 8px 0' }}><strong>Risks:</strong> {stage.risks || '-'}</p>
                    <p style={{ margin: 0 }}><strong>Ethics:</strong> {stage.ethicsConsiderations || '-'}</p>
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '0.9rem' }}>Reproducibility Notes</h4>
                    <p style={{ margin: '0 0 8px 0' }}>{stage.reproducibilityNotes || '-'}</p>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '0.9rem' }}>Assumptions</h4>
                    <p style={{ margin: 0 }}>{stage.assumptions || '-'}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 3. Risks & Ethics Overview */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ borderBottom: '1px solid var(--color-border-default)', paddingBottom: '8px' }}>3. Risks & Ethics Overview</h2>
        
        <h3 style={{ fontSize: '1rem' }}>Cross-Cutting Risks</h3>
        {globalRisks.length > 0 ? (
          <ul style={{ marginTop: '8px', paddingLeft: '24px' }}>
            {globalRisks.map((risk, idx) => (
              <li key={idx} style={{ marginBottom: '4px' }}>{risk}</li>
            ))}
          </ul>
        ) : <p className="text-muted">No cross-cutting risks documented.</p>}

        <h3 style={{ fontSize: '1rem', marginTop: '16px' }}>Institutional Notes</h3>
        <table style={{ width: '100%', fontSize: '0.9rem' }}>
          <tbody>
            <tr>
              <th style={{ width: '30%', padding: '4px 0' }}>Policy Reference:</th>
              <td style={{ padding: '4px 0' }}>{institutionalNotes.policyReference || '-'}</td>
            </tr>
            <tr>
              <th style={{ padding: '4px 0', verticalAlign: 'top' }}>Reviewer Notes:</th>
              <td style={{ padding: '4px 0' }}>{institutionalNotes.reviewerNotes || '-'}</td>
            </tr>
            <tr>
              <th style={{ padding: '4px 0', verticalAlign: 'top' }}>General Notes:</th>
              <td style={{ padding: '4px 0' }}>{institutionalNotes.generalNotes || '-'}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <div style={{ textAlign: 'center', marginTop: '48px', paddingTop: '16px', borderTop: '1px solid var(--color-border-default)', fontSize: '0.8rem' }} className="text-muted">
        End of Document
      </div>
    </div>
  );
}
