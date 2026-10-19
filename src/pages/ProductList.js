import React from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';

function ProductList() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get("keyword") || "";
    const sort = searchParams.get("sort") || "none";

    let filterProducts = products.filter((product) =>
        product.name.toLowerCase().includes(keyword.toLowerCase()),
    );

    const page = Math.max(1, Number(searchParams.get("page")) || 1);
    const pageSize = 3;
    const totalPages = Math.max(1, Math.ceil(filterProducts.length / pageSize));
    const currentPage = Math.min(page, totalPages);

    const starIndex = (currentPage - 1) * pageSize;
    const displayProducts = filterProducts.slice(starIndex, starIndex + pageSize);

    function updateParams(changes) {

        const nextParams = new URLSearchParams(searchParams);

        Object.entries(changes).forEach(([key, value]) => {
            if (value === "" || value === "none" || value === null) {
                nextParams.delete(key);
            } else {
                nextParams.set(key, String(value));
            }
        });
        setSearchParams(nextParams);
    }
    function goToPage(newPage) {
        updateParams({ page: newPage });
    }

    function handleKeywordChange(event) {
        updateParams({
            keyword: event.target.value,
            page: 1,
        });
    }
    function handleSortChange(event) {
        updateParams({
            page: 1,
            sort: event.target.value,
        });
    }

    if (sort === "price-asc") {
        filterProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-desc") {
        filterProducts.sort((a, b) => b.price - a.price);
    }
    return (
        <div>
            <div>
                <label>
                    Tìm tên sản phẩm:{" "}
                    <input
                        type="text"
                        placeholder="tên sản phẩm"
                        value={keyword}
                        onChange={handleKeywordChange}
                    />
                </label>
            </div>

            <div>
                <label>
                    Sắp xếp:{" "}
                    <select value={sort} onChange={handleSortChange}>
                        <option value="none">Mặc định</option>
                        <option value="price-asc">Giá thấp đến cao</option>
                        <option value="price-desc">Giá cao đến thấp</option>
                    </select>
                </label>
            </div>
            <p>Keyword: {keyword || "Không có"} </p>
            <p>Sort: {sort}</p>

            <ul>
                {displayProducts.map((product) => (
                    <li key={product.id}>
                        <strong>{product.name}</strong>
                        <strong>{product.category}</strong> {" - "}
                        <strong>{product.price}</strong> {" - "}
                        <Link to={`/products/${product.id}`}>View Detail</Link>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default ProductList