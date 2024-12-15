import React, { useRef } from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

function ExploreMenu({ catogery, setCatogery }) { // Properly destructure props
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">Choose your favorite category from the menu below!</p>
      <div className="scroll-buttons">
        <button onClick={scrollLeft}>&lt;</button>
        <button onClick={scrollRight}>&gt;</button>
      </div>
      <div className="explore-menu-list" ref={scrollContainerRef}>
        {menu_list.map((item, index) => (
          <div
            key={index}
            className={`explore-menu-list-item ${catogery === item.menu_name ? 'active' : ''}`} // Add active class conditionally
            onClick={() => setCatogery((prev) => (prev === item.menu_name ? 'All' : item.menu_name))} // Toggle category
          >
            <img
              className={catogery === item.menu_name ? 'active' : ''}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
