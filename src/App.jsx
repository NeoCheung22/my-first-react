import { useState } from 'react';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Checkout from "./Checkout"; 
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";



function App() {

    // varibles
    const [name, setName] = useState('Neo')
    const [age, setAge] = useState(22)

    // handleClick funcution
    function handleClick() {
        setName('Trinity')
        setAge(21)
    }
    
    //加減按鈕
    const [count, setCount] = useState(() => countInitial())

    function countInitial() {
        console.log('run function')
        return 0
    }

    function decrementCount() {
        setCount(prevCount => prevCount - 1)
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }//加減按鈕
    
    return (
        <BrowserRouter>
            <a href='/'>首頁</a>
            <a href='/checkout'>購物車</a><p></p>

            <Link to="/">首頁</Link>
            <Link to="/product_detail">產品資料</Link>
            <Link to="/checkout">購物車</Link>

            <Routes>
                
                {/* ProductList function */}
                <Route path="/" element={<ProductList />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/product_detail" element={<ProductDetail />} />
                <Route path="*" element={<h1>找不到頁面 404 Not Found</h1>} />


            </Routes>
            {/* 增加按鈕 */}
            <button onClick={decrementCount}> - </button>
            {/* 數量顯示 */}
            <span> {count} </span>
            {/* 減少按鈕 */}
            <button onClick={incrementCount}> + </button>
            <p></p>
            {/* Name and age display */}
            <div>
                <div>{name} is {age} years old</div>
                <button onClick={handleClick}>Click me</button>
            </div>
        </BrowserRouter>
    );
}

export default App;