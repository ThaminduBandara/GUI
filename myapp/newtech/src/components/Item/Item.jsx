// import React from 'react'
// import './item.css'

// export default function Item() {
//   return (
//     <div className='full'>
//         <div className='middle'>

//             <div className='frame'>
//               <div className='image'>

//               </div>

//             </div>

//             <div className='mid-para'>
//                 <div className='name'>Mac Book</div>

               
//                 <div className='price'>Rs.500000.00</div>

                
//             </div>

//             <div className='btns'>
//                 <div className='stock'>In Stock</div>

//                 <div className='buy'>
                    
//                         <button className='btn-1'>Buy Now</button>
//                 </div>
                    
//                 <div className='add'>
//                         <button className='btn-2'>Add to cart</button>
//                 </div>
                    
                

                

//             </div>
//         </div>
      
//     </div>
//   )
// }


import React from 'react';
import './item1.css';

export default function Item(props) {
  const handleBuyNow = () => {
    alert('Redirecting to the purchase page...');
  };

  const handleAddToCart = () => {
    alert('Item added to cart!');
  };
// const Item= (props) => {
  

  return (
    <div className='full'>
      <div className='middle'>
        <div className='frame'>
          <div className='image'>
            <img className='img-t' src={props.image} alt="" />
            <div className='overlay'>View More</div>
          </div>
        </div>

        <div className='mid-para'>
          <div className='name'>{props.name}</div>
          <div className='price'>Rs.{props.new_price}</div>
          
        </div>

        <div className='btns'>
          <div className='stock'>{props.stock}</div>
          <div className='buy'>
            <button className='btn-1' onClick={handleBuyNow}>Buy Now</button>
          </div>
          <div className='add'>
            <button className='btn-2' onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
// }