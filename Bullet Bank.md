STRATEGIC FIT EVALUATION LAYER (PRE-PARSE)

This section determines whether the job is a strategic match before resume tailoring begins. If ANY criterion fails, the engine outputs: “Not a strategic fit — do not apply.”

1. Compensation Alignment

Target band: $210k–$280k total compensation. Reject roles that are mid-level, UI/visual-heavy, execution-only, or inconsistent with Staff/Principal compensation expectations.

2. Title & Level Alignment

Role must align with one of the six archetypes (Principal Experience Architect, Staff/Principal Product Designer, AI Experience Designer, Principal Product Strategist, Trust & Safety Designer, Complex Systems Architect). Reject titles indicating mid-level UX/UI or non-strategic execution.

3. Scope of Responsibility

Role must include system-level ownership, AI workflow design, experience modeling, multi-agent/LLM patterns, enterprise clarity, reasoning pathways, or modernization. Reject roles focused on surface-level UI or feature delivery.

4. Creative & Cognitive Fit

Role should emphasize problem-framing, pattern recognition, behavior modeling, systems thinking, reasoning design, or multi-agent workflows. Reject roles requiring pure visual design or production work.

5. Cultural & Work Structure Fit

Role should support autonomy, remote/hybrid flexibility, cross-functional impact, and high cognitive ownership. Reject roles with rigid production pipelines or low strategic influence.

6. Long-Term Trajectory Alignment

Role must strengthen Experience Modeling, AI Systems Architecture, or Reflective AI direction. Reject roles that break narrative momentum or regress into execution roles.

⸻

OPERATIONAL WORKFLOW AND OUTPUT RULES

Primary workflow for this Resume Engine:
	0.	Job Posting Freshness and Status Check
	•	Before any strategic fit evaluation, the engine must confirm that the role appears to be currently open and accepting applications.
	•	Preference order for validation:
	1.	Company career site or ATS posting (source of truth).
	2.	Official job board mirrors that link back to the company or ATS.
	3.	Aggregators / third-party boards only if they show an active apply button and a recent posting date.
	•	The engine should look for signals that a role is closed or stale, such as:
	•	“No longer accepting applications,” “Position closed,” “Job is not active,” or similar language.
	•	Missing or disabled Apply buttons on the ATS or career page.
	•	Very old posting dates for non-evergreen roles, unless the role explicitly states continuous hiring.
	•	If the role appears closed or inactive, the engine outputs:
“Role appears closed or no longer accepting applications — do not apply.”
	•	Only if the role appears active does the engine proceed to Step 1.
	1.	User pastes a Job Description (JD).
	2.	Engine runs the Strategic Fit Evaluation Layer and returns a short strategic fit analysis:
	•	Fit verdict (Pass or Fail)
	•	Recommended archetype (if Pass)
	•	Short rationale (1–3 sentences).
	3.	User either approves or rejects the role.
	4.	If the user approves:
	•	Engine runs the JD Parser Logic, selects the correct archetype, bullet banks, headline, and summary.
	•	Engine generates a complete 1.5–2 page resume, not fragments.
	•	Resume is meant to be pasted into Allan’s base template and exported with the naming convention:
AllanZelsman_{JobTitleNoSpaces}_{CompanyName}.pdf
Example: AllanZelsman_StaffProductDesigner_Zapier.pdf.
	5.	Engine never asks the user to copy and paste individual sections unless explicitly requested.
	6.	Optionally, the engine can output a brief “Why this role fits” note for cover letters or application text fields.

The engine does not auto-submit applications, but its outputs are structured so external tools (Zapier, Make, manual upload) can easily use the generated resumes.

⸻

Allan Zelsman — Resume Bullet Bank Engine

Internal system document. Do NOT export as-is.

This document stores:
	•	Bullet banks for each role
	•	Archetype definitions
	•	Tailoring rules
	•	Summary & headline templates
	•	ATS keyword clusters

Your master resume remains clean in its own document/template.

⸻

JD PARSER LOGIC (POST–STRATEGIC FIT)

This layer runs ONLY if the Strategic Fit Evaluation passes.
It determines the correct archetype, selects bullet banks, extracts keywords, and assembles a tailored resume.

⸻

1. SIGNAL EXTRACTION RULES (Keyword & Pattern Detection)

The parser scans the JD for weighted signal groups:

AI / LLM / Agentic Signals (AI-Heavy Roles)

Keywords: LLM, AI, agentic, multi-agent, orchestration, inference, reasoning, RAG, copilots, workflows, evaluators, guardrails, prompt engineering, embeddings.
→ High weight for Archetypes 1, 2, 3

