import React from 'react'

const RecipeList = ({ List = [] }) => {
    return (
        <ol className="search__results">
            {
                List.map((data, index) => {
                    if (data) {
                        return (
                            <li key={data.name}>
                                <p>{data.name}</p>
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
