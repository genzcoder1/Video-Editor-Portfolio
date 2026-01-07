import { Hero } from './components/Hero';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Services } from './components/Services';
import { ReelShowcase } from './components/ReelShowcase';
import { Process } from './components/Process';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="bg-black overflow-x-hidden">
      <Hero />
      <About />
      <Expertise />
      <Services />
      <ReelShowcase />
      <Process />
      <Timeline />
      <Contact />
    </div>
  );
}
