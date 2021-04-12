import './App.scss';
import Header from './Component/Header';
import Recipe from './Component/Recipe';
import Sidebar from './Component/Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content">
        <Sidebar/>
        <Recipe/>
      </div>
    </div>
  );
}

export default App;
