import React from 'react';
import { Link } from 'react-router-dom';
import ButtonIcon from 'core/components/ButtonIcon/ButtonIcon';

const Home = () => {
  return (
    <div className="Home">
      <h1>Home page running</h1>
      <Link to="/Search" >
          <ButtonIcon text = "Começar" />
      </Link>
    </div>
  );
}

export default Home;
