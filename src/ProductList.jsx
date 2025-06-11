import React from 'react'
import {Link} from 'react-router-dom'
import styles from './ProductList.module.css'
import {useState, useEffect} from 'react'
import Title from './Title'
import { use } from 'react'

export default function ProductList() {
 
  let [productList, setProductList] = useState([])
  let [input, setInput] = useState('')

  useEffect(() => {
         //1 : 無第二個參數︰component 每次render時都會執行
         //2 : Dependencies array是空array時 []︰component 只會在mount時執行一次
        //3 : Dependencies array有值時 []︰第一次裝頁render時 + 指定的值有變時才會執行

           fetch("https://neocheung22.github.io/demoapi/react-basicc-product.json")
            .then(response => response.json())
            .then(data => setProductList(data));
          console.log(productList)
  },[])  // Dependencies array

  useEffect(() => {
      if(input.length > 4) 
        console.log("字串夠長")
      else
        console.log("字串太短")
  },[input]) 

  return (
    <div>
      <input type="text" onChange={e => setInput(e.target.value)} />
      <Title mainTitle="請選擇購買的水果" />
               
      <div> {/*水果清單*/}
        {
          productList.map((product) => {
            return (
              <div className={styles.productBorder} key={product.id}>
                  <p>{product.name}</p>
                  價格：{product.price} 元
                  <Link to={'/product/' +product.id}>
                      <img src={`public/img/${product.image}`} /> <br/>
                  </Link>
                  {product.description}
              </div>
            )
          })
        }
       </div> {/*水果清單*/}
    </div> //return
  ) //return
} //export default ProductList