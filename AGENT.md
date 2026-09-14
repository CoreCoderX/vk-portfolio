# DESIGN.md

## Engineering Drawing Journey Portfolio

### Portfolio subject

**Vijayakumar Aathipazham** — Project Engineer specializing in **costing, estimation, engineering documentation, and EPC execution** across oil and gas, petrochemical, industrial automation, material handling, instrumentation, and quality systems.

### Approved creative direction

**Option 2: Engineering Drawing Journey**

The portfolio should feel like a real engineering package gradually becoming execution-ready. The visitor should experience a clear transformation:

> **Scope → Estimate → Engineer → Coordinate → Execute → Deliver**

The site must not feel like an AI-generated template, a generic developer portfolio, or an overloaded technical dashboard. It should look authored by a thoughtful industrial engineer with a strong understanding of drawings, project controls, documentation, and field execution.

---

## 1. Primary design objective

A first-time visitor must understand within approximately **five seconds**:

1. Who Vijayakumar is.

1. What kind of work he performs.

1. Which industries and project environments he understands.

1. How to view evidence or contact him.

The website should then reward scrolling with a guided visual story. Each section should reveal the next stage of an engineering project rather than simply placing résumé sections one after another.

### Core positioning statement

> **I turn complex industrial scope into cost clarity, coordinated engineering, and execution-ready project delivery.**

### Supporting statement

> Project Engineer with 10+ years across EPC, oil and gas, petrochemical, industrial automation, costing, estimation, PFD/P&ID documentation, supplier coordination, quality systems, and site execution.

### Primary audiences

| Audience | Immediate question | Content that answers it |
| --- | --- | --- |
| EPC hiring manager | Can he own and coordinate project work packages? | Hero, project journey, experience |
| Engineering manager | Can he translate scope into reliable engineering deliverables? | Capabilities, drawings, tools |
| Commercial or procurement lead | Can he prepare estimates and evaluate vendors? | Costing stage, project evidence |
| Industrial client | Can he support a defined engineering or estimation scope? | Selected projects, process, contact |
| Recruiter | Does his experience match the role and seniority? | Snapshot, timeline, résumé download |

---

## 2. Experience principles

### 2.1 Design for one-second recognition

Do not make the visitor decode a metaphor before seeing the professional identity. The first viewport must contain:

- Name.

- Specific role.

- Specific domain.

- One concise value proposition.

- One primary action.

- One secondary action.

- A professional portrait.

- Three or four proof points.

The drawing metaphor begins around the hero content and becomes more prominent as the visitor scrolls. It must never replace plain language.

### 2.2 Design like an authored engineering document

Use consistent visual decisions that suggest human craft:

- A limited palette.

- Measured spacing.

- Deliberate alignment.

- Hand-selected annotations.

- Specific project language.

- Imperfect but controlled technical marks.

- A clear reason for every animation.

Avoid:

- Generic gradients.

- Random floating blobs.

- Excessive glassmorphism.

- Decorative 3D objects with no connection to the work.

- Stock phrases such as “turning ideas into impact.”

- Repetitive AI-style cards with identical layouts.

- Overly polished fake case studies.

- Unverifiable numbers or project outcomes.

### 2.3 Animation must explain the work

Every motion effect must show a relationship, transition, or consequence. Use animation to communicate:

- How scope becomes an estimate.

- How an estimate becomes engineering documentation.

- How disciplines connect.

- How revisions are controlled.

- How a project becomes ready for execution.

Do not animate elements simply because the page can animate.

---

## 3. Visual identity

### 3.1 Overall mood

The site should resemble a carefully edited engineering drawing set presented in a contemporary portfolio. It should be:

- Technical but approachable.

- Premium but not luxurious.

- Industrial but not gritty.

- Animated but not theatrical.

- Structured but not bureaucratic.

- Personal but not casual.

### 3.2 Color system

Use a warm paper base rather than a pure white SaaS interface.

