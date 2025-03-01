import React from 'react'
import './nvgBar.css'

export default function NvgBar() {
  return (
    
      <div className="nvgBar">


        <div className='left'>
            <div className='name'>NEW TECH</div>
            <div className='item-1'>HOME</div>
            <div className='item-1'>CATEGORIES</div>
            <div className='item-1'>REGISTER</div>
            <div className='item-1'>CONTACT US</div>
            
        </div>


        <div className='right'>



          <div className='search'>
            <div className='item-3'>
              <input className='type-box'  type="text" />
            </div>
            <div className='item-4'>
              <button className='btn'>SEARCH</button>
            </div>
            
          </div>

            <div className='other'>
              <div className='item-2'>ADVANCED</div>
              <div className='item-2'>LOG IN</div>
            </div>
            
            
        </div>
        
        
        
      </div>
    
  )
}
