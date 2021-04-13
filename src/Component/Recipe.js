import React from 'react'
import Content from './RecipeComponent/Content'

const Recipe = ({title, author, image, ingredients,steps,preptime}) => {
    console.log(image);
    return (
        <main className="recipe">

            <Content recipename={title} author={author} ingredients={ingredients} steps={steps} preptime={preptime} />
            <div className="recipe__image">
                <img src={image ? image: " "} alt={title} />

            </div>
        </main>
    )
}

export default Recipe
