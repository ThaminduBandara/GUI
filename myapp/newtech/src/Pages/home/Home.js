import React from 'react'

import './home.css'

import Displaypct from '../../components/displaypct/Displaypct'

import HomeMid from '../../components/homeMid/HomeMid'



export default function Home() {

  // const bottomRef = useRef(null);
  return (


    
  <>
    <div className='home'>


      <div className="middle-container">

        <div className='disPct'>
          <Displaypct/>
        </div>
    
        <div className='mid-items'>
          <HomeMid/>
        </div>
      </div>

    
        
     </div> 
      
     </> 
       
    
  )
}
