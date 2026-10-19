import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';

function ProductDetail() {
    const { id } = useParams();
    const product = products.find((item) => item.id === Number(id));
    if (!product) {
        return (
            <div>
                <h2>Không tìm thấy sản phẩm có ID: {id}</h2>
                <Link to={"/products"}>&larr; Quay lại danh sách </Link>
            </div>
        );
    }
    return (
        <div>
            <h1>Product Detail</h1>
            <p>ID: {id}</p>
            <p>Danh mục: {product.category}</p>
            <p>Giá: {product.price}</p>
            <p>Mô tả: {product.description}</p>
            <Link to={"/products"}>&larr; Quay lại danh sách </Link>
        </div>
    )
}

export default ProductDetail