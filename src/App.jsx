import { Analytics } from '@vercel/analytics/react';
import {
  Banner,
  Contact,
  Experience,
  Faq,
  Footer,
  Hero,
  Intro,
  Navbar,
  ProjectTabs,
  Services,
  Stack,
  Testimonials,
} from './components';
import { AiProjects, projects } from './constants';
import usePageEffects from './hooks/usePageEffects';

const App = () => {
  usePageEffects();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Banner />
        <ProjectTabs
          id='work'
          tag='My work'
          title='Real builds, real results'
          description='Web and mobile products for startups, agencies and local businesses, designed and built to be fast, responsive and easy to use.'
          projects={projects}
        />
        <ProjectTabs
          id='ai'
          tag='AI & research'
          title='Models that ship'
          description='From speech analysis in a production learning app to deep learning research on medical imaging and image captioning.'
          projects={AiProjects}
        />
        <Stack />
        <Experience />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </>
  );
};

export default App;
