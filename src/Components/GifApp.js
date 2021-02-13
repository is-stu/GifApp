import React, { useState } from 'react';
import { AddCategory } from './AddCategory';

export function GifApp() {
  const [categories, setCategories] = useState([
    'Naruto',
    'Dragon Ball',
    'BB theory',
  ]);

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
          <li key={category}>{category}</li>
        ))}
      </ol>
    </div>
  );
}
