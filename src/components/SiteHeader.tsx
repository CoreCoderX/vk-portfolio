import { useEffect, useState } from 'react';
import { NAV, PROFILE, RESUME_URL } from '../data/content';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${compact ? ' compact' : ''}`}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="wrap header-inner">
        <a className="brand" href="#overview" aria-label="Vijayakumar Aathipazham — home">
          <strong>Vijayakumar Aathipazham</strong>
          <span>Project Eng · Costing · EPC</span>
        </a>
        <nav className="nav-desktop" aria-label="Primary">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a
            className="btn btn-ghost btn-small"
            href={RESUME_URL}
            download="Vijayakumar_Aathipazham_Resume.pdf"
          >
            Download resume
          </a>
          <a className="btn btn-primary btn-small" href="#contact">
            Start a conversation
          </a>
          <button
            className="menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
      <nav
        id="mobile-nav"
        className={`mobile-nav${open ? ' open' : ''}`}
        aria-label="Mobile"
      >
        {NAV.map((n) => (
          <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>
            {n.label}
          </a>
        ))}
        <a
          href={RESUME_URL}
          download="Vijayakumar_Aathipazham_Resume.pdf"
          onClick={() => setOpen(false)}
        >
          Download resume
        </a>
        <span className="meta" style={{ display: 'block', padding: '10px 4px' }}>
          {PROFILE.location}
        </span>
      </nav>
    </header>
  );
}
