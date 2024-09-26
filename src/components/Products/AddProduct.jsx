import React, { useState } from 'react';

const AddProduct = ({closeOnClick}) => {
    const [newProductName, setNewProductName] = useState("");
    const [newProductDescription, setNewProductDescription] = useState("");
    const [newProductCategory, setNewProductCategory] = useState("");
    const [newProductSubcategory, setNewProductSubcategory] = useState("");
    const [newProductImage, setNewProductImage] = useState(null); // Almacena el archivo de imagen

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='newProductModalContainer'>
            <div className='newProductForm'>
                <form onSubmit={handleSubmit}>
                    <div className='newProductFormField'>
                        <label>Name</label>
                        <input 
                            type="text" 
                            value={newProductName} 
                            onChange={(e) => setNewProductName(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className='newProductFormField'>
                        <label>Description</label>
                        <input 
                            type="text" 
                            value={newProductDescription} 
                            onChange={(e) => setNewProductDescription(e.target.value)} 
                        />
                    </div>
                    <div className='newProductFormField'>
                        <label>Category</label>
                        <input 
                            type="text" 
                            value={newProductCategory} 
                            onChange={(e) => setNewProductCategory(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className='newProductFormField'>
                        <label>Subcategory</label>
                        <input 
                            type="text" 
                            value={newProductSubcategory} 
                            onChange={(e) => setNewProductSubcategory(e.target.value)} 
                        />
                    </div>
                    <div className='newProductFormField'>
                        <label>Image</label>
                        <input 
                            type="file" 
                            onChange={(e) => setNewProductImage(e.target.files[0])} 
                        />
                    </div>
                    <button type="submit">Add Product</button> {/* Botón para enviar el formulario */}
                </form>
            </div>
            <button onClick={closeOnClick}>X</button>
        </div>
    );
};

export default AddProduct;
