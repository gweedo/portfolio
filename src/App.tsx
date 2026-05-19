import { useReveal } from './hooks/useReveal';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Work } from './components/Work';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

export function App() {
  useReveal();

  return (
    <div className="atelier">
      <Nav />
      <Hero />
      <About />
      <Work />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
