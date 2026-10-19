import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

  return (
    <header>
        ProductStore
         <nav>
                <Link to="/">Home Page</Link> {" | "}
                <Link to="/products">Products</Link> {" | "}
            </nav>
    </header>
  )
}

export default Header