Systems / Enterprise / Platform Signals

Keywords: enterprise, platform, ecosystem, modernization, taxonomy, governance, multi-system, integration, workflows, federated, legacy systems.
→ High weight for Archetypes 4, 6

Safety / Governance / Risk Signals

Keywords: safety, trust, governance, compliance, responsible AI, harmful content, safety rails, oversight, risk, policy.
→ High weight for Archetype 5

Product Designer / UX Execution Signals

Keywords: UX, product design, prototyping, wireframes, interaction design, usability, end-to-end flows.
→ High weight for Archetype 2

Leadership / Strategic Signals

Keywords: roadmap, strategy, vision, cross-functional, stakeholder, influence, principal, staff.
→ Boost weight for Archetypes 1, 4, 6

⸻

2. ARCHETYPE SCORING MODEL

Each archetype receives points based on detected signals.
The archetype with the highest score is selected.

Archetype 1 — Principal Experience Architect
	•	AI + systems + multi-agent + modeling + reasoning patterns

Archetype 2 — Staff/Principal Product Designer
	•	AI workflows + UX + product + interaction patterns

Archetype 3 — AI Experience Designer / LLM Architect
	•	LLM behavior + conversational flows + multimodal reasoning

Archetype 4 — Principal Product Design Strategist
	•	Enterprise + roadmap + alignment + system clarity

Archetype 5 — Trust & Safety / Governance
	•	Safety + governance + constraints + evaluators

Archetype 6 — Complex Systems Architect
	•	Modernization + platforms + workflows + integration

⸻

3. BULLET BANK SELECTION RULES

Once an archetype is selected, bullets are chosen based on its defined priority order.

Example — Archetype 1:
	1.	AI Systems
	2.	Systems Architecture
	3.	Experience Modeling
	4.	Leadership
	5.	Safety (optional)

Example — Archetype 3:
	1.	AI Systems
	2.	Experience Modeling
	3.	Safety & Trust
	4.	Systems Architecture
	5.	Leadership (light)

⸻

4. SUMMARY & HEADLINE GENERATION

For the selected archetype:
	1.	Choose 1 of 3 custom headlines based on strongest JD signals.
	2.	Insert 1 of the summary templates.
	3.	Optionally insert role-specific keywords for ATS.

The output summary must:
	•	Reflect the JD’s language
	•	Emphasize Allan’s principal/systems identity
	•	Integrate AI behavior, reasoning, clarity, or systems themes

⸻

5. ATS KEYWORD EXTRACTION

The parser extracts:
	•	Technical keywords (LLM, RAG, embeddings, etc.)
	•	Workflow keywords (orchestration, reasoning, flows)
	•	System keywords (taxonomy, governance, platform)
	•	Strategy keywords (roadmap, alignment, clarity)

Keywords are added to:
	•	The final resume metadata block
	•	Bullet bank choices (optional)
	•	Summary or headline (light, non-spammy use)

⸻

6. OUTPUT STRUCTURE (TAILORED RESUME BLOCK)

If Strategic Fit = PASS and an archetype is selected, output:
	1.	Tailored Headline
	2.	Tailored Summary
	3.	Top 5–7 bullets from banks (ordered by priority and mapped into the experience roles)
	4.	ATS Keyword Cluster (optional)
	5.	Optional: Recruiter fit notes

If Strategic Fit = FAIL:
→ Output: “Not a strategic fit — do not apply.”

⸻

ARCHETYPES

ARCHETYPE 1 — Principal Experience Architect (AI Systems + Multi-Agent Architecture)

Role Purpose

Define Human+AI systems, orchestrate multi-agent workflows, model reasoning structures, establish evaluator loops, design behavioral signal systems, and bring clarity to complex product ecosystems.

Hiring Manager Psychology
	•	Can this person define how our AI agents behave?
	•	Can they architect predictable multi-agent systems?
	•	Can they map human intention to machine behavior?
	•	Can they bring clarity to complex, ambiguous environments?
	•	Can they partner deeply with engineering on system behavior?

Resume Adjustments

Emphasize: AI persona architecture, multi-agent orchestration, evaluator loops, cognitive modeling, systems architecture, Experience Modeling, semantic/taxonomy systems, trust & safety.
De-emphasize: UI/visual design, feature execution, design system tactical work.

Bullet Priority Order
	1.	AI Systems
	2.	Systems Architecture
	3.	Experience Modeling
	4.	Leadership & Alignment
	5.	Safety & Trust (if JD requires it)

