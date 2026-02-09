import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';

const About = lazy(() => import('./components/About'));
const Research = lazy(() => import('./components/Research'));
const Services = lazy(() => import('./components/Services'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));
const Experience = lazy(() => import('./components/Experience'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="w-8 h-8 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <About />
        <Research />
        <Services />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Testimonials />
        <Contact />
      </Suspense>
      <Footer />
      <BackToTop />
    </div>
  );
}
