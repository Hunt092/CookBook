import React from 'react'
const Hero = () => {
    return (
        <main className="hero">
            <div className="arrow_desktop">

                <svg width="427" height="211" viewBox="0 0 427 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Desktop_Arrow" d="M426 194.5L420.829 195.875C256.585 239.56 84.7628 158.523 14.0003 4.00002V4.00002M14.0003 4.00002L73 25M14.0003 4.00002L2.50001 57.5" stroke="#550C18" stroke-width="5" stroke-miterlimit="16" />
                </svg>


            </div>
            <div className="jumbotron">
                <h1>Welcome to the treasure of <span className="logo">Food</span></h1>
                <h3>Chase your Cravings</h3>
            </div>
            <div className="arrow_moblie">

                <svg width="328" height="352" viewBox="0 0 328 352" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Moblie_Arrow" d="M178.5 348V348C194.614 268.417 192.063 186.182 171.049 107.751L145.696 13.128M145.696 13.128L134.5 62M145.696 13.128L203 39" stroke="#550C18" stroke-width="6" />
                </svg>
                
            </div>
        </main>
    )
}

export default Hero
