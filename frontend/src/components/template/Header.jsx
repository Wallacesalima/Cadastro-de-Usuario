import './Header.css'
import React from 'react'

// Definindo que serão componentes funcionais

export default props =>
// -> d-none = O header vai sumir em dispositivos mobile.
// -> d-sm-flex = irá ficar flex em dispositivos maiores que tamanho(sm).
// -> flex column = pra usar o display flex pois o padrão é rows 
    <header className="header d-none d-sm-flex flex-column">
{/* -> mt-3 = margem top 3 */}
        <h1 className="mt-3">
{/* -> fa = referencia o font-awesome  */}
{/* -> font-awesome = Font Awesomeé um kit de ferramentas
 de fontes e ícones baseado em CSS e Less. */}
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <p className="lead text-muted">{props.subtitle}</p>
    </header>