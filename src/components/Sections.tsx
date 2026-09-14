import { useState } from 'react';
import { EVIDENCE, EXPERIENCE, PROJECTS, TOOL_GROUPS } from '../data/content';
import { useCountUp, useReveal } from '../hooks/useReveal';
import { SectionLabel } from './HeroIdentity';

function spanClass(i: number): string {
  if (i === 6) return 'project-card full';
  return i % 3 === 0 ? 'project-card wide' : i % 3 === 1 ? 'project-card narrow' : 'project-card';
}

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(PROJECTS[0].id);
  return (
    <section className="section" id="projects" aria-labelledby="proj-title">
      <div className="wrap">
        <SectionLabel index="03" label="Selected projects" />
        <div className="section-head">
          <h2 id="proj-title">Proof through project contexts</h2>
          <p className="lede">
            Each card states context, scope type, role, and contribution. Company and
            client names are shown as supplied in the resume — confirm publication
            permission before sharing; confidential scopes can be anonymised without
            redesigning the card.
          </p>
        </div>
        <div className="project-grid">
          {PROJECTS.map((p, i) => {
            const open = openId === p.id;
            return (
              <article className={spanClass(i)} key={p.id} aria-labelledby={`pj-${p.id}`}>
                <div className="tag-row">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <h3 id={`pj-${p.id}`}>{p.title}</h3>
                <p className="project-client">
                  <strong>{p.client}</strong> · {p.location} · {p.role}
                </p>
                <p className="summary">{p.summary}</p>
                <button
                  type="button"
                  className="detail-btn"
                  aria-expanded={open}
                  aria-controls={`detail-${p.id}`}
                  onClick={() => setOpenId(open ? null : p.id)}
                >
                  {open ? 'Hide project logic −' : 'View project logic +'}
                </button>
                {open && (
                  <div className="project-detail" id={`detail-${p.id}`}>
                    <div>
                      <h4>Scope</h4>
                      <ul>
                        {p.scope.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4>Engineering / commercial contribution</h4>
                      <ul>
                        {p.contribution.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4>Delivery interface</h4>
                      <ul>
                        {p.deliveryInterface.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function EvidenceMetric({ item }: { item: (typeof EVIDENCE)[number] }) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.3);
  const count = useCountUp(item.numeric ?? 0, visible && item.numeric != null);
  const display = item.numeric == null ? item.value : `${count}${item.suffix}`;
  return (
    <div className="evidence" ref={ref}>
      <strong>{display}</strong>
      <span className="lbl">{item.label}</span>
      <span className="ctx">{item.context}</span>
    </div>
  );
}

export function Evidence() {
  return (
    <section className="section" id="evidence" aria-labelledby="ev-title">
      <div className="wrap">
        <SectionLabel index="04" label="Evidence" />
        <div className="section-head">
          <h2 id="ev-title">Only resume-supported results</h2>
          <p className="lede">
            Every metric below is traceable to the supplied resume. No invented savings,
            project values, testimonials, or awards.
          </p>
        </div>
        <div className="evidence-strip">
          {EVIDENCE.map((e) => (
            <EvidenceMetric key={e.label} item={e} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="exp-title">
      <div className="wrap">
        <SectionLabel index="05" label="Experience" />
        <div className="section-head">
          <h2 id="exp-title">From quality foundations to project ownership</h2>
          <p className="lede">
            Progression from inspection and quality systems into estimation,
            documentation coordination, and EPC execution ownership.
          </p>
        </div>
        <div className="timeline">
          {EXPERIENCE.map((e, i) => (
            <article className={`tl-item${i === 0 ? ' current' : ''}`} key={e.id}>
              <span className="tl-period">{e.period}</span>
              <h3>{e.position}</h3>
              <p className="tl-org">{e.organization}</p>
              <p className="tl-scope">{e.scope}</p>
              <ul>
                {e.contributions.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Tools() {
  return (
    <section className="section" id="tools" aria-labelledby="tools-title">
      <div className="wrap">
        <SectionLabel index="06" label="Tools · Standards · Equipment" />
        <div className="section-head">
          <h2 id="tools-title">Technical fluency at a glance</h2>
          <p className="lede">Grouped by purpose so hiring managers and leads can scan fast.</p>
        </div>
        <div className="tool-groups">
          {TOOL_GROUPS.map((g) => (
            <div className="tool-group" key={g.group}>
              <h3>{g.group}</h3>
              <p className="tool-blurb">{g.blurb}</p>
              <div className="tool-tags">
                {g.items.map((t) => (
                  <span className="tag solid" key={t} style={{ textTransform: 'none' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