| Token | Value | Use |
| --- | --- | --- |
| Paper | `#F2F0EA` | Main page background |
| Drawing white | `#FBFAF6` | Cards and drawing sheets |
| Ink navy | `#142A35` | Headings, navigation, primary text |
| Blueprint blue | `#315B6B` | Process lines, diagram details, secondary actions |
| Graphite | `#536269` | Body copy and metadata |
| Copper redline | `#B66543` | Active path, highlights, revision marks, CTAs |
| Safety yellow | `#D9A72C` | Small warnings, status marks, key data points |
| Inspection green | `#4F806B` | Completed or verified states |
| Rule gray | `#C8CECA` | Borders, construction lines, dividers |

Use copper as an intentional redline accent, not as a blanket brand color. The site should remain legible and credible when printed or viewed without color.

### 3.3 Typography

Recommended fonts:

- **Display:** `Space Grotesk`, `Sora`, or `DM Sans` with strong weight contrast.

- **Body:** `Inter`, `IBM Plex Sans`, or `Source Sans 3`.

- **Technical labels:** `IBM Plex Mono` or `JetBrains Mono`.

Typography should feel editorial rather than futuristic. Use large headings sparingly. Do not put every label in uppercase.

Suggested type scale:

| Element | Desktop | Mobile |
| --- | --- | --- |
| Hero headline | 64–84 px | 40–48 px |
| Section heading | 42–56 px | 32–38 px |
| Card title | 22–28 px | 20–24 px |
| Body copy | 17–19 px | 16–18 px |
| Technical metadata | 12–14 px | 11–13 px |

### 3.4 Layout system

Use a 12-column desktop grid with wide outer margins, a 8-column tablet grid, and a single-column mobile layout.

Use:

- Horizontal datum lines.

- Drawing-sheet frames.

- Alignment marks.

- Small revision labels.

- Numbered sections such as `01 / DEFINE SCOPE`.

- A restrained technical grid that disappears behind the content at smaller sizes.

Do not place a permanent blueprint texture behind every section. Technical linework should appear where it explains the story.

---

## 4. Hero: immediate clarity before metaphor

### Layout

Use a two-column hero on desktop and a stacked hero on mobile.

**Left side:**

- Eyebrow: `PROJECT ENGINEERING / COSTING / EPC EXECUTION`

- Headline: **Engineering scope into cost clarity and executable delivery.**

- Two-sentence supporting copy.

- Primary CTA: `Explore the project journey`.

- Secondary CTA: `Download résumé`.

**Right side:**

- The supplied profile portrait.

- A thin technical frame around the portrait.

- A small caption: `VIJAYAKUMAR AATHIPAZHAM / PROJECT ENGINEER`.

- Four compact proof markers: `10+ YEARS`, `FEED + EPC`, `COSTING`, `PFD / P&ID`.

### Profile image instruction

The implementation agent must use the supplied portrait at this exact source path:

`C:\Users\sivap\Downloads\isolated-lighthouse\portfolio\src\assets\profile.jpeg`

The file is available in the project and should be imported through the project’s normal asset pipeline. Do not replace it with a generated avatar, stock photo, or AI portrait.

Recommended treatment:

- Use the image in the hero as a medium-to-large portrait, not as a tiny circular avatar.

- Preserve the original face and natural proportions.

- Use `object-fit: cover` with a portrait-oriented crop that keeps the head, shoulders, and blue shirt visible.

- Keep the crop centered slightly above the vertical midpoint so the face remains the visual anchor.

- Add a neutral paper or blueprint frame rather than a heavy filter.

- A subtle copper corner mark or drawing label is acceptable.

- Do not apply neon color grading, artificial depth effects, face retouching, or background replacement.

- Add meaningful alternative text: `Portrait of Vijayakumar Aathipazham, Project Engineer`.

- On mobile, place the portrait immediately after the headline and before the proof markers.

### Hero animation

The hero should not start with a long loader or cinematic intro. On initial load:

1. The technical frame draws in quickly over 500–700 ms.

1. The portrait fades in naturally.

1. The headline appears with a short upward reveal.

