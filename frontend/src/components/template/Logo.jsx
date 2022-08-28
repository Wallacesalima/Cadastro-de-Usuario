import './Logo.css'
import logo from '../../assets/imgs/logo2.png'
import React from 'react'
import { Link } from 'react-router-dom'

// Definindo que serão componentes funcionais

export default props =>
    <aside className='logo'>
        <Link to="/" className="logo">
            <img src={logo} alt="logo"/>
        </Link>
    </aside>
