import React from 'react';
import '../CSS/GifCollectionItem.css'

export const GifCollectionItem = ({ id, title, url }) => {
  //   console.log({ id, title, url });

  return (
    <div className='card'>
      <img src={url} alt={title} className='img' />
      <p> {title} </p>
    </div>
  );
};
