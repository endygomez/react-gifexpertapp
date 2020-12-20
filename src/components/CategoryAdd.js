import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const CategoryAdd = ( { setCategories } ) => {
  
  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if ( inputValue.trim().length > 2 ) {
      setCategories( categories => [ inputValue, ...categories ]);
      setInputValue('');
    }

  }

  return (
    <form onSubmit={ handleSubmit }>
      <input
        name="inputValue"
        onChange={ handleInputChange }
        type="text"
        value={ inputValue }
      />
    </form>
  )
}

CategoryAdd.propTypes = {
  setCategories: PropTypes.func.isRequired
}