1. A single thin copper line travels from the proof markers toward the next section.

1. The scroll cue reads `SCROLL TO TRACE THE WORK`.

The visitor must be able to read and use the hero immediately. Keep the full entrance sequence below 1.2 seconds and skip nonessential motion for reduced-motion users.

---

## 5. Scroll journey and animation choreography

The scroll should feel like a document being developed. Use a sticky drawing frame or active process line only during the journey sections; release it before the résumé timeline and contact area.

### Stage 01 — Define scope

**Purpose:** Explain where projects begin.

Content:

- Contract purchase order review.

- Client requirements.

- Project objectives and KPIs.

- FEED and EPC context.

- Scope boundaries and assumptions.

Visual:

- Start with a blank drawing sheet.

- A title block appears: `PROJECT PACKAGE / REV 00 / SCOPE DEFINITION`.

- Three short scope annotations are revealed as the visitor scrolls.

- A copper boundary line encloses the scope.

Scroll effect:

- The sheet remains mostly static.

- Only the boundary, labels, and one flow arrow are drawn.

- Avoid excessive parallax.

### Stage 02 — Estimate cost

**Purpose:** Show commercial and technical estimation ability.

Content:

- BOQ: Bill of Quantities.

- MTO: Material Take-Off.

- Fabrication cost analysis.

- RFQ management.

- Supplier and quotation evaluation.

- Budget forecasting.

- Variation and change-cost assessment.

Visual:

- The scope boundary transforms into a structured estimate table.

- Rows appear as if entered into a cost worksheet.

- A small copper total line updates as categories are introduced.

- Do not show invented prices or a fake final project value.

Scroll effect:

- Use staggered row reveals tied to scroll progress.

- Animate category labels and subtotals, not fake numerical calculations.

- A small label changes from `UNPRICED SCOPE` to `COST STRUCTURED`.

### Stage 03 — Engineer the package

**Purpose:** Connect costing to engineering deliverables.

Content:

- PFD: Process Flow Diagram.

- P&ID: Piping and Instrumentation Diagram.

- Equipment datasheets.

- BOMs.

- Piping and instrumentation layouts.

- Cable schedules and I/O lists.

- QAPs and technical documentation.

Visual:

- A simplified, original PFD/P&ID-style diagram is drawn.

- Use generic tags such as `TK-101`, `P-201`, `XV-301`, and `FT-401`.

- Never reproduce confidential client drawings.

- Connect a tank, pump, valve, instrument, and output line with clear labels.

Scroll effect:

- The process line draws progressively from left to right.

- Equipment symbols appear only when their related explanatory text is in view.

- The active path is copper; completed lines become blueprint blue.

- Use a sticky diagram on desktop and a vertical step diagram on mobile.

### Stage 04 — Coordinate disciplines

**Purpose:** Show the cross-functional nature of the work.

Content:

- Engineering.

- Design.

- Finance.

- E&I: Electrical and Instrumentation.

- Procurement and suppliers.

- Clients and site teams.

Visual:

- The central engineering package becomes a hub.

- Five surrounding discipline labels connect through thin lines.

- Each connection contains one practical responsibility.

Scroll effect:

- Connections illuminate one at a time.

- The central package remains stable.

- Avoid a glowing cyberpunk network; use flat lines, labels, and calm transitions.

- On mobile, convert the network into a vertical handoff sequence.

### Stage 05 — Control revisions and changes

**Purpose:** Show accountability and traceability.

Content:

- Technical clarifications.

- Scope deviations.

- Variation orders.

- ECR/ECO approvals.

- Cost and schedule impact assessment.

- Revision-controlled records.

Visual:

- Show a drawing corner with `REV 00`, `REV 01`, and `REV 02` tabs.

- Use restrained redline marks to show changes.

- A change log lists `CHANGE`, `REASON`, `IMPACT`, and `STATUS`.

- Use illustrative wording only; do not invent project-specific change events.

Scroll effect:

- Redline marks appear and then resolve into a clean approved line.

- Revision tabs shift subtly as the user progresses.

