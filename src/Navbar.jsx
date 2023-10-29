import { Link } from "react-router-dom"
import Home from "./pages/Home"
import ProductList from "./pages/ProductList"

function Navbar() {
  return (
    <>
        <h1>Navbar</h1>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
    </>
  )
}

export default Navbar