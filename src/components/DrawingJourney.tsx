import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';
import { SectionLabel } from './HeroIdentity';

const STAGES = [
  { id: 'journey-scope', short: 'Scope', label: '01 / Define scope' },
  { id: 'journey-estimate', short: 'Estimate', label: '02 / Estimate cost' },
  { id: 'journey-engineer', short: 'Engineer', label: '03 / Engineer package' },
  { id: 'journey-coordinate', short: 'Coordinate', label: '04 / Coordinate' },
  { id: 'journey-control', short: 'Control', label: '05 / Control change' },
  { id: 'journey-execute', short: 'Execute', label: '06 / Execute & verify' },
  { id: 'journey-deliver', short: 'Deliver', label: '07 / Deliver' },
];

function StageShell({
  id,
  index,
  children,
}: {
  id: string;
  index: string;
  children: ReactNode;
}) {
  const { ref, visible } = useReveal<HTMLElement>(0.15);
  return (
    <section
      id={id}
      ref={ref}
      className={`stage${visible ? ' is-visible' : ''}`}
      aria-label={index}
    >
      {children}
    </section>
  );
}

function StageHeading({ n, title, lede }: { n: string; title: string; lede: string }) {
  return (
    <div className="stage-text">
      <p className="stage-no">{n}</p>
      <h3>{title}</h3>
      <p>{lede}</p>
    </div>
  );
}

/* ---------- Stage 01 — Define scope ---------- */
function ScopeStage() {
  const notes = [
    { t: 'Contract PO review', d: 'Terms, quantities, and exclusions checked before any number is built.' },
    { t: 'Client requirements', d: 'Objectives, KPIs, and acceptance criteria agreed in plain language.' },
    { t: 'FEED / EPC boundaries', d: 'What is defined, what is assumed, and what stays outside scope.' },
  ];
  return (
    <StageShell id="journey-scope" index="01 define scope">
      <StageHeading
        n="01 — Define scope"
        title="Every package starts as a boundary"
        lede="Contract purchase orders, client requirements, and FEED/EPC context are read first — so the estimate prices the right scope, not just a drawing count."
      />
      <div className="sheet" role="img" aria-label="Drawing sheet showing scope definition with a copper boundary enclosing three scope annotations">
        <div className="sheet-bar">
          <span>Project package</span>
          <span>Rev 00</span>
          <span>Scope definition</span>
        </div>
        <div className="sheet-scope">
          {notes.map((n, i) => (
            <div className="scope-note" style={{ transitionDelay: `${0.15 + i * 0.15}s` }} key={n.t}>
              <span className="note-pin" aria-hidden="true">{`S${i + 1}`}</span>
              <div>
                <strong>{n.t}</strong>
                <p>{n.d}</p>
              </div>
            </div>
          ))}
        </div>
        <svg className="scope-flow" viewBox="0 0 320 40" aria-hidden="true">
          <path d="M8 20 H250 L292 20 M278 12 L294 20 L278 28" fill="none" strokeWidth="2.5" className="draw-line" />
        </svg>
      </div>
    </StageShell>
  );
}

/* ---------- Stage 02 — Estimate cost ---------- */
const ESTIMATE_ROWS = [
  { cat: 'BOQ', desc: 'Bill of Quantities — structured, traceable line items' },
  { cat: 'MTO', desc: 'Material Take-Off — quantities from drawings and specs' },
  { cat: 'Fabrication', desc: 'Shop cost analysis for piping, vessels, structures' },
  { cat: 'RFQ', desc: 'Request-for-Quotation packages and quotation evaluation' },
  { cat: 'Budget', desc: 'Forecasts with stated assumptions, not hidden margins' },
  { cat: 'Variations', desc: 'Change-cost assessment tied to scope deltas' },
];

