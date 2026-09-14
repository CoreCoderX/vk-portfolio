import profileImg from '../assets/profile.jpeg';
import { PROFILE, PROOF_MARKERS, RESUME_URL } from '../data/content';

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return <p className="eyebrow">{index} / {label}</p>;
}

export function ProfilePortrait() {
  return (
    <figure className="portrait-sheet" aria-label="Profile portrait with drawing frame">
      <span className="corner-mark corner-mark--tl" aria-hidden="true" />
      <span className="corner-mark corner-mark--tr" aria-hidden="true" />
      <span className="corner-mark corner-mark--bl" aria-hidden="true" />
      <span className="corner-mark corner-mark--br" aria-hidden="true" />
      <img
        src={profileImg}
        alt="Portrait of Vijayakumar Aathipazham, Project Engineer"
        className="portrait-img"
        loading="eager"
      />
      <figcaption className="portrait-caption">
        <span>Vijayakumar Aathipazham / Project Engineer</span>
        <span className="sheet-rev">Sheet A-101 · Rev 00</span>
      </figcaption>
    </figure>
  );
}

export function ProofMarkers() {
  return (
    <dl className="proof-row" aria-label="Key proof points">
      {PROOF_MARKERS.map((m) => (
        <div className="proof" key={m.value}>
          <dt>{m.label}</dt>
          <dd>{m.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function HeroIdentity() {
  return (
    <section className="hero" id="overview" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-intro">
          <p className="meta hero-eyebrow">
            <span className="status-mark" aria-hidden="true" />
            Project Engineering / Costing / EPC Execution
          </p>
          <h1 id="hero-title">
            Engineering scope into <span className="accent">cost clarity</span> and
            executable delivery.
          </h1>
        </div>
        <div className="hero-visual">
          <ProfilePortrait />
          <ProofMarkers />
          <p className="scroll-cue" aria-hidden="true">
            <span className="scroll-line" />
            Scroll to trace the work
          </p>
        </div>
        <div className="hero-sub">
          <p className="lede hero-positioning">{PROFILE.positioning}</p>
          <p className="lede hero-support">{PROFILE.intro}</p>
        </div>
        <div className="hero-actions">
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#journey">
              Explore the project journey
            </a>
            <a
              className="btn btn-ghost"
              href={RESUME_URL}
              download="Vijayakumar_Aathipazham_Resume.pdf"
            >
              Download resume
            </a>
          </div>
          <p className="hero-note">
            Chennai, India · EPC · Oil &amp; gas · Petrochemical · Open to project &amp;
            full-time roles
          </p>
        </div>
      </div>
    </section>
  );
}
