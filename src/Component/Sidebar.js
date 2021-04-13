import React from 'react'
import RecipeList from './SearchBarComponents/RecipeList';
import SearchBar from './SearchBarComponents/Searchbar';

const Sidebar = ({input,setInput, currentRecipeList, setRecipeList ,RecipeListDefault,selectRecipe }) => {
    

    const updateInput = async (input) => {
        const filtered = RecipeListDefault.filter(country => {
            return country.name.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setRecipeList(filtered);
    }

   
    return (
        <aside className="side__menu">

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
