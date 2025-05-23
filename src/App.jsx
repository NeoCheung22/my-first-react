import { useState } from 'react';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Checkout from "./Checkout"; 
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";



function App() {
<<<<<<< HEAD
 
    return (
        <div>
            <ProductList/>
        </div>
=======
            
    return (
        <BrowserRouter>

            <a href='/checkout'>購物車(a tag)</a>

            <Link to="/">首頁</Link>
            <Link to="/product_detail">產品資料</Link>
            <Link to="/checkout">購物車</Link>

            <Routes>
                
                {/* ProductList function */}
                <Route path="/" element={<ProductList />} />
                <Route path="/checkout" element={<Checkout />} />

                <Route path="/product" element={<ProductDetail />} >
                    <Route path=":id" element={<ProductDetail />} />
                </Route>

                <Route path="*" element={<h1>找不到頁面 404 Not Found</h1>} />

            </Routes>            
        </BrowserRouter>
>>>>>>> d5566c53e54c3262f41e90046b5df25fba10c40a
    );
}

export default App;