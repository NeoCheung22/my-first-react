import { useState } from 'react';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Checkout from "./Checkout"; 
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";



function App() {
            
    return (
        <BrowserRouter>

            <Link to="/">首頁</Link><br/>
            <Link to="/checkout">購物車</Link><br/>

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
    );
}

export default App;