function EstimateStage() {
  const { ref, visible } = useReveal<HTMLElement>(0.25);
  return (
    <section
      id="journey-estimate"
      ref={ref}
      className={`stage${visible ? ' is-visible' : ''}`}
      aria-label="02 estimate cost"
    >
      <StageHeading
        n="02 — Estimate cost"
        title="Scope becomes a cost structure"
        lede="The copper boundary turns into a worksheet: BOQs, MTOs, fabrication analysis, RFQs, supplier evaluation, and budget forecasts — with assumptions stated, never invented prices."
      />
      <div className="sheet">
        <div className="sheet-bar">
          <span>Cost worksheet</span>
          <span className={`status-pill${visible ? ' done' : ''}`}>
            {visible ? 'Cost structured' : 'Unpriced scope'}
          </span>
        </div>
        <ul className="est-table">
          {ESTIMATE_ROWS.map((r, i) => (
            <li
              key={r.cat}
              className="est-row"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <span className="est-cat">{r.cat}</span>
              <span className="est-desc">{r.desc}</span>
              <span className="est-tick" aria-hidden="true">✓</span>
            </li>
          ))}
        </ul>
        <div className="est-total" aria-hidden="true">
          <span>Traceable total — assumptions on record</span>
          <span className="total-line" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Stage 03 — Engineer the package ---------- */
const PFD_STEPS = [
  { tag: 'TK-101', name: 'Storage tank', d: 'Datasheet, level interface, outlet nozzle orientation.' },
  { tag: 'P-201', name: 'Transfer pump', d: 'Duty point, suction/discharge piping, isolation valves.' },
  { tag: 'XV-301', name: 'Control valve', d: 'Signal interface to the control panel and interlocks.' },
  { tag: 'FT-401', name: 'Flow instrument', d: 'I/O list entry, cable schedule, calibration check.' },
];

function PfdNode({ step, on }: { step: (typeof PFD_STEPS)[number]; on: boolean }) {
  return (
    <div className={`pfd-node${on ? ' on' : ''}`}>
      <span className="pfd-tag">{step.tag}</span>
      <strong>{step.name}</strong>
      <p>{step.d}</p>
    </div>
  );
}

function EngineeringStage() {
  const { ref, visible } = useReveal<HTMLElement>(0.2);
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [lit, setLit] = useState(prefersReduced ? PFD_STEPS.length : 0);

  useEffect(() => {
    if (!visible || prefersReduced) return;
    const timers = PFD_STEPS.map((_, i) => window.setTimeout(() => setLit(i + 1), 350 + i * 450));
    return () => timers.forEach(clearTimeout);
  }, [visible, prefersReduced]);

  return (
    <section
      id="journey-engineer"
      ref={ref}
      className={`stage${visible ? ' is-visible' : ''}`}
      aria-label="03 engineer the package"
    >
      <StageHeading
        n="03 — Engineer the package"
        title="Cost lines become deliverables"
        lede="PFDs, P&IDs, equipment datasheets, BOMs, layouts, cable schedules, I/O lists, and QAPs — drawn here as a generic illustrative loop. Never a client drawing."
      />
      <div className="eng-grid">
        <svg
          className="pfd"
          viewBox="0 0 560 150"
          role="img"
          aria-label="Simplified illustrative process diagram: tank TK-101 feeds pump P-201, valve XV-301, instrument FT-401, to outlet"
        >
          <path
            d="M20 75 H150 M230 75 H300 M380 75 H450 M520 75 H545"
            fill="none"
            strokeWidth="3"
            className={`pipe${lit >= 4 ? ' complete' : ' active'}`}
          />
          <g className={`eq${lit >= 1 ? ' on' : ''}`}>
            <rect x="100" y="45" width="60" height="60" rx="4" />
            <text x="130" y="128">TK-101</text>
          </g>
          <g className={`eq${lit >= 2 ? ' on' : ''}`}>
            <circle cx="265" cy="75" r="26" />
            <text x="265" y="128">P-201</text>
          </g>
          <g className={`eq${lit >= 3 ? ' on' : ''}`}>
            <path d="M345 62 L367 88 M367 62 L345 88" strokeWidth="4" />
            <text x="356" y="128">XV-301</text>
          </g>
          <g className={`eq${lit >= 4 ? ' on' : ''}`}>
            <rect x="460" y="55" width="56" height="40" rx="20" />
            <text x="488" y="128">FT-401</text>
          </g>
        </svg>
        <div className="pfd-steps">
          {PFD_STEPS.map((s, i) => (
            <PfdNode key={s.tag} step={s} on={lit > i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Stage 04 — Coordinate disciplines ---------- */
const DISCIPLINES = [
  { t: 'Engineering', d: 'Deliverable reviews and technical decisions.' },
  { t: 'Design', d: 'Layout and modelling aligned to the P&ID.' },
  { t: 'Finance', d: 'Budget checks before commitments are made.' },
  { t: 'E&I', d: 'Electrical & Instrumentation interfaces and I/O.' },
  { t: 'Procurement & suppliers', d: 'RFQs, clarifications, and delivery follow-up.' },
  { t: 'Clients & site', d: 'Approvals, permits, and readiness feedback.' },
];

function CoordinationStage() {
  return (
    <StageShell id="journey-coordinate" index="04 coordinate disciplines">
      <StageHeading
        n="04 — Coordinate disciplines"
        title="One package, six conversations"
        lede="The engineering package is the hub. Each connection carries one practical responsibility — flat lines and calm transitions, no network theatrics."
      />
      <div className="hub" role="list" aria-label="Discipline coordination map">
        <div className="hub-center" role="listitem">
          <strong>Engineering package</strong>
          <span>Rev-controlled · costed · defined</span>
        </div>
        {DISCIPLINES.map((d) => (
          <div className="hub-spoke" role="listitem" key={d.t} tabIndex={0}>
            <strong>{d.t}</strong>
            <p>{d.d}</p>
          </div>
        ))}
      </div>
    </StageShell>
  );
}

/* ---------- Stage 05 — Control revisions ---------- */
const CHANGE_LOG = [
  { c: 'Clarification', r: 'Nozzle orientation query', i: 'Layout note updated', s: 'Closed' },
  { c: 'Deviation', r: 'Valve trim substitution', i: 'Datasheet re-issued', s: 'Approved' },
  { c: 'Variation', r: 'Added drain scope', i: 'Cost + schedule assessed', s: 'Controlled' },
];

function RevisionStage() {
  const { ref, visible } = useReveal<HTMLElement>(0.25);
  return (
    <section
      id="journey-control"
      ref={ref}
      className={`stage${visible ? ' is-visible' : ''}`}
      aria-label="05 control revisions and changes"
    >
      <StageHeading
        n="05 — Control revisions"
        title="Change leaves a paper trail"
        lede="Clarifications, deviations, variation orders, and ECR/ECO approvals — each with assessed cost and schedule impact. Illustrative entries only."
      />
      <div className="sheet">
        <div className="sheet-bar rev-tabs" role="tablist" aria-label="Drawing revisions">
          {['Rev 00', 'Rev 01', 'Rev 02'].map((r, i) => (
            <span
              key={r}
              role="tab"
              aria-selected={visible && i === 2}
              className={`rev-tab${visible && i === 2 ? ' active' : ''}`}
            >
              {r}
            </span>
          ))}
          <span className={`status-pill${visible ? ' done' : ''}`}>
            {visible ? 'Controlled' : 'Under review'}
          </span>
        </div>
        <div className="redline" aria-hidden="true">
          <svg viewBox="0 0 320 54">
            <path d="M10 40 H310" className="clean-line" strokeWidth="3" fill="none" />
            <path d="M60 40 l14 -18 l14 18 M210 40 l12 -14" className="redline-mark" strokeWidth="2.5" fill="none" />
          </svg>
        </div>
        <table className="change-log">
          <caption className="meta">Illustrative change log — format only, not project events</caption>
          <thead>
            <tr>
              <th scope="col">Change</th>
              <th scope="col">Reason</th>
              <th scope="col">Impact</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {CHANGE_LOG.map((row) => (
              <tr key={row.c + row.r}>
                <td>{row.c}</td>
                <td>{row.r}</td>
                <td>{row.i}</td>
                <td>
                  <span className="status-chip">{row.s}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* ---------- Stage 06 — Execute and verify ---------- */
const CHECKS = [
  'Fabrication & installation support',
  'Tank erection & testing',
  'Instrumentation installation',
  'Critical equipment inspection',
  'PTW documentation for hazardous areas',
  'Maintenance & corrective-action support',
];

function ExecutionStage() {
  const { ref, visible } = useReveal<HTMLElement>(0.25);
  return (
    <section
      id="journey-execute"
      ref={ref}
      className={`stage${visible ? ' is-visible' : ''}`}
      aria-label="06 execute and verify"
    >
      <StageHeading
        n="06 — Execute & verify"
        title="The sheet meets the site"
        lede="Installation, testing, inspection, permit-to-work discipline, and maintenance support move the package from documented to tested to ready."
      />
      <div className="sheet">
        <div className="readiness" aria-hidden="true">
          {['Documented', 'Tested', 'Ready'].map((s, i) => (
            <span key={s} className={`read-step${visible ? ' on' : ''}`} style={{ transitionDelay: `${i * 0.25}s` }}>
              {s}
            </span>
          ))}
        </div>
        <ul className="check-list">
          {CHECKS.map((c, i) => (
            <li key={c} style={{ transitionDelay: `${i * 0.12}s` }}>
              <span className="check-mark" aria-hidden="true">✓</span>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Stage 07 — Deliver ---------- */
const OUTCOMES = [
  'On-time engineering deliverables',
  'Cost traceability',
  'Cross-functional alignment',
  'Audit-ready records',
  'Execution readiness',
];

function DeliveryStage() {
  return (
    <StageShell id="journey-deliver" index="07 deliver">
      <StageHeading
        n="07 — Deliver"
        title="An execution-ready package"
        lede="The drawing set closes as a complete, controlled package — ready for procurement, site teams, and audit."
      />
      <div className="sheet deliver">
        <div className="sheet-bar">
          <span>Project package</span>
          <span className="status-pill done">Execution-ready</span>
        </div>
        <ul className="outcome-list">
          {OUTCOMES.map((o) => (
            <li key={o}>
              <span className="check-mark" aria-hidden="true">✓</span>
              {o}
            </li>
          ))}
        </ul>
        <div className="deliver-cta">
          <a className="btn btn-primary" href="#contact">
            Discuss a scope
          </a>
          <span className="cta-underline" aria-hidden="true" />
        </div>
      </div>
    </StageShell>
  );
}

/* ---------- Journey wrapper with sticky rail ---------- */
export function DrawingJourney() {
  const [active, setActive] = useState(STAGES[0].id);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const sections = STAGES.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section journey" id="journey" aria-labelledby="journey-title">
      <div className="wrap">
        <SectionLabel index="01" label="Project journey" />
        <div className="section-head">
          <h2 id="journey-title">Scope → estimate → engineer → deliver</h2>
          <p className="lede">
            Follow one package as it becomes execution-ready. Each stage adds exactly one
            layer — the way a real drawing set matures.
          </p>
        </div>
      </div>
      <div className="wrap journey-body" ref={rootRef}>
        <nav className="journey-rail" aria-label="Journey stages">
          <ol>
            {STAGES.map((s, i) => (
              <li key={s.id} className={active === s.id ? 'rail-active' : ''} aria-current={active === s.id ? 'true' : undefined}>
                <a href={`#${s.id}`}>
                  <span className="rail-no" aria-hidden="true">{`0${i + 1}`}</span>
                  {s.short}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="journey-stages">
          <ScopeStage />
          <EstimateStage />
          <EngineeringStage />
          <CoordinationStage />
          <RevisionStage />
          <ExecutionStage />
          <DeliveryStage />
        </div>
      </div>
    </section>
  );
}
