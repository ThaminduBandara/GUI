import React from 'react'
import './home.css'
import NvgBar from '../../components/naveBar/NvgBar'
import Displaypct from '../../components/displaypct/Displaypct'
import Footerr from '../../components/footer/Footerr'
import Item from '../../components/Item/Item'



export default function Home() {
  return (
  <>

  <div className='top-container'>
    <NvgBar/>
  </div>
      

      <div className="middle-container">

        <div className='disPct'>
          <Displaypct/>
        </div>
    
        <div className='mid-items'>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
        </div>
      </div>

      <div className='footer-last'>
        <Footerr/>
      </div>
        
      
      
     </> 
    
      

      
      
      
    
  )
}
