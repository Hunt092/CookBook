import { useEffect, useState } from 'react';
import './App.scss';
import Header from './Component/Header';
import Recipe from './Component/Recipe';
import Sidebar from './Component/Sidebar';
import db from './Firebase'
function App() {
  const [recipe, setrecipe] = useState()
  const [input, setInput] = useState('');
  const [RecipeListDefault, setRecipeListDefault] = useState([]);
  const [RecipeList, setRecipeList] = useState([]);




  const getRecipes = () => {
    db
      .collection("Recipees")
      .onSnapshot(snap => {
        setRecipeListDefault(snap.docs.map(doc => ({
          id: doc.id,
          title: doc.data().title,
          author: doc.data().author,
          image: doc.data().img,
          ingredients: doc.data().ingredients,
          steps: doc.data().steps,
          preptime: doc.data().preptime
        })))
        setRecipeList(snap.docs.map(doc => ({
          id: doc.id,
          title: doc.data().title,
          author: doc.data().author,
          image: doc.data().img,
          ingredients: doc.data().ingredients,
          steps: doc.data().steps,
          preptime: doc.data().preptime
        })))
      })

  };

  const selectRecipe = (id) => {
    setrecipe(
      RecipeListDefault.filter(rec => 
         rec.id === id
      )[0]
    )
    setInput('')
    setRecipeList([])
  }
  
  useEffect(() => { getRecipes() }, []);
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Sidebar input={input} setInput={setInput} currentRecipeList={RecipeList} setRecipeList={setRecipeList} RecipeListDefault={RecipeListDefault} selectRecipe={selectRecipe} />

        {recipe ? <Recipe title={recipe.title} author={recipe.author} image={recipe.image} ingredients={recipe.ingredients} steps={recipe.steps} preptime={recipe.preptime} /> 
        :
        "no recipe"}
      </div>
    </div>
  );
}

export default App;