Custom Headlines
	•	Principal Experience Architect — AI Systems, Multi-Agent Workflows & Product Strategy
	•	Principal AI Systems Architect — Multi-Agent Orchestration & Human-Machine Workflow Design
	•	Principal Experience Architect — Cognitive Modeling, AI Reasoning & System Architecture

Summary Template

Principal Experience Architect specializing in AI systems, multi-agent orchestration, and Human+AI workflow architecture. Designs evaluator loops, behavioral signal systems, and reasoning structures that make AI-driven experiences predictable, trustworthy, and aligned with human intention. Unifies research, product, engineering, and safety functions to transform ambiguity into scalable, decision-ready system architecture.

Keywords for ATS

Agentic systems; Multi-agent workflows; LLM interaction patterns; AI persona architecture; Evaluator loops; Behavioral signal systems; Cognitive modeling; Semantic architecture; Experience modeling; Reasoning patterns; AI workflow design; Human–machine collaboration; Safety rails; Predictive modeling; Cross-functional alignment.

⸻

ARCHETYPE 2 — Staff / Principal Product Designer (AI-Heavy)

Role Purpose

Design AI-powered product experiences, shape human–AI interaction patterns, clarify ambiguous problem spaces, and partner closely with engineering to ship intelligent workflows.

Hiring Manager Psychology
	•	Can this person design AI-first experiences end-to-end?
	•	Can they turn messy reasoning into clear UX?
	•	Can they collaborate deeply with engineering?
	•	Can they design multi-step, multi-modal workflows?
	•	Can they ship with conviction and velocity?

Resume Adjustments

Emphasize: AI-assisted workflows, interaction patterns, experience modeling, behavioral insights, end-to-end reasoning pathways, UX strategy, systems clarity.
De-emphasize: Enterprise governance, org architecture unless the JD calls for it.

Bullet Priority Order
	1.	Experience Modeling
	2.	AI Systems
	3.	Systems Architecture
	4.	Leadership & Alignment
	5.	Safety & Trust (if required)

Custom Headlines
	•	Staff Product Designer — AI-Powered Workflows & Systems Thinking
	•	Principal Product Designer — AI Interaction Patterns & Multi-Step Workflows
	•	Product Designer, AI — Intelligent Workflows, UX Systems & Clarity Architecture

Summary Template

Staff/Principal Product Designer specializing in AI-powered workflows, interaction patterns, and multi-step reasoning experiences. Designs clear, predictable human–AI interactions that reduce cognitive load, accelerate decision-making, and bring structure to complex product ecosystems.

Keywords for ATS

AI-powered workflows; AI interaction design; LLM-driven features; Multi-step reasoning; UX systems; Interaction modeling; Experience modeling; Behavioral insights; Technical collaboration; Human–AI interaction; Predictive UX; Intelligent assistants; Narrative clarity; End-to-end experiences.

⸻

ARCHETYPE 3 — AI Experience Designer / LLM Interaction Architect

Role Purpose

Design LLM-driven interfaces, conversational flows, multimodal reasoning patterns, and controlled AI behaviors that align with human intention and product goals.

Hiring Manager Psychology
	•	Do they understand how LLMs reason and fail?
	•	Can they create predictable, steerable AI interactions?
	•	Can they architect constraints, evaluators, and fallbacks?
	•	Can they design intuitive, multimodal workflows?
	•	Can they pair deeply with engineering and data science?

Resume Adjustments

Emphasize: LLM interaction patterns, evaluator loops, cognitive modeling, AI persona architecture, reasoning design, multimodal workflows.
De-emphasize: High-level design ops, enterprise governance, unrelated UI polish.

Bullet Priority Order
	1.	AI Systems
	2.	Experience Modeling
	3.	Safety & Trust
	4.	Systems Architecture (if relevant)
	5.	Leadership (light)

Custom Headlines
	•	AI Experience Designer — LLM Interaction Patterns & Reasoning Workflows
	•	LLM Interaction Architect — Multimodal UX & Controlled Reasoning Systems
	•	Human–AI Interaction Designer — Predictable AI Behavior & Workflow Patterns

Summary Template

AI Experience Designer specializing in LLM reasoning patterns, multimodal interaction design, and controlled AI behavior. Designs interaction flows, evaluator loops, and behavior models that make AI responses predictable, safe, and aligned with user intention.

Keywords for ATS

LLM interaction design; AI reasoning patterns; Evaluator loops; Guardrail design; Prompt architecture; Multimodal workflows; Cognitive modeling; Conversational UX; AI persona patterns; Safety constraints; AI predictability; Controlled outputs.

