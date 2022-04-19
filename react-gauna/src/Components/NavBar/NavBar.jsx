import React from 'react';
import './NavBar.css';

function NavBar(props) {
    return (
        <div>
            
            <ul className='nav'>
            <li className='logo'>Hard Gamer Rosario</li>
                <a href='#'>Inicio</a>
                <a href='#'>Nosotros</a>
                <a href='#'>Productos</a>
            </ul>
        </div>
    );
}

export default NavBar;