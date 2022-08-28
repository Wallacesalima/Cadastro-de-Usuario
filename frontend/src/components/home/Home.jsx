import Main from '../template/Main'
import React from "react";

// Definindo que serão componentes funcionais
// Recebendo propriedades (props)
export default props =>
// Passando propriedades (props) para o Main
<Main icon="home" title="Inicio"
    subtitle="Segundo Projeto do capitulo de React">
    <div className="display-4">Bem-Vindo!</div>
    <hr />
    <p className="mb-0">Sistema para exemplificar a construção
        de um cadastro desenvolvido em React!</p>
</Main>