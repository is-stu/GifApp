import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories, categories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories([...categories, inputValue]);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={inputValue} onChange={handleChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
