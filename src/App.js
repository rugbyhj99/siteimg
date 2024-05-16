import './App.css';
import cook from './img/cook 1.png';
import movie from './img/movie 1.png';
import shop from './img/shop 1.png';
import weather from './img/weather 1.png';

function App() {
  return (
    <div className="App">
      <div><img src={cook}/></div>
      <div><img src={movie}/></div>
      <div><img src={shop}/></div>
      <div><img src={weather}/></div>
    </div>
  );
}

export default App;
