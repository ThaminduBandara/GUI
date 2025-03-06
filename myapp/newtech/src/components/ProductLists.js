import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
        <div>
            <h2>Product Catalog</h2>
            <div>
                {products.length > 0 ? (
                    products.map(product => (
                        <div key={product.id}>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                            {product.image_url && (
                                <img
                                    src={product.image_url}
                                    alt={product.name}
                                    width="150"
                                />
                            )}
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
