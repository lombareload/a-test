import React, { useEffect, useState } from 'react';
import './Add.scss';
import Dropdown from '../dropdown/Dropdown';

const amount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function Add({productId, setSku, setQuantity, quantity}) {
  let [availables, setAvailables] = useState([]);
  let [size, setSize] = useState();

  useEffect(() => {
    if (productId) {
      async function checkAvailability() {
        let response = await fetch(`/api/products/${productId}/availability`);
        if (response.ok) {
          let json = await response.json();
          let availFilter = json.availability_status;
          let availableSizes = json.variation_list
            .filter(size => size.availability_status === availFilter)
            .map(size => ({text: size.size, value: size.sku}));
          setAvailables(availableSizes);
        }
      }
      checkAvailability();
    }
  }, [productId]);

  function updateOrder(value) {
    setSku(value.value);
    setSize(value);
  }

  return (
    <div className="add">
      <div className="size">
        <Dropdown items={availables} value={size === undefined ? 'SELECT SIZE' : size} setValue={updateOrder} multiColumn="true" />
      </div>
      <div className="quantity">
        <Dropdown items={amount} value={quantity} setValue={setQuantity} />
      </div>
    </div>
  );
}

export default Add;