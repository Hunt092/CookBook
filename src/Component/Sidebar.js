import React from 'react'
import RecipeList from './SearchBarComponents/RecipeList';
import SearchBar from './SearchBarComponents/Searchbar';

const Sidebar = ({input,setInput, currentRecipeList, setRecipeList ,RecipeListDefault,selectRecipe, position }) => {
    

    const updateInput = async (input) => {
        const filtered = RecipeListDefault.filter(recipe => {
            return recipe.title.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setRecipeList(filtered);
    }

   
    return (
        <aside className={"side__menu " +position}>

            <div className="search">
                <SearchBar
                    input={input}
                    setKeyword={updateInput}
                />
                <RecipeList List={currentRecipeList} selectRecipe={selectRecipe} />
            </div>
        </aside>
    )
}

export default Sidebar
