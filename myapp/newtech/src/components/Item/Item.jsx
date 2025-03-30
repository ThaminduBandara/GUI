
// import React from 'react';
// import './item1.css';

// export default function Item(props) {
//   const handleBuyNow = () => {
//     alert('Redirecting to the purchase page...');
//   };

//   const handleAddToCart = () => {
//     alert('Item added to cart!');
//   };
// // const Item= (props) => {
  

//   return (
//     <div className='full'>
//       <div className='middle'>
//         <div className='frame'>
//           <div className='image'>
//             <img className='img-t' src={props.image} alt="" />
//             <div className='overlay'>View More</div>
//           </div>
//         </div>

//         <div className='mid-para'>
//           <div className='name'>{props.name}</div>
//           <div className='price'>Rs.{props.new_price}</div>
          
//         </div>

//         <div className='btns'>
//           <div className='stock'>{props.stock}</div>
//           <div className='buy'>
//             <button className='btn-1' onClick={handleBuyNow}>Buy Now</button>
//           </div>
//           <div className='add'>
//             <button className='btn-2' onClick={handleAddToCart}>Add to Cart</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// import React from 'react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './item1.css';
import axios from 'axios';


export default function Item() {

  const navigate = useNavigate(); 
  

  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:5000/products')
        .then(response => {
            setProducts(response.data);
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
}, []);


 


  const handleBuyNow = (product) => {
    navigate('/singleProduct', { state: { product } });
  };

  const handleAddToCart = () => {
    alert('Item added to cart!');
  };



  return (


    


      products.map(product => (


    <div  key={product.id} className='full'>
      <div className='middle'>
        <div className='frame'>
          <div className='image'>
            <img className='img-t' src={product.image_url} alt="" />
            <div className='overlay'>View More</div>
          </div>
        </div>

        <div className='mid-para'>
          <div className='name'>{product.name}</div>
          <div className='price'>Rs.{product.price}</div>
        </div>

        <div className='btns'>
          <div className='stock'>{product.description}</div>
          <div className='buy'>
            <button className='btn-1' onClick={() => handleBuyNow(product)}>Buy Now</button>
          </div>
          <div className='add'>
            <button className='btn-2' onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>

))
// ) : (
//     <p>No products available.</p>
// )

// }

);

}






