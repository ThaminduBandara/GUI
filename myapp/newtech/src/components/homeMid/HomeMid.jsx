import React from 'react'
import './homemid.css'
import Item from '../Item/Item'

const HomeMid = () => {
  return (
    <div className='homemid'>
      <h1>TRENDING NOW</h1>
      <hr/>
      <div className="homemid-item">
         <Item />
        </div>
  
    </div>
  )
}

export default HomeMid