import SiteHeader from './components/SiteHeader';
import { HeroIdentity, SectionLabel } from './components/HeroIdentity';
import { DrawingJourney } from './components/DrawingJourney';
import { Capabilities } from './components/Capabilities';
import { Evidence, Experience, Projects, Tools } from './components/Sections';
import { AboutContact, SiteFooter } from './components/AboutContact';

function App() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <HeroIdentity />
        <DrawingJourney />
        <Capabilities />
        <Projects />
        <Evidence />
        <Experience />
        <Tools />
        <AboutContact />
        <section className="section compliance-note" aria-labelledby="compliance-title">
          <div className="wrap">
            <SectionLabel index="09" label="Publication note" />
            <h2 id="compliance-title">Names remain subject to approval</h2>
            <p>
              Company and client names appear as supplied in the resume for review purposes.
              Before publication, confirm the current employer permits public use of the
              company name and that each client name may be displayed. Where permission is
              uncertain, replace the name with a sector and scope while retaining the
              technical evidence.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
