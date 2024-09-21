import { useState } from 'react'

function NavBar() {

    return (
        <nav>
            <div className="logo">
                <img src='./src/images/logo.svg'/>
            </div>
            <div>            
                <ul>
                    <li><a href='#'>Collections</a></li>
                    <li><a href='#'>Men</a></li>
                    <li><a href='#'>Women</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </div>

        </nav>
    )
}

export default NavBar
