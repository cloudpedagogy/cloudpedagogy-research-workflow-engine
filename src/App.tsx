import { useState, useEffect, useRef } from 'react';
import type { AppState, Stage } from './types';
import { demoState, emptyState } from './demoData';
import { ResearchContextPanel } from './components/ResearchContextPanel';
import { WorkflowStagesPanel } from './components/WorkflowStagesPanel';
import { RiskEthicsPanel } from './components/RiskEthicsPanel';
import { CapabilityGovernancePanel } from './components/CapabilityGovernancePanel';
import { OutputSummary } from './components/OutputSummary';
import './index.css';

const LOCAL_STORAGE_KEY = 'cp_research_workflow_state';

function App() {
  const [state, setState] = useState<AppState>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : emptyState;
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const updateMeta = (updates: Partial<AppState['meta']>) => {
    setState(prev => ({ ...prev, meta: { ...prev.meta, ...updates }, lastUpdated: new Date().toISOString() }));
  };

  const updateStages = (stages: Stage[]) => {
    setState(prev => ({ ...prev, stages, lastUpdated: new Date().toISOString() }));
  };

  const updateGlobalRisks = (globalRisks: string[]) => {
    setState(prev => ({ ...prev, globalRisks, lastUpdated: new Date().toISOString() }));
  };

  const updateInstitutionalNotes = (updates: Partial<AppState['institutionalNotes']>) => {
    setState(prev => ({ ...prev, institutionalNotes: { ...prev.institutionalNotes, ...updates }, lastUpdated: new Date().toISOString() }));
  };

  const handleLoadDemo = () => {
    if (window.confirm("This will overwrite your current progress. Load Demo?")) {
      setState({ ...demoState, lastUpdated: new Date().toISOString() });
    }
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to completely clear the app?")) {
      setState(emptyState);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = async () => {
    const elem = document.getElementById('print-content');
    if (elem) {
      try {
        await navigator.clipboard.writeText(elem.innerText);
        alert('Summary copied to clipboard!');
      } catch (err) {
        alert('Failed to copy. ' + err);
      }
    }
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `Research_Workflow_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const imported = JSON.parse(evt.target?.result as string);
        if (imported && imported.meta && typeof imported.stages === 'object') {
          setState({ ...emptyState, ...imported, lastUpdated: new Date().toISOString() });
          alert('State imported successfully.');
        } else {
          alert('Invalid JSON structure for this tool.');
        }
      } catch (err) {
        alert('Failed to parse JSON file.');
      }
    };
    reader.readAsText(file);
    // clear value to allow re-importing the same file
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="max-width-container">
      <div className="header-panel cp-hide-print">
        <div>
          <h1 style={{ marginBottom: '8px' }}>Research Workflow Engine</h1>
          <p className="text-muted" style={{ margin: 0 }}>
            Model and review research workflows, capturing explicit AI usage and ethical frameworks.
          </p>
          <a href="https://www.cloudpedagogy.com/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem' }}>
            Part of the CloudPedagogy Ecosystem ↗
          </a>
        </div>
        <div className="flex-row">
          <input 
            type="file" 
            accept=".json" 
            style={{ display: 'none' }} 
            ref={fileInputRef} 
            onChange={handleImportJSON} 
          />
          <button className="cp-button-secondary" onClick={() => fileInputRef.current?.click()}>Import JSON</button>
          <button className="cp-button-secondary" onClick={handleExportJSON}>Export JSON</button>
          <button className="cp-button-secondary" onClick={handleLoadDemo}>Load Demo</button>
          <button className="cp-button-danger" onClick={handleReset}>Reset</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '24px' }}>
        <ResearchContextPanel state={state} onChange={updateMeta} />
        <WorkflowStagesPanel stages={state.stages} onChange={updateStages} />
        <RiskEthicsPanel 
          globalRisks={state.globalRisks} 
          institutionalNotes={state.institutionalNotes} 
          onChangeRisks={updateGlobalRisks} 
          onChangeNotes={updateInstitutionalNotes} 
        />

        {/* Lightweight capability and governance layer - Optional, non-blocking, and does not alter core workflow */}
        <CapabilityGovernancePanel meta={state.meta} onChange={updateMeta} />
        
        <div className="cp-hide-print" style={{ textAlign: 'center', marginTop: '24px', marginBottom: '24px' }}>
          <button className="cp-button-primary" onClick={handlePrint} style={{ marginRight: '16px' }}>Print / Save PDF</button>
          <button className="cp-button-secondary" onClick={handleCopySummary}>Copy Summary Text</button>
        </div>

        <OutputSummary state={state} />
      </div>
    </div>
  );
}

export default App;
