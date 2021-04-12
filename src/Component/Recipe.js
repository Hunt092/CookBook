import React from 'react'
import Content from './RecipeComponent/Content'

const Recipe = () => {
    return (
        <main className="recipe">

            <Content />
            <div className="recipe__image">
                <img src="https://images.unsplash.com/photo-1574484284002-952d92456975?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" />

            </div>
        </main>
    )
}

export default Recipe
