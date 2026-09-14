import { useState } from 'react';
import { CAPABILITIES, DELIVERY_STEPS } from '../data/content';
import { SectionLabel } from './HeroIdentity';

const FILTERS = ['All', 'Commercial', 'Engineering', 'Execution', 'Quality'] as const;

export function Capabilities() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');
  const visible =
    filter === 'All' ? CAPABILITIES : CAPABILITIES.filter((c) => c.filter.includes(filter as never));

  return (
    <section className="section" id="capabilities" aria-labelledby="cap-title">
      <div className="wrap">
        <SectionLabel index="02" label="Capability" />
        <div className="section-head">
          <h2 id="cap-title">Four disciplines, one accountable owner</h2>
          <p className="lede">
            Most profiles show either estimation <em>or</em> execution. My work connects
            commercial control, documentation discipline, and site delivery for industrial
            and EPC teams.
          </p>
        </div>
        <div className="filter-row" role="group" aria-label="Filter capabilities">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className="chip"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="cap-grid">
          {visible.map((c) => (
            <article className="cap-card" key={c.id} aria-labelledby={`cap-${c.id}`}>
              <div className="cap-top">
                <span className="cap-index">{c.index} / {c.title.toUpperCase()}</span>
                <span className="cap-filter">{c.filter.join(' · ')}</span>
              </div>
              <h3 id={`cap-${c.id}`}>{c.title}</h3>
              <p className="tagline">{c.tagline}</p>
              <ul>
                {c.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <p className="cap-value">{c.value}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DeliveryProcess() {
  return (
    <section className="section" id="method" aria-labelledby="method-title">
      <div className="wrap">
        <SectionLabel index="02" label="Project delivery" />
        <div className="section-head">
          <h2 id="method-title">How scope becomes site-ready delivery</h2>
          <p className="lede">
            A five-stage method that keeps estimate, engineering, procurement, and site
            teams working from the same defined scope.
          </p>
        </div>
        <ol className="process" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {DELIVERY_STEPS.map((s) => (
            <li className="step" key={s.n}>
              <span className="n">STEP {s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
