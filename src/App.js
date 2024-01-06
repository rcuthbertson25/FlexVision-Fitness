import './App.css';
import Diet from './components/Diet/Diet';
import Footer from './components/Footer/Footer';
import Gym from './components/Gym/Gym';
import Hero from './components/Hero/Hero';
import Info from './components/Info/Info';
import { Reasons } from './components/Reasons/Reasons';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Reasons/>
      <Info/>
      <Gym/>
      <Diet/>
      <Footer/>
    </div>
  );
}

export default App;