⸻

ARCHETYPE 4 — Principal Product Design Strategist (AI + Enterprise Systems)

Role Purpose

Define long-term product direction, unify cross-functional strategy, map complex enterprise workflows, and ensure AI systems align with organizational goals.

Hiring Manager Psychology
	•	Can they turn ambiguity into a strategic roadmap?
	•	Can they align engineering, product, research, and executives?
	•	Do they understand enterprise complexity and constraints?
	•	Can they bring clarity to chaotic product ecosystems?
	•	Can they articulate a compelling North Star?

Resume Adjustments

Emphasize: Experience Modeling, systems architecture, strategic alignment, transformation, multi-platform clarity.
De-emphasize: Highly technical agent orchestration unless mentioned.

Bullet Priority Order
	1.	Experience Modeling
	2.	Leadership & Alignment
	3.	Systems Architecture
	4.	AI Systems (if AI-heavy org)
	5.	Safety & Trust (rare)

Custom Headlines
	•	Principal Product Design Strategist — AI, Systems, and Enterprise Clarity
	•	Principal Experience Strategist — Enterprise Workflows & Product Direction
	•	Lead Design Strategist — Complex Systems, Clarity Architecture & AI Integration

Summary Template

Principal Product Design Strategist specializing in enterprise systems, AI-driven transformation, and cross-functional alignment. Creates clarity across complex ecosystems by modeling human workflows, defining system architecture, and guiding teams toward unified product direction.

Keywords for ATS

Enterprise workflows; Systems clarity; Experience modeling; Strategic alignment; Design strategy; AI integration; Product operating models; Transformation; Behavioral insights; Cross-functional leadership.

⸻

ARCHETYPE 5 — Human+AI Trust, Safety & Governance Designer

Role Purpose

Define safety rails, evaluator loops, AI behavior constraints, ethical interaction models, and governance frameworks that ensure predictable, emotionally safe user experiences.

Hiring Manager Psychology
	•	Can this person design safe AI behavior?
	•	Do they understand risk, compliance, and model failure?
	•	Can they architect guardrails and fallback paths?
	•	Can they collaborate with legal and policy teams?
	•	Can they protect users without killing product velocity?

Resume Adjustments

Emphasize: Safety rails, evaluator loops, failover patterns, constraint modeling, ethical interaction guidelines.
De-emphasize: Pure creative exploration, non-safety AI flows.

Bullet Priority Order
	1.	Safety & Trust
	2.	AI Systems
	3.	Systems Architecture (if governance-heavy)
	4.	Leadership & Alignment (policy coordination)
	5.	Experience Modeling (selective)

Custom Headlines
	•	Trust & Safety Designer — AI Behavior, Guardrails & Governance
	•	Human+AI Safety Architect — Evaluator Loops & Ethical Interaction Design
	•	AI Governance Designer — Predictable Behavior, Risk Controls & Safe UX

Summary Template

Human+AI Trust & Safety Designer specializing in evaluator loops, behavior constraints, and governance frameworks that ensure AI interactions are predictable, emotionally safe, and aligned with organizational risk models.

Keywords for ATS

AI safety; Evaluator loops; Guardrails; Governance; Ethical AI; Controlled reasoning; Risk mitigation; Safety rails; Failover patterns; Responsible AI; Compliance alignment.

⸻

ARCHETYPE 6 — Complex Systems / Platform Architect (B2B, Gov, Enterprise Modernization)

Role Purpose

Simplify large-scale, multi-system environments, consolidate fragmented workflows, and architect experience ecosystems that scale across product portfolios.

Hiring Manager Psychology
	•	Do they understand deep system complexity?
	•	Can they consolidate fragmented workflows?
	•	Can they unify legacy systems into modern platforms?
	•	Can they communicate clearly to non-design stakeholders?
	•	Can they handle constraints of enterprise and government?

Resume Adjustments

Emphasize: Systems architecture, experience ecosystems, modernization, taxonomy, transformation.
De-emphasize: Highly technical LLM patterns unless required.

Bullet Priority Order
	1.	Systems Architecture
	2.	Experience Modeling
	3.	Leadership & Alignment
	4.	AI Systems (if modernization includes AI)
	5.	Safety & Trust (rare)

Custom Headlines
	•	Experience Architect — Complex Systems, Platforms & Modernization
	•	Principal Systems Designer — Enterprise Workflows & Product Clarity
	•	Platform Experience Architect — Multi-System Integration & UX Strategy

Summary Template

Principal Systems Architect specializing in multi-system integration, workflow modernization, and enterprise-scale clarity. Translates fragmented processes into coherent ecosystems that support scalable product evolution and strategic decision-making.

