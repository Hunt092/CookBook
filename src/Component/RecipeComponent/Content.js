import React from 'react'
import Ingredient from './Ingredient'
import Steps from './Steps'

const Content = ({ recipename, author, ingredients, steps, preptime }) => {
    return (
        <div className="recipe__content">
            <div className="titleContainer">
                <h2 className="title">
                    {recipename}
                </h2>
                <h3 className="author">
                    {author}
                </h3>
            </div>
            <Ingredient ingredients={ingredients} />
            <Steps steps={steps} />
        </div>
    )
}

export default Content
