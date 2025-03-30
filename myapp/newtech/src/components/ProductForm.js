
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

   
    const [updateId, setUpdateId] = useState('');
    const [updateName, setUpdateName] = useState('');
    const [updateDescription, setUpdateDescription] = useState('');
    const [updatePrice, setUpdatePrice] = useState('');
    const [updateCategory, setUpdateCategory] = useState('');
    const [updateStock, setUpdateStock] = useState('');
    const [updateImage, setUpdateImage] = useState(null);

  
    const [deleteId, setDeleteId] = useState('');

    
    const handleAddProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('stock', stock);
        if (image) formData.append('image', image);

        try {
            await axios.post('http://localhost:5000/products', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            alert('Product added successfully');
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    // Fetch product details by ID
    const fetchProductDetails = async () => {
        if (!updateId) {
            alert("Please enter a product ID.");
            return;
        }
        try {
            const response = await axios.get(`http://localhost:5000/products/${updateId}`);
            const product = response.data;

            setUpdateName(product.name);
            setUpdateDescription(product.description);
            setUpdatePrice(product.price);
            setUpdateCategory(product.category);
            setUpdateStock(product.stock);
        } catch (error) {
            console.error('Error fetching product:', error);
            alert("Product not found!");
        }
    };

  
    const handleUpdateProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', updateName);
        formData.append('description', updateDescription);
        formData.append('price', updatePrice);
        formData.append('category', updateCategory);
        formData.append('stock', updateStock);
        if (updateImage) formData.append('image', updateImage);

        try {
            await axios.put(`http://localhost:5000/products/${updateId}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            alert('Product updated successfully');
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    
    const handleDeleteProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:5000/products/${deleteId}`);
            alert('Product deleted successfully');
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className='product-form-container'>
            {/* Add Product Section */}
            <div className='product-section'>
                <h2>Add Product</h2>
                <form onSubmit={handleAddProduct}>
                    <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                    <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                    <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
                    <input type="number" placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} required />
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                    <button type="submit">Add Product</button>
                </form>
            </div>
            
            {/* Update Product Section */}
            <div className='product-section'>
                <h2>Update Product</h2>
                <form onSubmit={handleUpdateProduct}>
                    <input type="text" placeholder="Product ID" value={updateId} onChange={(e) => setUpdateId(e.target.value)} required />
                    <button type="button" onClick={fetchProductDetails}>Fetch Product</button>

                    <input type="text" placeholder="New Product Name" value={updateName} onChange={(e) => setUpdateName(e.target.value)} required />
                    <input type="text" placeholder="New Description" value={updateDescription} onChange={(e) => setUpdateDescription(e.target.value)} required />
                    <input type="number" placeholder="New Price" value={updatePrice} onChange={(e) => setUpdatePrice(e.target.value)} required />
                    <input type="text" placeholder="New Category" value={updateCategory} onChange={(e) => setUpdateCategory(e.target.value)} required />
                    <input type="number" placeholder="New Stock" value={updateStock} onChange={(e) => setUpdateStock(e.target.value)} required />
                    <input type="file" onChange={(e) => setUpdateImage(e.target.files[0])} />
                    <button type="submit">Update Product</button>
                </form>
            </div>
            
            {/* Delete Product Section */}
            <div className='product-section'>
                <h2>Delete Product</h2>
                <form onSubmit={handleDeleteProduct}>
                    <input type="text" placeholder="Product ID" value={deleteId} onChange={(e) => setDeleteId(e.target.value)} required />
                    <button type="submit">Delete Product</button>
                </form>
            </div>
        </div>
    );
};

export default ProductForm;


















// import React, { useState } from 'react';
// import axios from 'axios';
// import './productform.css';

// const ProductForm = () => {
//     // State for adding a product
//     const [name, setName] = useState('');
//     const [description, setDescription] = useState('');
//     const [price, setPrice] = useState('');
//     const [category, setCategory] = useState('');
//     const [stock, setStock] = useState('');
//     const [image, setImage] = useState(null);
    
//     // State for updating a product
//     const [updateId, setUpdateId] = useState('');
//     const [updateName, setUpdateName] = useState('');
//     const [updatePrice, setUpdatePrice] = useState('');
    
//     // State for deleting a product
//     const [deleteId, setDeleteId] = useState('');

//     // Handle adding a product
//     const handleAddProduct = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('name', name);
//         formData.append('description', description);
//         formData.append('price', price);
//         formData.append('category', category);
//         formData.append('stock', stock);
//         if (image) formData.append('image', image);

//         try {
//             await axios.post('http://localhost:5000/products', formData, {
//                 headers: { 'Content-Type': 'multipart/form-data' }
//             });
//             alert('Product added successfully');
//         } catch (error) {
//             console.error('Error adding product:', error);
//         }
//     };

//     // Handle updating a product
//     const handleUpdateProduct = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.put(`http://localhost:5000/products/${updateId}`, {
//                 name: updateName,
//                 price: updatePrice
//             });
//             alert('Product updated successfully');
//         } catch (error) {
//             console.error('Error updating product:', error);
//         }
//     };


//     // const handleUpdateProduct = async (e) => {
//     //     e.preventDefault();
//     //     try {
//     //         await axios.put(`http://localhost:5000/products/${updateId}`, {
//     //             name: name,
//     //             description: description,
//     //             price: price,
//     //             category: category,
//     //             stock: stock
//     //         });
//     //         alert('Product updated successfully');
//     //     } catch (error) {
//     //         console.error('Error updating product:', error);
//     //     }
//     // };
    

//     // Handle deleting a product
//     const handleDeleteProduct = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.delete(`http://localhost:5000/products/${deleteId}`);
//             alert('Product deleted successfully');
//         } catch (error) {
//             console.error('Error deleting product:', error);
//         }
//     };

//     return (
//         <div className='product-form-container'>
//             {/* Add Product Section */}
//             <div className='product-section'>
//                 <h2>Add Product</h2>
//                 <form onSubmit={handleAddProduct}>
//                     <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} required />
//                     <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
//                     <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
//                     <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
//                     <input type="number" placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} required />
//                     <input type="file" onChange={(e) => setImage(e.target.files[0])} />
//                     <button type="submit">Add Product</button>
//                 </form>
//             </div>
            
//             {/* Update Product Section */}
//             <div className='product-section'>
//                 <h2>Update Product</h2>
//                 <form onSubmit={handleUpdateProduct}>
//                     <input type="text" placeholder="Product ID" value={updateId} onChange={(e) => setUpdateId(e.target.value)} required />
//                     <input type="text" placeholder="New Product Name" value={updateName} onChange={(e) => setUpdateName(e.target.value)} required />
//                     <input type="number" placeholder="New Price" value={updatePrice} onChange={(e) => setUpdatePrice(e.target.value)} required />
//                     <button type="submit">Update Product</button>
//                 </form>
//             </div>
            
//             {/* Delete Product Section */}
//             <div className='product-section'>
//                 <h2>Delete Product</h2>
//                 <form onSubmit={handleDeleteProduct}>
//                     <input type="text" placeholder="Product ID" value={deleteId} onChange={(e) => setDeleteId(e.target.value)} required />
//                     <button type="submit">Delete Product</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default ProductForm;

















