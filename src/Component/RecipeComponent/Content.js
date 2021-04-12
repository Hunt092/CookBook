import React from 'react'
import Ingredient from './Ingredient'
import Steps from './Steps'

const Content = () => {
    return (
        <div className="recipe__content">
            <div className="titleContainer">
                <h2 className="title">
                    recipe name
                </h2>
                <h3 className="author">
                    Author name
                </h3>
            </div>
            <Ingredient />
            <Steps />
        </div>
    )
}

export default Content
