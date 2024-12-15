import React, { useState } from 'react';
import './home.css';
import Header from '../../component/Header/Header';
import ExploreMenu from '../../component/ExploreMenu/ExploreMenu';
import Food_display from '../../component/FoodDisplay/Food_display';

const Home = () => {
  const [catogery, setCatogery] = useState("All"); // Fixed typo in variable name

  return (
    <div>
      <Header />
      <ExploreMenu catogery={catogery} setCatogery={setCatogery} /> {/* Fixed setCatogery */}
      <Food_display category={catogery} /> {/* Ensure prop name matches */}
    </div>
  );
};

export default Home;
