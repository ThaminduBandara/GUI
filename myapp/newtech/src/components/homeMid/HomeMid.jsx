import React from 'react'
import './homemid.css'
import data_product from '../Assets/data/data'
import Item from '../Item/Item'

const HomeMid = () => {
  return (
    <div className='homemid'>
      <h1>TRENDING NOW</h1>
      <hr />
      <div className="homemid-item">
        {data_product.map((item,i)=>{
            return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.stock}/>
        })}
        </div>
  
    </div>
  )
}

export default HomeMid