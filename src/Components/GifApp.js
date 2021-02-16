import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifCollection } from './GifCollection';

export function GifApp() {
  const [categories, setCategories] = useState(['Rick & Morty']);

  //   const handleAdd = (e) => {
  //     e.preventDefault();
  //     setCategories([...categories, 'otro']);
  //   };

  return (
    <div>
      <h2>GifApp</h2>
      <AddCategory setCategories={setCategories} categories={categories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifCollection category={category} key={category} />
        ))}
      </ol>
    </div>
  );
}
