import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Welcome to ProductStore</h1>
            <h2>Manage and explore product for your needs.</h2>
            <button onClick={() => navigate('/products')}>View Products</button>
        </div>
    )
}

export default Home