import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Shoes.scss';

function Shoes() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    async function fetchAll() {
      const response = await fetch('/api/search/taxonomy?sitePath=us&query=men-shoes');
      if (response.ok) {
        const json = await response.json();
        setItemList(json.itemList.items);
      }
    }
    fetchAll();
  }, []);
  return (
    <div className="shoe-list">
      {itemList.map(item => {
        return (
          <div className="shoe-detail" key={item.productId}>
            <Link to={item.productId}>
              <img src={item.image.src} alt="shoe"></img>
              <div className="division">
                {item.division}
              </div>
              <div className="display-name">
                {item.displayName}
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Shoes;