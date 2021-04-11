import React from 'react';
import "./styles.css"

const Home = () => (
  <div className="Home-conteiner">
    <div className="Home-content">
      <h1 className="Home-content-title">
        Desafio do Capítulo 3, <br />
        Bootcamp DevSuperior
      </h1>
      <p className="Home-content-subtitle">
        Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.
      </p>
      <p className="Home-content-subtitle">
        Favor observar as instruções passadas no capítulo sobre a  <br />
        elaboração deste projeto.
      </p>
      <p className="Home-content-subtitle">
        Este design foi adaptado a partir de Ant Design System for Figma, de  <br />
        Mateusz Wierzbicki: <a href="mailto:antforfigma@gmail.com">antforfigma@gmail.com</a>
      </p>
      <form action="/Search">
          <button className="btn-icon">Começar</button>
      </form>
      {/*}
      <Link to="/Search">
        <ButtonIcon text="Começar" />
      </Link>
      */}
    </div>
  </div>
);

export default Home;
