function ProductModal({closeModal, productData}){
    
    return(
        <div className="modalContainer">
            <button onClick={closeModal}>X</button>
             <div>
                <h3>{productData.productName}</h3>
                <div className="productImgContainer"><img className="productImg" src={productData.productImageLink} alt="productImage" /></div>
                <h3>{productData.productDescription}</h3>
                <h3>{productData.categoryName}</h3>
                <h3>{productData.subcategoryName}</h3>
        </div>
        </div>
    )
}

export default ProductModal