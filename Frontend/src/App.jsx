import { Route, Routes } from 'react-router-dom';

import './App.css';
import AnimatedBackground from './components/Background';
import MainPage from './Pages/MainPage';
import AboutMe from './Pages/AboutMe';

function App() {
  return (
    <div className="App">
      <AnimatedBackground />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