Keywords for ATS

Enterprise modernization; System consolidation; Workflow clarity; Platform architecture; Experience ecosystems; Taxonomy design; Process transformation; Legacy systems; Cross-functional alignment.

⸻

BULLET BANKS — MASTER COLLECTION

These bullets are modular, written for senior/principal positioning, and can be inserted into any tailored resume.

They’re grouped into five banks the archetypes reference:
	1.	AI Systems Emphasis
	2.	Experience Modeling Emphasis
	3.	Systems Architecture Emphasis
	4.	Leadership & Alignment Emphasis
	5.	Safety & Trust Emphasis

⸻

1. AI SYSTEMS EMPHASIS BULLETS
	•	Designed multi-agent reasoning workflows and interaction patterns that improved predictability, reduced ambiguity, and aligned system behavior with human intention.
	•	Architected AI persona models, evaluator loops, and behavioral signal systems that made LLM-powered experiences more consistent, safe, and controllable.
	•	Integrated cognitive modeling and machine-behavior constraints into product workflows, enabling AI features to act with clarity, guardrails, and measurable reliability.
	•	Created AI-assisted research and synthesis systems that compressed discovery timelines from weeks to days, accelerating strategic decision-making.
	•	Designed LLM interaction patterns and prompt architectures that enhanced reasoning quality and reduced hallucination risk across complex workflows.
	•	Partnered with engineering to define system-level behavior, constraints, and handoff logic, improving stability and predictability across multi-agent interactions.

⸻

2. EXPERIENCE MODELING EMPHASIS BULLETS
	•	Built Experience Modeling frameworks that map real human intention, behavior, and cognitive patterns into structured system logic used to guide product direction.
	•	Translated complex research, workflows, and behavioral insight into unified experience models that created cross-team clarity and eliminated strategic ambiguity.
	•	Modeled human workflows, motivations, and friction points into decision-ready artifacts that clarified priorities and reduced rework during execution.
	•	Created mental model simulations and user-behavior patterns that drove alignment across product, engineering, research, and executive groups.
	•	Developed system-wide experience architectures that connected signals, needs, and behaviors into a cohesive blueprint for product evolution.
	•	Leveraged Experience Modeling to identify hidden friction, improve reasoning pathways, and expose systemic gaps not visible through traditional UX methods.

⸻

3. SYSTEMS ARCHITECTURE EMPHASIS BULLETS
	•	Architected large-scale experience systems integrating workflows, semantic structures, decision pathways, and cross-platform interactions.
	•	Designed enterprise-level taxonomies, conceptual models, and information architectures that improved navigability and reduced cognitive load.
	•	Defined product operating models and governance frameworks that aligned scattered teams and stabilized long-term experience quality.
	•	Consolidated fragmented systems into coherent, scalable platforms by mapping dependencies, constraints, and interaction patterns across the ecosystem.
	•	Created high-level architectural patterns that improved cross-product consistency and streamlined engineering implementation.
	•	Reframed complex technical constraints into clear experience principles, enabling faster and more informed product decisions.

⸻

4. LEADERSHIP & ALIGNMENT EMPHASIS BULLETS
	•	Unified product, engineering, research, and executive stakeholders around shared mental models, reducing conflict and accelerating strategic alignment.
	•	Led cross-functional teams through problem-definition, prioritization, and vision-setting sessions that clarified direction and improved execution clarity.
	•	Translated complex technical, organizational, and behavioral challenges into clear, actionable strategies teams could rally around.
	•	Built org-level clarity systems that improved communication, reduced rework, and established consistent decision-making patterns.
	•	Mentored senior designers, product managers, and engineers on systems thinking, AI interaction principles, and experience strategy.
	•	Guided organizations through experience transformation, shifting from fragmented delivery to unified, experience-led product development.

⸻

5. SAFETY & TRUST EMPHASIS BULLETS
	•	Designed trust and safety frameworks, evaluator loops, and behavioral guardrails ensuring predictable, emotionally safe AI-driven experiences.
	•	Integrated safety constraints, fallback logic, and controlled reasoning patterns into multi-agent workflows to prevent harmful or unintended outputs.
	•	Developed ethical interaction guidelines and safety-review processes that aligned AI experiences with organizational risk models.
	•	Built transparency and expectation-setting patterns that increased user confidence in AI behavior without exposing internal mechanics.
	•	Collaborated with legal, compliance, and safety teams to ensure product experiences met regulatory and organizational standards.

⸻

END OF BULLET BANKS