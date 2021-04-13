import React from 'react'

const Steps = ({steps}) => {
    return (
        <div className="steps">
            <h3 className="subtitle">
                Recipe
            </h3>
            <ul>
                {steps.split('.').map(step =>(
                    <li>
                    <p>
                        {step}.
                    </p>
                </li>
                ))}
                
            </ul>
        </div>
    )
}

export default Steps
