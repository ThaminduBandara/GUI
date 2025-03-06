import React, { useState } from 'react';
import axios from 'axios';
import './productform.css';

const ProductForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState('');
    const [image, setImage] = useState(null);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('stock', stock);
        if (image) formData.append('image', image);

        try {
            const response = await axios.post('http://localhost:5000/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Product added:', response.data);
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <div className='product-form-full'>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Stock Quantity"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    required
                />
                <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default ProductForm;
