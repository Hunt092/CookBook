import { useEffect, useState } from 'react';
import './App.scss';
import Header from './Component/Header';
import Recipe from './Component/Recipe';
import Sidebar from './Component/Sidebar';

function App() {
  const [recipe, setrecipe] = useState()
  const [input, setInput] = useState('');
  const [RecipeListDefault, setRecipeListDefault] = useState();
  const [RecipeList, setRecipeList] = useState();

  const fetchData = async () => {
    return await fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setRecipeList(data)
        setRecipeListDefault(data)
      });
  }

  const selectRecipe = (name) => {
    setrecipe(name);
    setInput('')
    setRecipeList([])
  }
  useEffect(() => { fetchData() }, []);
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Sidebar input={input} setInput={setInput} currentRecipeList={RecipeList} setRecipeList={setRecipeList} RecipeListDefault={RecipeListDefault} selectRecipe={selectRecipe} />
        <Recipe />
      </div>
    </div>
  );
}

export default App;
