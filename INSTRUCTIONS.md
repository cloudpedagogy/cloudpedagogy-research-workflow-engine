# Research Workflow Engine — User Instructions

---

### 1. Purpose
The Research Workflow Engine is a local-first tool designed to help researchers model, document, and govern research workflows, particularly those incorporating AI tools. It ensures that the role of AI, human oversight, and ethical considerations are explicitly captured across the full research lifecycle.

---

### 2. What This Tool Does
This tool enables users to:
- Sequence and define individual stages of a research project.
- Explicitly map AI involvement levels (None, Limited, Significant) at each stage.
- Define human roles, responsibilities, and decision points.
- Capture risks, ethical considerations, and reproducibility notes.
- Generate structured summaries for institutional review or internal documentation.

---

### 3. Role in the Ecosystem
- **Phase:** Phase 5 — Practice & Workflow Layer
- **Role:** Supports the design and documentation of research workflows, including AI involvement, human oversight, risks, and reproducibility considerations.
- **Reference:** [./PROJECT_SPEC.md](./PROJECT_SPEC.md)

---

### 4. When to Use This Tool
- **Project Design:** When planning a new research project and deciding where AI tools can safely and effectively be integrated.
- **Governance Review:** When preparing documentation for institutional ethics committees or research offices.
- **Transparency & Reproducibility:** When documenting methods for publication to ensure other researchers understand the AI/human balance in the workflow.
- **Workflow Auditing:** When reviewing existing research processes to identify potential risks or areas for improved oversight.

---

### 5. Inputs
The tool expects the following data points:
- **Research Context:** Project title, area, study type, organisation, and a general description.
- **Governance Context:** Overarching rationale for AI use, general risks, and fundamental assumptions.
- **Workflow Stages:** A sequence of stages, each including:
    - AI Involvement Level (None, Limited, Significant).
    - Description of AI and Human roles.
    - Inputs and Outputs for the stage.
    - Stage-specific risks, ethics, and reproducibility notes.
- **Institutional Notes:** Policy references and reviewer comments.

---

### 6. How to Use (Step-by-Step)
1. **Define Context:** Start in the "Research Context" panel to set the project's foundation.
2. **Add Stages:** Use the "Workflow Stages" panel to add the steps of your research (e.g., Data Collection, Analysis, Dissemination).
3. **Map AI & Human Roles:** For each stage, specify the level of AI involvement and describe exactly what the AI does vs. what the human researcher does.
4. **Document Risks:** Fill in the risks and ethics considerations for each stage, as well as the "Global Risks" section.
5. **Review Summary:** Scroll down to the "Output Summary" to see your completed workflow model.
6. **Save/Export:**
    - Use **Export JSON** to save your work to a file you can reload later.
    - Use **Print / Save PDF** to generate a formal report.
    - Use **Copy Summary Text** to quickly paste the details into other documents.

---

### 7. Key Outputs
- **Structured Workflow Summary:** A comprehensive, categorized overview of the entire research process.
- **JSON Data File:** A portable file containing the full application state for backup or sharing.
- **Print-ready Report:** A formatted document suitable for PDFs or physical printing.
- **Text Summary:** A plain-text version of the workflow for easy integration into emails or reports.

---

### 8. How It Connects to Other Tools
- **Upstream:** Research context defined by users and institutional policy/ethical frameworks.
- **Downstream:** Structured workflow summaries provide inputs for the Evidence & QA Pack Generator and documentation for research transparency.

---

### 9. Limitations
- **No Execution:** This is a design and documentation tool; it does not perform research analysis or run AI models.
- **No Automation:** It does not automate the research workflow itself.
- **Not a Replacement for Ethics Boards:** The tool assists in preparing for review but does not replace formal institutional approval processes.

---

---

### 11. Capability and Governance
#### How capability is developed through use
The tool supports the development of practical AI capability by prompting researchers to think critically about the balance between AI assistance and human oversight at every stage of the research lifecycle. By explicitly mapping these roles, users develop a more nuanced understanding of where AI adds value and where human judgment remains critical.

#### How governance is supported
Governance is supported through optional fields in the "Capability & Governance Notes" section. These fields make project-level assumptions, risks, and AI involvement visible and reviewable. This transparency ensures that AI use is not just documented but is subject to ongoing reflection and accountability.

#### Explanation of optional fields
- **AI Involvement**: A high-level description of the role AI plays across the entire project.
- **Assumptions**: Key premises or conditions being taken for granted in the research design.
- **Risks**: Potential issues or concerns that could impact the integrity or outcome of the research.
- **Rationale**: The reasoning behind the chosen research design and AI integration.
- **Human Review Notes**: Specific notes on oversight, ethical checkpoints, or human-in-the-loop interventions.
