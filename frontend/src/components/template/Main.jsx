import './Main.css'
import Header from './Header'
import React from 'react'

// Definindo que serão componentes funcionais
// Recebendo propriedades (props)
export default props =>
    <React.Fragment>
        {/* Propagando as propriedades recebidas (props) para o Header */}
        <Header {...props} />
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>

