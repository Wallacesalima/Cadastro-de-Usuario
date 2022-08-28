import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

// Definindo que serão componentes funcionais

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar depois */}
            {/* Exemplo: criar o nav items */}
            <Link to="/">
                <i className='fa fa-home '></i>  Inicio
            </Link>
            <Link to="/users">
                <i className='fa fa-users '></i>  Usuários
            </Link>
        </nav>
    </aside>