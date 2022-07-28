import "../src/static/css/App.css";
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from './navbar';
import Navbar from "../src/Components/StickyNavbar";
import HomePage from "../src/Components/HomePage";
import Products from "./static/Products/Products";
import Product from "./static/Products/Product";
import Footer from "../src/Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/product/:id" element={<Product/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
