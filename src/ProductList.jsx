import React from 'react'
import {Link} from 'react-router-dom'
import style from './ProductList.module.css'
import {useState} from 'react'

export default function ProductList() {
  
  let productList = [
    {"id": 1, "name": "蘋果", "price": 5, "image": "apple.jpg", "description": "新鮮的蘋果50克"},
    {"id": 2, "name": "橙", "price": 3, "image": "orange.jpg", "description": "新鮮的橙50克"},
    {"id": 3, "name": "芒果", "price": 4, "image": "mango.jpg", "description": "新鮮的芒果500克"},
    {"id": 4, "name": "西瓜", "price": 20, "image": "watermelon.jpg", "description": "新鮮的西瓜2公斤"},
    {"id": 5, "name": "藍梅", "price": 10, "image": "blueberry.jpg", "description": "新鮮的藍梅50克"},
    {"id": 6, "name": "白蘿蔔", "price": 5, "image": "carrot.jpg", "description": "新鮮的白蘿蔔1公斤"}
  ]

   // Conditional Rendering隱藏/顯示開關
  const[showProduct, setShowProduct] = useState(false)

  return (
    <div>
             
        {showProduct && <button onClick={()=> {setShowProduct(false)}}>隠藏產品</button>}
        {!showProduct && <button onClick={()=> {setShowProduct(true)}}>顯示產品</button>}

       <h1 style={{ backgroundColor: 'orange', borderBottom: '5px solid red' }}>請選擇購買的水果</h1>
       
        {/*水果清單*/}
      <div>
        {
          showProduct && productList.map(product =>(
              <div className={styles.productBorder} key={product.id}>
                {product.name}<br/>
                {product.price}<br/>

                <Link to={'/product/' +product.id}>
                <img src={process.env.PUBLIC_URL + '/img/' +product.image} />
                </Link>
                <br/>
                
                {product.description}<br/>              
              </div>
          ))
        }        
       </div>{/*水果清單*/}
    </div>
  ) //return
}