import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';

// Lazy load below-fold sections for performance
const About = React.lazy(() => import('./sections/About'));
const Skills = React.lazy(() => import('./sections/Skills'));
const Experience = React.lazy(() => import('./sections/Experience'));
const Projects = React.lazy(() => import('./sections/Projects'));
const Metrics = React.lazy(() => import('./sections/Metrics'));
const Architecture = React.lazy(() => import('./sections/Architecture'));
const Contact = React.lazy(() => import('./sections/Contact'));

const SectionLoader: React.FC = () => (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem', opacity: 0.3 }}>
    <div style={{
      width: '32px', height: '32px',
      border: '2px solid var(--color-border)',
      borderTopColor: 'var(--color-accent-blue)',
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite',
    }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

const App: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg-primary)' }}>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Metrics />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Architecture />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;
