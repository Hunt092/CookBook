import './App.scss';
import Header from './Component/Header';
import Hero from './Component/Hero';
import Sidebar from './Component/Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content">
        <Sidebar/>
        <Hero/>
      </div>
    </div>
  );
}

export default App;
