import { Navigation, Hero, Experience, Skills, Projects, Contact } from './components';

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Navigation />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