- The active status changes from `UNDER REVIEW` to `CONTROLLED`.

### Stage 06 — Execute and verify

**Purpose:** Connect office engineering to site readiness.

Content:

- Fabrication and installation support.

- Tank erection and testing.

- Instrumentation installation.

- Critical equipment inspection.

- Instrument testing.

- Permit-to-work documentation for hazardous-area work.

- Maintenance and corrective action support.

Visual:

- The drawing sheet expands into a simplified site-readiness panel.

- Use six verification marks with clear labels.

- Show a generic inspection path rather than a fake plant photograph.

Scroll effect:

- Verification marks resolve sequentially.

- A line moves from `DOCUMENTED` to `TESTED` to `READY`.

- Keep the effect short and legible.

### Stage 07 — Deliver

**Purpose:** Bring the journey back to the client outcome.

Content:

- On-time engineering deliverables.

- Cost traceability.

- Cross-functional alignment.

- Audit-ready records.

- Execution readiness.

Visual:

- The original drawing sheet becomes a complete project package.

- The title block reads `EXECUTION-READY PACKAGE`.

- The final CTA appears beside the completed drawing.

Final animation:

- Complete the active copper line.

- Let the line settle into a simple underline beneath the contact CTA.

- Do not use confetti, fireworks, or celebratory gamification.

---

## 6. Selected projects as evidence, not decoration

Use project cards after the core journey. The visitor should now understand the process before seeing examples.

### Project list

| Project | Client or context | Scope | Role |
| --- | --- | --- | --- |
| Raw Material Feeding — SPROB | ISRO, Sriharikota | EPS | Project Engineer |
| Additive Feeding & Bagging System | Mahakoshal Refractories, Katni | Brownfield EPC | Project Engineer |
| Raw Material Handling & Bagging Systems | RHI Magnesita, IFGL, Totale Global | Greenfield EPC and site supervision | Project Engineer |
| Extruder Packaging Systems | BPCL Kochi, GAIL PP, Alujain PP, Rongxin PP | FEED + EPC | Project Engineer |
| Polyol Dosing System | UNO Minda, Bawal | Proposal costing and estimation | Project Engineer |
| Engineering Support & Maintenance | Shell Petroleum, Chennai | EPC support and maintenance | Project Engineer |
| Freelance Costing & Estimation Support | Mefco Engineers and Autometric | BOQ, MTO, piping, vessels, material handling, static equipment, structural estimation, instrumentation documentation | Freelance Consultant |

### Card behavior

Each project card should show within one glance:

- Project name.

- Client or location when approved for publication.

- Scope tag.

- Role.

- One concise contribution sentence.

When opened, the card should reveal three sections:

1. **Scope** — What system or project package was involved.

1. **Contribution** — What Vijayakumar prepared, coordinated, evaluated, or supported.

1. **Interface** — Which teams, suppliers, clients, or site activities were involved.

Use an accordion or side panel, not a full-screen modal that interrupts the journey. Preserve deep links for each project.

### Confidentiality rule

Before publishing named clients or project details, verify that public disclosure is permitted. If uncertain, use a sector description such as `confidential industrial automation client` and keep the technical scope without revealing proprietary information.

---

## 7. Fast evidence section

Place a compact evidence strip immediately after selected projects:

| Evidence | Context |
| --- | --- |
| `10+ years` | Engineering and project experience |
| `30+ CAPA reports` | Authored at Autosys Engineering |
| `12% improvement` | Production-line efficiency improvement at Autosys Engineering |
| `18% reduction` | Welding defect-rate reduction within six months |
| `ISO 9001:2015` | Internal Auditor certification |

Every metric must retain its context. Never show a large number without a label explaining what it represents.

Use a simple count-up only when the metric is visible. The count-up should stop at the documented value and should not exaggerate precision.

---

## 8. Experience timeline

Use the résumé timeline after the visitor has seen the work journey and evidence.

- **Project Engineer — Mold Masters DME India Pvt Ltd (Coperion–GEC)**, August 2025–Present.

