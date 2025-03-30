import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './productlist.css';

const ProductLists = () => {
    const [products, setProducts] = useState([]);

    // Fetch products when the component mounts
    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div className='product-list-full'>
            <h2>Product Catalog</h2>
            <div className='product-list-mid'>
                {products.length > 0 ? (
                    products.map(product => (
                        <div className='product-list-item' key={product.id}>
                            <h2>{product.id}</h2>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                            {/* {product.image_url && ( */}
                                <img className='product-list-item-img'
                                    src={product.image_url}
                                    alt={product.name}
                                    width="150"
                                />
                            {/* )} */}
                        </div>
                    ))
                ) : (
                    <p>No products available.</p>
                )}
            </div>
        </div>
    );
};

export default ProductLists;




// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import axios from 'axios';
// import './productlist.css';

// const ProductLists = () => {
//     const [products, setProducts] = useState([]);
//     const navigate = useNavigate(); // Initialize navigation

//     // Fetch products when the component mounts
//     useEffect(() => {
//         axios.get('http://localhost:5000/products')
//             .then(response => {
//                 setProducts(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching products:', error);
//             });
//     }, []);

//     return (
//         <div className='product-list-full'>
//             <h2>Product Catalog</h2>
//             <div className='product-list-mid'>
//                 {products.length > 0 ? (
//                     products.map(product => (
//                         <div key={product.id} className="product-item">
//                             <h2>{product.id}</h2>
//                             <h3>{product.name}</h3>
//                             <p>{product.description}</p>
//                             <p>Price: ${product.price}</p>
//                             {product.image_url && (
//                                 <img
//                                     src={product.image_url}
//                                     alt={product.name}
//                                     width="150"
//                                 />
//                             )}
//                             {/* Edit Button */}
//                             <button onClick={() => navigate(`/update-product/${product.id}`)}>
//                                 Edit
//                             </button>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No products available.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ProductLists;
