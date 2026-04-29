# PROJECT_SPEC: cloudpedagogy-research-workflow-engine

## 1. Repo Name
`cloudpedagogy-research-workflow-engine`

## 2. One-Sentence Purpose
A local-first tool for designing, structuring, and governing AI-enabled research workflows across the full research lifecycle.

## 3. Problem the App Solves
Research workflows incorporating AI often suffer from a lack of transparency regarding where and how AI is used, what level of human oversight is maintained, and how ethical/reproducibility risks are managed. This opacity makes it difficult for institutions to govern AI use and for researchers to ensure their methods are reproducible and accountable.

## 4. Primary User / Audience
Researchers, academic project leads, institutional AI governance officers, and ethics review boards.

## 5. Core Role in the CloudPedagogy Ecosystem
Occupies Phase 5 (Practice & Workflow Layer) of the CloudPedagogy Framework. It acts as the bridge between institutional policy (Upstream) and the generation of auditable evidence (Downstream), focusing on the practical "how" of AI-integrated research.

## 6. Main Entities / Data Structures
- **AppState**: The root state object containing meta-information, stages, global risks, and institutional notes.
- **Meta**: Project-level context including title, area, study type, and overarching governance fields (rationale, risks, assumptions).
- **Stage**: A discrete step in the research workflow. Fields include `aiInvolvement` (None/Limited/Significant), `aiDescription`, `humanRole`, `inputs`, `outputs`, and documentation for `risks`, `ethics`, and `reproducibility`.
- **InstitutionalNotes**: Fields for mapping the workflow to specific policies or capturing reviewer feedback.

## 7. Main User Workflows
1. **Workflow Lifecycle Modeling**: Users sequence and define the stages of their research, specifying the technical and human requirements for each.
2. **AI Governance Alignment**: Users explicitly categorize AI usage at each stage, forcing a reflection on the balance of autonomy and oversight.
3. **Audit Readiness**: Users capture ethics, risks, and assumptions to create a comprehensive "governance-aware" project summary suitable for review or publication.
4. **Data Portability**: Users import/export their workflow models as JSON to maintain local-first control or share configurations with colleagues.

## 8. Current Features
- Interactive research stage editor with drag-and-drop sequencing (via order management).
- Standardized AI involvement categorization (None, Limited, Significant).
- Comprehensive metadata capture (Ethics, Risks, Reproducibility, Inputs/Outputs).
- Local-first persistence via `localStorage`.
- JSON-based import and export functionality.
- Professional, print-ready summary generation and clipboard support.

## 9. Stubbed / Partial / Incomplete Features
- Not explicitly defined in current repo contents.

## 10. Import / Export and Storage Model
- **Storage**: `localStorage` (Key: `cp_research_workflow_state`).
- **Import/Export**: JSON files are used for state persistence across sessions and machines. The application uses a `FileReader` for imports and a dynamic anchor tag for exports.

## 11. Relationship to Other CloudPedagogy Apps
- **Downstream**: Feeds structured data into the Evidence & QA Pack Generator.
- **Alignment**: Directly implements Phase 5 of the CloudPedagogy AI Capability Framework.

## 12. Potential Overlap or Duplication Risks
- Overlaps with general project management or flow-charting tools, but distinguishes itself through specialized fields for AI governance, research ethics, and reproducibility that generic tools lack.

## 13. Distinctive Value of This App
The app provides a structured, governance-first taxonomy for research workflows that prioritizes human accountability and AI transparency. By being local-first, it respects the privacy and sensitivity requirements often found in high-integrity research environments.

## 14. Recommended Future Enhancements
- Pre-defined workflow templates for different research methodologies (e.g., Clinical Trials, Systematic Reviews).
- Enhanced risk taxonomy aligned with specific global AI regulations (e.g., EU AI Act).
- Integration with research data management (RDM) tools for automatic metadata syncing.

## 15. Anything Unclear or Inferred from Repo Contents
- **Phase 5 Assignment**: Inferred from README and context within the CloudPedagogy ecosystem.
- **Upstream/Downstream Flow**: Inferred from ecosystem descriptions in the README.
- **Future Enhancements**: Suggested based on the existing tool's focus on research governance.

---

## Capability and Governance Alignment
This tool is aligned with the CloudPedagogy Capability and Governance standard.
Capability: The tool supports development of practical AI capability through structured interaction and workflow use.
Governance: The tool includes lightweight, optional fields that make assumptions, risks, and decisions visible and reviewable.
This alignment ensures the tool supports both effective use of AI and responsible, accountable practice.