- **Assistant Project Engineer — KJT**, November 2021–March 2025.

- **Junior Engineer (QMS & Project) — Autosys Engineering Pvt Ltd**, November 2018–July 2021.

- **Quality Assurance Engineer — Sri Balaji Castings Pvt Ltd**, June 2017–August 2018.

- **Trainee Engineer, Quality Assurance — TVS Sundaram Fasteners Pvt Ltd**, April 2016–June 2017.

Present progression visually as:

`Quality and inspection → QMS and project support → project engineering → costing, documentation, and execution ownership`

Use a vertical timeline with a copper active line. On mobile, place the date above each role and remove the separate date rail.

---

## 9. Tools, standards, and equipment

Group the tools by actual use rather than displaying one undifferentiated cloud of tags.

| Group | Items |
| --- | --- |
| Engineering and design | COMOS cDB/iDB, AutoCAD, SolidWorks |
| Project and planning | MS Project, Primavera P6 basic, MS Excel, Word, PowerPoint |
| Enterprise and programming | SAP, ATG Programming |
| Standards and compliance | API, ASME, ISO, ASTM, ATEX, ISO 9001:2015 |
| Equipment and systems | Tanks, valves, pumps, compressors, heat exchangers, static equipment, material handling, instrumentation |

On hover or focus, each group may display one short explanation. Do not turn this into a game or an animated skill meter. Avoid percentages because the résumé does not support proficiency scores.

---

## 10. Contact conversion

The contact area should feel like the final approval block of an engineering package.

Suggested heading:

> **Have a scope that needs structure?**

Suggested copy:

> For project engineering, costing and estimation support, engineering documentation, or EPC coordination, start with the scope, project stage, and required deliverable.

Show:

- `vijayakumaraathipazham@gmail.com`

- `linkedin.com/in/vijayakumaraathipazham`

- `Chennai, Tamil Nadu, India`

- Résumé download.

If a contact form is implemented, use these fields:

- Name.

- Work email.

- Organization.

- Project stage.

- Required support.

- Message.

The submit state should be calm and explicit. Do not use manipulative urgency language.

---

## 11. Responsive and accessibility requirements

### Mobile behavior

- Preserve the five-second recognition goal.

- Keep the portrait near the top.

- Convert sticky diagrams into sequential cards.

- Replace horizontal drawing development with vertical line drawing.

- Keep project cards full width.

- Use no hover-only information.

- Maintain minimum touch targets of 44 by 44 CSS pixels.

### Accessibility

- Use semantic headings.

- Maintain WCAG 2.2 AA contrast practices.

- Provide visible focus states.

- Add `aria-expanded` to accordions.

- Provide alternative text for the profile image and diagrams.

- Respect `prefers-reduced-motion`.

- Ensure the journey remains understandable when all animations are disabled.

- Do not use color alone for status.

- Explain specialist terms on first use: EPC, FEED, BOQ, MTO, PFD, P&ID, RFQ, QAP, CAPA, ECR, ECO, PTW, E&I, and ATEX.

### Reduced-motion mode

When reduced motion is enabled:

- Replace line drawing with instant appearance.

- Remove parallax and scale effects.

- Keep the active stage indicator visible.

- Preserve the same order and information hierarchy.

- Never hide content because animation is disabled.

---

## 12. Anti-AI-generated design rules

The implementation must satisfy these rules:

1. **Use real résumé language.** Prefer specific terms such as BOQ, MTO, PFD, P&ID, RFQ, variation order, equipment datasheet, and site testing.

1. **Use real constraints.** Mention only documented responsibilities and outcomes.

1. **Avoid generic claims.** Do not write “driving innovation,” “transforming industries,” or “delivering excellence” without evidence.

1. **Use a restrained component vocabulary.** Not every section should be a rounded card.

1. **Create custom diagram details.** Use a small set of meaningful generic equipment symbols instead of random decorative illustrations.

1. **Allow hierarchy to vary.** Use a drawing sheet for the journey, editorial cards for projects, and a timeline for experience.

