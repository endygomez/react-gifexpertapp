import React, { useState } from 'react'

import { CategoryAdd } from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';
const GifExpertApp = props => {

  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['One Punch']);

  // const handleAdd = () => {
  //   //setCategories([...categories, 'Tom y Jerry']);
  //   setCategories( cats => [ ...cats, 'Tom y Jerry' ]);
  // }



  return (
    <>
      <h2>GirfExpertApp</h2>
      <CategoryAdd setCategories={setCategories} />
      <hr />

      <ol>
        {
          categories.map(category => (
            <GifGrid
              key={ category }
              category={category} />
          ))
        }
      </ol>
    </>
  )
}

export default GifExpertApp;
