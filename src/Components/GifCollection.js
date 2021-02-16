import React, { useEffect, useState } from 'react';
import { GifCollectionItem } from './GifCollectionItem';
import '../CSS/GifCollection.css';

export const GifCollection = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=LTFMP1Xw9xadj7IIELLcsj2zD65TAOhB`;
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    // console.log(gifs);
    setImages(gifs);
  };

  return (
    <>
      <h3>{category}</h3>
      <div className='cardsContainer'>
        {images.map((img) => (
          <GifCollectionItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
