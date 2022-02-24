import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './GifGrid';
export const GiExpertApp = () => {
  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['One Punch']);
  const handleAdd = () => {
    // setCategories([...categories, 'Shingeki']);
    setCategories( cats => [...cats, 'Shingeki']);
  }
  return (
    <div>
      <h2>GifExpertApp</h2>
      <hr/>
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <AddCategory setCategories={ setCategories }/>
      <ol>
        { categories.map( category => <GifGrid key={category} category={category}/>
        ) }
      </ol>
    </div>
  );
};

export default GiExpertApp;