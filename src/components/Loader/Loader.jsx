import React from 'react'
import { Ring } from '@uiball/loaders'
import './Loader.css'


function Loader() {
  return (
    <div className='load'>
      <Ring 
      size={40}
      lineWeight={5}
      speed={2} 
      color="#00bbf9" 
      
      />
    </div>

  )
}

export default Loader