1. **Do not overanimate.** Motion should clarify the engineering story.

1. **Use the supplied portrait.** The real image is a major signal of authenticity.

1. **Keep copy concise.** The first viewport must not read like an AI-generated biography.

1. **Do not invent visual proof.** Never create fake client logos, testimonials, project values, savings, awards, or certifications.

---

## 13. Recommended implementation architecture

Use a component-based frontend with content separated from layout.

Suggested components:

- `SiteHeader`

- `HeroIdentity`

- `ProfilePortrait`

- `ProofMarkers`

- `DrawingJourney`

- `ScopeStage`

- `EstimateStage`

- `EngineeringStage`

- `CoordinationStage`

- `RevisionStage`

- `ExecutionStage`

- `DeliveryStage`

- `ProjectCard`

- `ProjectDetailPanel`

- `EvidenceMetric`

- `ExperienceTimeline`

- `CapabilityGroup`

- `ContactApprovalBlock`

- `SiteFooter`

Keep project data, experience data, capability data, and metrics in structured content objects. Keep animation state separate from the content model.

Recommended browser technologies:

- CSS transforms and opacity for basic motion.

- `IntersectionObserver` for simple viewport reveals.

- Scroll progress using `requestAnimationFrame` only when necessary.

- SVG for the simplified PFD/P&ID journey.

- CSS `@media (prefers-reduced-motion: reduce)` for motion fallbacks.

Avoid adding a large animation library unless it materially improves reliability. The experience should remain fast and maintainable.

---

## 14. Full implementation prompt

