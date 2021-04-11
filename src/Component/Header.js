import React from 'react'
import NavBar from './NavComponents/NavBar'
import NavMenu from './NavComponents/NavMenu'


const Header = () => {
    return (
        <header>
            <a href="/">
                <h1 className="logo">CookBook</h1>
            </a>
            <nav>
                <NavBar/>
                <NavMenu/>
            </nav>
        </header>
    )
}

export default Header
