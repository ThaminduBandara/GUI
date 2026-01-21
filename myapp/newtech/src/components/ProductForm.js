import React, { useState } from 'react';
import axios from 'axios';
import {
    Box,
    TextField,
    Button,
    Typography,
    Paper,
    Grid,
    Container,
    IconButton,
    Alert,
    Snackbar
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
//import './productform.css';

// Styled components
const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    margin: theme.spacing(2, 0),
    borderRadius: '12px',
}));

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

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success'
    });

    // Handle snackbar close
    const handleSnackbarClose = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    // Modified handlers with snackbar feedback
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
            await axios.post('http://localhost:5001/products', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setSnackbar({
                open: true,
                message: 'Product added successfully!',
                severity: 'success'
            });
            // Clear form
            setName('');
            setDescription('');
            setPrice('');
            setCategory('');
            setStock('');
            setImage(null);
        } catch (error) {
            setSnackbar({
                open: true,
                message: 'Error adding product',
                severity: 'error'
            });
        }
    };

    const fetchProductDetails = async () => {
        if (!updateId) {
            setSnackbar({
                open: true,
                message: 'Please enter a product ID.',
                severity: 'warning'
            });
            return;
        }
        try {
            const response = await axios.get(`http://localhost:5001/products/${updateId}`);
            const product = response.data;

            setUpdateName(product.name);
            setUpdateDescription(product.description);
            setUpdatePrice(product.price);
            setUpdateCategory(product.category);
            setUpdateStock(product.stock);
        } catch (error) {
            setSnackbar({
                open: true,
                message: 'Product not found!',
                severity: 'error'
            });
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
            await axios.put(`http://localhost:5001/products/${updateId}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setSnackbar({
                open: true,
                message: 'Product updated successfully!',
                severity: 'success'
            });
        } catch (error) {
            setSnackbar({
                open: true,
                message: 'Error updating product',
                severity: 'error'
            });
        }
    };

    const handleDeleteProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:5001/products/${deleteId}`);
            setSnackbar({
                open: true,
                message: 'Product deleted successfully!',
                severity: 'success'
            });
        } catch (error) {
            setSnackbar({
                open: true,
                message: 'Error deleting product',
                severity: 'error'
            });
        }
    };

    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                {/* Add Product Section */}
                <Grid item xs={12} md={6}>
                    <StyledPaper elevation={3}>
                        <Typography variant="h5" gutterBottom>
                            Add New Product
                        </Typography>
                        <Box component="form" onSubmit={handleAddProduct} sx={{ mt: 2 }}>
                            <TextField
                                fullWidth
                                label="Product Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                margin="normal"
                                required
                            />
                            <TextField
                                fullWidth
                                label="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                margin="normal"
                                multiline
                                rows={3}
                                required
                            />
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Price"
                                        type="number"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        margin="normal"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Stock"
                                        type="number"
                                        value={stock}
                                        onChange={(e) => setStock(e.target.value)}
                                        margin="normal"
                                        required
                                    />
                                </Grid>
                            </Grid>
                            <TextField
                                fullWidth
                                label="Category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                margin="normal"
                                required
                            />
                            <Button
                                component="label"
                                variant="outlined"
                                startIcon={<CloudUploadIcon />}
                                sx={{ mt: 2, mb: 2 }}
                            >
                                Upload Image
                                <VisuallyHiddenInput 
                                    type="file" 
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </Button>
                            <Box sx={{ mt: 2 }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    size="large"
                                >
                                    Add Product
                                </Button>
                            </Box>
                        </Box>
                    </StyledPaper>
                </Grid>

                {/* Update Product Section */}
                <Grid item xs={12} md={6}>
                    <StyledPaper elevation={3}>
                        <Typography variant="h5" gutterBottom>
                            Update Product
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                            <TextField
                                fullWidth
                                label="Product ID"
                                value={updateId}
                                onChange={(e) => setUpdateId(e.target.value)}
                                required
                            />
                            <Button
                                variant="contained"
                                onClick={fetchProductDetails}
                                startIcon={<SearchIcon />}
                            >
                                Fetch
                            </Button>
                        </Box>
                        <Box component="form" onSubmit={handleUpdateProduct} sx={{ mt: 2 }}>
                            <TextField
                                fullWidth
                                label="New Product Name"
                                value={updateName}
                                onChange={(e) => setUpdateName(e.target.value)}
                                margin="normal"
                                required
                            />
                            <TextField
                                fullWidth
                                label="New Description"
                                value={updateDescription}
                                onChange={(e) => setUpdateDescription(e.target.value)}
                                margin="normal"
                                multiline
                                rows={3}
                                required
                            />
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="New Price"
                                        type="number"
                                        value={updatePrice}
                                        onChange={(e) => setUpdatePrice(e.target.value)}
                                        margin="normal"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="New Stock"
                                        type="number"
                                        value={updateStock}
                                        onChange={(e) => setUpdateStock(e.target.value)}
                                        margin="normal"
                                        required
                                    />
                                </Grid>
                            </Grid>
                            <TextField
                                fullWidth
                                label="New Category"
                                value={updateCategory}
                                onChange={(e) => setUpdateCategory(e.target.value)}
                                margin="normal"
                                required
                            />
                            <Button
                                component="label"
                                variant="outlined"
                                startIcon={<CloudUploadIcon />}
                                sx={{ mt: 2, mb: 2 }}
                            >
                                Upload New Image
                                <VisuallyHiddenInput 
                                    type="file" 
                                    onChange={(e) => setUpdateImage(e.target.files[0])}
                                />
                            </Button>
                            <Box sx={{ mt: 2 }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    size="large"
                                >
                                    Update Product
                                </Button>
                            </Box>
                        </Box>
                    </StyledPaper>
                </Grid>

                {/* Delete Product Section */}
                <Grid item xs={12}>
                    <StyledPaper elevation={3}>
                        <Typography variant="h5" gutterBottom>
                            Delete Product
                        </Typography>
                        <Box component="form" onSubmit={handleDeleteProduct} sx={{ mt: 2 }}>
                            <TextField
                                fullWidth
                                label="Product ID"
                                value={deleteId}
                                onChange={(e) => setDeleteId(e.target.value)}
                                margin="normal"
                                required
                            />
                            <Box sx={{ mt: 2 }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    size="large"
                                    color="error"
                                >
                                    Delete Product
                                </Button>
                            </Box>
                        </Box>
                    </StyledPaper>
                </Grid>
            </Grid>

            {/* Snackbar for feedback */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
            >
                <Alert 
                    onClose={handleSnackbarClose} 
                    severity={snackbar.severity}
                    sx={{ width: '100%' }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default ProductForm;

