> Build a responsive personal portfolio website for Vijayakumar Aathipazham, a Chennai-based Project Engineer specializing in costing, estimation, engineering documentation, industrial automation, oil and gas, petrochemical, and EPC execution.Use the approved creative direction: **Engineering Drawing Journey**. The portfolio should feel like a real engineering drawing package gradually becoming execution-ready. The visitor journey is: **Scope → Estimate → Engineer → Coordinate → Control Change → Execute → Deliver**.The site must be understandable within five seconds. The first viewport must clearly show the name, specific role, domain, value proposition, portrait, proof markers, and two actions. Use this headline: “Engineering scope into cost clarity and executable delivery.” Use this supporting message: “Project Engineer with 10+ years across EPC, oil and gas, petrochemical, industrial automation, costing, estimation, PFD/P&ID documentation, supplier coordination, quality systems, and site execution.” Use primary CTA “Explore the project journey” and secondary CTA “Download résumé.”Use the real profile image from this exact project path: `C:\Users\sivap\Downloads\isolated-lighthouse\portfolio\src\assets\profile.jpeg`. Import it through the project asset pipeline. Do not generate or substitute an avatar. Use the portrait prominently in the hero with a paper or technical drawing frame, natural color, preserved proportions, and accessible alternative text: “Portrait of Vijayakumar Aathipazham, Project Engineer.” Do not apply AI retouching, neon grading, or an artificial background.Use a warm paper background, ink navy typography, blueprint blue linework, graphite body text, copper redline accents, safety yellow details, and inspection green completion states. Use Space Grotesk or a similar geometric display font, Inter or IBM Plex Sans for body copy, and IBM Plex Mono for technical labels. The site must feel authored, editorial, precise, and industrial. Do not use generic gradients, glassmorphism, floating blobs, fake dashboards, excessive rounded cards, or stock-photo factory scenes.Implement a scroll-led drawing journey. Begin with a blank technical drawing sheet labelled `PROJECT PACKAGE / REV 00 / SCOPE DEFINITION`. As the user scrolls, reveal scope annotations, transform scope into an estimate structure, draw a generic PFD/P&ID with tank, pump, valve, and instrument symbols, connect engineering to Finance, Design, E&I, procurement, client, and site teams, show controlled redline revisions, and finish with an execution-ready project package. Use generic equipment tags such as TK-101, P-201, XV-301, and FT-401. Never reproduce confidential drawings or invent client-specific technical details.Use scroll effects that explain the work: line drawing, sequential annotation reveals, restrained row reveals, active-path color transitions, revision-tab movement, and verification states changing from `DOCUMENTED` to `TESTED` to `READY`. Keep animations quick, purposeful, and subtle. Do not use a long intro loader, excessive parallax, scroll hijacking, fake data calculations, confetti, or decorative motion. The page must remain understandable with animations disabled and must respect `prefers-reduced-motion`.After the journey, show evidence-based project cards for Raw Material Feeding — SPROB; Additive Feeding & Bagging System — Mahakoshal Refractories; Raw Material Handling & Bagging Systems — RHI Magnesita, IFGL, and Totale Global; Extruder Packaging Systems — BPCL Kochi, GAIL PP, Alujain PP, and Rongxin PP; Polyol Dosing System — UNO Minda; Engineering Support & Maintenance — Shell Petroleum; and Freelance Costing & Estimation Support — Mefco Engineers and Autometric. Cards must show project context, scope, role, and contribution. Use an expandable detail panel with Scope, Contribution, and Interface. Include an anonymization option for confidential work.Include only résumé-supported evidence: 10+ years, 30+ CAPA reports, 12% production-line efficiency improvement at Autosys Engineering, 18% welding defect-rate reduction within six months, and ISO 9001:2015 Internal Auditor certification. Do not invent project values, savings, revenue, team sizes, awards, testimonials, or client logos.Include the five-role experience timeline: Mold Masters DME India Pvt Ltd (Coperion–GEC), KJT, Autosys Engineering Pvt Ltd, Sri Balaji Castings Pvt Ltd, and TVS Sundaram Fasteners Pvt Ltd. Show progression from quality and inspection into project engineering, costing, documentation, and execution ownership.End with a contact block styled like the approval block of an engineering package. Include Vijayakumar’s email, LinkedIn, Chennai location, résumé download, and a clear contact action. Add SEO metadata for project engineering, industrial costing, estimation, EPC, oil and gas, petrochemical, PFD/P&ID, BOQ, MTO, and Chennai.Ensure responsive behavior, keyboard navigation, semantic headings, focus states, accessible accordions, alternative text, good contrast, reduced-motion support, and touch targets of at least 44 px. On mobile, replace the sticky technical drawing with vertical stage cards and keep the journey easy to scan.The final result should make a hiring manager or industrial client understand within seconds who Vijayakumar is, what he does, which project environments he understands, and how to start a conversation. The visual story should feel human-authored, technically credible, and specific to EPC project engineering rather than AI-generated.

---

## 15. Acceptance criteria

The implementation is successful when:

- The first viewport communicates identity, role, domain, proof, and actions within five seconds.

- The supplied profile image is used at the specified project path.

- The scroll experience clearly follows Scope → Estimate → Engineer → Coordinate → Control → Execute → Deliver.

- Every animation explains an engineering relationship or state change.

- The journey still works with reduced motion enabled.

- The visual system resembles an authored engineering drawing package without becoming a blueprint cliché.

- Project evidence is specific and résumé-supported.

- No fake achievements, metrics, logos, testimonials, or confidential drawings are introduced.

- The layout is usable on mobile and keyboard-accessible.

- The visitor can reach a project example, résumé, or contact route without confusion.

---

## 16. Publication notes

Confirm permission before publishing current-employer names and named client projects. If public disclosure is uncertain, use an anonymized client description while retaining the technical scope.

Use calibrated verbs such as **supported, coordinated, prepared, contributed, evaluated, maintained, and owned assigned work packages** unless the résumé explicitly establishes sole responsibility.

---

## References

[1]: file:///home/ubuntu/upload/Vijayakumar_Aathipazham_Resume.pdf "Vijayakumar Aathipazham résumé supplied for portfolio design"

---

**Prepared by Manus AI**

*Design specification version: 2.0 — Engineering Drawing Journey*
*Approved direction: Option 2*
*Primary implementation asset: **`C:\Users\sivap\Downloads\isolated-lighthouse\portfolio\src\assets\profile.jpeg`*