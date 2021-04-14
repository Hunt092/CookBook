import React from 'react'
import NavMenu from './NavComponents/NavMenu'


const Header = ({input,setInput, currentRecipeList, setRecipeList ,RecipeListDefault,selectRecipe, setToggle, isToggled }) => {
    
    
    return (
        <header>
            <a href="/">
                <h1 className="logo">CookBook</h1>
            </a>
            <nav>
                {/* <NavBar/> */}
                <NavMenu input={input} setInput={setInput} currentRecipeList={currentRecipeList} setRecipeList={setRecipeList} RecipeListDefault={RecipeListDefault} selectRecipe={selectRecipe} setToggle={setToggle} isToggled={isToggled}/>
            </nav>
        </header>
    )
}

export default Header
