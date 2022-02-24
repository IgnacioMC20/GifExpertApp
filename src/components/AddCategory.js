import React, { useState } from 'react';
import PropTypes from 'prop-types';
export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (event) => {
    //   console.log(event.target.value);
      setInputValue(event.target.value);
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputValue);
      if(inputValue.trim().length > 2){
        setCategories( cats => [inputValue, ...cats]);
        setInputValue('');
      }
    }

    return (
    <form onSubmit={handleSubmit}>
        {/* <h2> {inputValue} </h2> */}
        <input type="text" value={inputValue} onChange={handleInputChange}/>
    </form>
    );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
};
