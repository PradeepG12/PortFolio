import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
