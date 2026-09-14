import { useState } from 'react';
import profileImg from '../assets/profile.jpeg';
import { GLOSSARY, PROFILE, RESUME_URL } from '../data/content';
import { SectionLabel } from './HeroIdentity';

export function AboutContact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setStatus('Copy failed — please select the address manually.');
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') || '');
    const org = String(data.get('org') || '');
    const context = String(data.get('context') || '');
    const message = String(data.get('message') || '');
    if (!name.trim() || !message.trim()) {
      setStatus('Please add your name and a short message so I can respond usefully.');
      return;
    }
    const subject = encodeURIComponent(`Project inquiry — ${name}${org ? ` (${org})` : ''} [${context}]`);
    const body = encodeURIComponent(`${message}\n\n— ${name}${org ? `, ${org}` : ''}`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setStatus('Opening your email app with the message pre-filled.');
  };

  return (
    <>
      <section className="section" id="about" aria-labelledby="about-title">
        <div className="wrap two-col">
          <div className="about-card">
            <SectionLabel index="07" label="About" />
            <h2 id="about-title" style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: 16 }}>
              The point where detail becomes accountability
            </h2>
            <div className="about-photo">
              <img
                src={profileImg}
                alt="Portrait of Vijayakumar Aathipazham, Project Engineer"
                loading="lazy"
              />
              <div>
                <p className="about-name">{PROFILE.name}</p>
                <p className="meta">Project Engineer · {PROFILE.location}</p>
              </div>
            </div>
            <p>
              I am a Mechanical Engineer based in Chennai, focused on the point where
              engineering detail becomes project accountability. My work spans estimation,
              project documentation, client coordination, supplier evaluation, industrial
              automation, quality systems, and site readiness.
            </p>
            <p style={{ marginTop: 12 }}>
              I am building toward leadership roles in project controls, engineering
              execution, and cross-border project delivery — contributing to, coordinating,
              and owning assigned work packages with traceable, audit-ready discipline.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap' }}>
              <a
                className="btn btn-ghost btn-small"
                href={RESUME_URL}
                download="Vijayakumar_Aathipazham_Resume.pdf"
              >
                Download resume
              </a>
              <a
                className="btn btn-ghost btn-small"
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn profile
              </a>
            </div>
            <div className="glossary" aria-label="Abbreviation glossary">
              {GLOSSARY.map(([abbr, full]) => (
                <details key={abbr}>
                  <summary>
                    {abbr} <span aria-hidden="true">·</span>
                  </summary>
                  {full}
                </details>
              ))}
            </div>
          </div>

          <div className="contact-card" id="contact" aria-labelledby="contact-title">
            <div className="approval-bar" aria-hidden="true">
              <span>Approval block — Contact</span>
              <span className="approved">Ready for review ✓</span>
            </div>
            <SectionLabel index="08" label="Contact" />
            <h2 id="contact-title" style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: 12 }}>
              Have a scope that needs structure?
            </h2>
            <p>
              For project engineering, costing and estimation support, engineering
              documentation, or EPC coordination, start with the scope, project stage,
              and required deliverable.
            </p>
            <ul className="contact-list">
              <li>
                <span className="meta">Work email</span>
                <br />
                <span className="copy-row">
                  <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
                  <button type="button" className="copy-btn" onClick={copyEmail}>
                    {copied ? 'Copied ✓' : 'Copy email'}
                  </button>
                </span>
              </li>
              <li>
                <span className="meta">LinkedIn</span>
                <br />
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                  {PROFILE.linkedinLabel}
                </a>
              </li>
              <li>
                <span className="meta">Location</span>
                <br />
                <span style={{ color: 'var(--ink)', fontWeight: 600 }}>{PROFILE.location}</span>
              </li>
            </ul>
            <form className="form-grid" onSubmit={onSubmit} noValidate={false}>
              <label>
                Name
                <input name="name" autoComplete="name" required placeholder="Your full name" />
              </label>
              <label>
                Organization
                <input name="org" autoComplete="organization" placeholder="Company / team (optional)" />
              </label>
              <label>
                Project or hiring context
                <select name="context" defaultValue="EPC / project scope">
                  <option>EPC / project scope</option>
                  <option>Costing / estimation support</option>
                  <option>Documentation / engineering support</option>
                  <option>Full-time role</option>
                  <option>Other collaboration</option>
                </select>
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Scope, timeline, location, and what success looks like…"
                />
              </label>
              <button className="btn btn-primary" type="submit">
                Compose email
              </button>
              <p className="form-status" role="status" aria-live="polite">
                {status}
              </p>
              <p className="meta" style={{ textTransform: 'none', letterSpacing: 0 }}>
                First release uses a mailto flow — no data is stored on this site. A
                server-side form with spam protection can be added later.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div>
          <strong>Vijayakumar Aathipazham</strong>
          <br />
          Project Engineer — Costing, Estimation &amp; EPC Execution · Chennai, India
        </div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${PROFILE.email}`}>Email</a>
          <a href={RESUME_URL} download="Vijayakumar_Aathipazham_Resume.pdf">
            Resume
          </a>
          <a href="#overview">Back to top ↑</a>
        </div>
        <div className="meta" style={{ color: '#8fa3a8', width: '100%' }}>
          © 2026 Vijayakumar Aathipazham · Available for project &amp; full-time conversations
          · Client names shown per resume — confirm publication permission
        </div>
      </div>
    </footer>
  );
}
