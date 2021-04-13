import React from 'react'

const RecipeList = ({ List = [], selectRecipe }) => {
    return (
        <ol className="search__results">
            {
                List.slice(0,22).map((data, index) => {
                    if (data) {
                        return (
                            <li key={data.id} onClick={(e)=>{selectRecipe(data.id)}}>
                                <p>{data.title}</p>
                            </li>
                        )
                    }
                    return null
                })
            }

        </ol>
    )
}

export default RecipeList
