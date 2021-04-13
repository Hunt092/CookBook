import React from 'react'

const Ingredient = ({ingredients}) => {
    return (
        <div className="ingredients">
            <h3 className="subtitle">
                Ingredients
            </h3>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient}</li>
                ))}
            </ol>
        </div>
    )
}

export default Ingredient
