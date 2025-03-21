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

             {/*ProductList function*/}
            <ProductList/>
            
             {/*增加按鈕*/}
            <button onClick={decrementCount}> - </button>
            
             {/*數量顯示*/}
            <span> {count} </span>
            
             {/*減少按鈕*/}
            <button onClick={incrementCount}> + </button>
            <p></p>
            
             {/*Name and age display*/}
            <div>
                <div>{name} is {age} years old</div>
                <button onClick={handleClick}>Click me</button>
            </div>
             {/*Name and age display*/}
             
        </div>
    );
}

export default App;