import React from 'react'

import Sidebar from '../Sidebar';

const NavMenu = ({ input, setInput, currentRecipeList, setRecipeList, RecipeListDefault, selectRecipe, setToggle, isToggled }) => {
    const Toggle = () => {
        setToggle(!isToggled)
        if (!isToggled) { document.body.style.overflow = 'hidden'; }
        else {
            document.body.style.overflow = 'unset';
        }
    };

    return (
        <div className="nav__menu">
            <div onClick={Toggle} className={isToggled ?
                "hamburger active" : "hamburger"}>
                <div className="hambox">
                    <div className="hambox__inner"></div>
                </div>
            </div>
            <aside className={isToggled ?
                "menu__sidebar active" : "menu__sidebar"}>
                <Sidebar input={input} setInput={setInput} currentRecipeList={currentRecipeList} setRecipeList={setRecipeList} RecipeListDefault={RecipeListDefault} selectRecipe={selectRecipe} position="moblie" />
            </aside>
        </div>
    )
}

export default NavMenu
