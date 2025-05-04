import './App.css';
import AnimatedBackground from './components/Background';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <AnimatedBackground />
      <Nav/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
    </div>
  );
}

export default App;
