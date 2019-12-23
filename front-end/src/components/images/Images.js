import React, { useState } from 'react';
import './Images.scss';

function Images ({images = []}) {
  let [index, setIndex] = useState(0);
  return (
    <div className="image-viewer">
      <div className="image-strip">
        {images.slice(0, 8).map((image, i) =>
          <img className={`thumbnail${index === i ? ' selected' : ''}`} onClick={() => setIndex(i)} key={i} alt="Thumbnail" src={image.image_url} />
        )}
      </div>
      <div className="image-main">
        {images.length && <img src={images[index].image_url} alt="Main"/>}
      </div>
    </div>
  );
}

export default Images;