import  {React , useState} from 'react';
import ProductsGrid from './ProductsGrid';
import AddProduct from './AddProduct';

const Products = () => {
    const [addProductClicked, setAddProductClicked] = useState(false);
    
    function handleAddProduct() {
        setAddProductClicked(true);
    }
    const handleClose=()=>{
        setAddProductClicked(false);
    }

    return (
        <>
            <div>
                <div className='productHeader'>
                    <h2>Productos</h2>
                    <button onClick={handleAddProduct}>Add new product</button>
                </div>
                
                <ProductsGrid />
                {addProductClicked && <AddProduct closeOnClick={handleClose}/>}
            </div>
        </>
    );
}

export default Products;
