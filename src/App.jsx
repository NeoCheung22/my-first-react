import { useState } from 'react';
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
        <div>
            <ProductList/>            
            <button onClick={decrementCount}> - </button>
            <span> {count} </span>
            <button onClick={incrementCount}> + </button>
            <p></p>
            
            <div>
                <div>{name} is {age} years old</div>
                <button onClick={handleClick}>Click me</button>
            </div>
        </div>
    );
}

export default App;