import React from 'react'
import './item.css'

export default function Item() {
  return (
    <div className='full'>
        <div className='middle'>

            <div className='frame'>
              <div className='image'>

              </div>

            </div>

            <div className='mid-para'>
                <div className='name'>Mac Book</div>

               
                <div className='price'>Rs.500000.00</div>

                
            </div>

            <div className='btns'>
                <div className='stock'>In Stock</div>

                <div className='buy'>
                    
                        <button className='btn-1'>Buy Now</button>
                </div>
                    
                <div className='add'>
                        <button className='btn-2'>Add to cart</button>
                </div>
                    
                

                

            </div>
        </div>
      
    </div>
  )
}
