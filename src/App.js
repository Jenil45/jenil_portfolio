import './App.css';
import {Navbar , Home , Project , Services , Skills  , Contact , Education } from './Components/Pages';
import Intro from './Components/Pages/Intro';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Home />
      <Intro />
      <Services />
      <Skills />
      <Education />
      <Project />
      {/* <Achievements /> */}
      <Contact />
    </div>
  );
}

export default App;
