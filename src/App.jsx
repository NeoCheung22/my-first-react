import { useState } from "react";

// 計算數字平方的組件
function Square({num}) {
  return (<div> {num **2} </div>);
}

// 找出數組中最大數的組件
function Largest({arr}) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return (
    <div> The Largest Number : {max} </div>
  );
}

// 顯示機器人1控制者的組件
function Robot({driver}) {
  return (
    <div>
      <div>Robot1 Controlled by :  {driver.name}</div>
    </div>
  );
}

// 顯示機器人2控制者的組件
function Robot2({name}) {
  return (
    <div>
      <div> Robot2 Controlled by :  {name}</div>
    </div>
  );
}

// 顯示用戶資料的組件,包含判斷是否富有
function Profile({name, money, childen}) {
  let output = "normal";
  if(money > 100) {
    output = "rich";
  }

  return (
    <div>
      <div>{childen}</div>
      <div>Profile : {name} is {output}</div>      
    </div>
  );
}

// 打印兩數之和的函數
function Printsum(b, c) {
  console.log(b + c);
}

// 根據溫度顯示水的狀態的組件
function Water(){
  const [ temperature, setTemperature] = 
    useState(-10);
  
  // 使用三元運算符判斷水的狀態
  const displayText = 
    temperature <= 0 ? "ice" : temperature >= 100 ? "steam" : "water";

  return (
    <div> {displayText} </div>
  );
}

// 主應用組件
function App() {
  const person = {name: "Neo"};

  const handleClick = (event) => {
    console.log("點擊了");
    console.log(event);
  }
  
  return (
    <div>
      {/* 顯示數字的平方 */}
      <Square num={2} />
      <Square num={4} />
      <Square num={6} />
      <p></p>

      {/* 顯示數組最大值 */}
      <Largest arr={[4, 0, 22, 6, 17]} />
      <p></p>

      {/* 顯示機器人控制者 */}
      <Robot driver={person} />
      <p></p>

      <Robot2 name="Leo" />
      <p></p>

      {/* 顯示用戶資料 */}
      <Profile name='Leo' money={90} childen='ABC'>
        <h1>childen content</h1>
      </Profile>
      <p></p>

      {/* 點擊按鈕執行判斷邏輯 */}
      <button onClick={() => {
        let a = 10;
        if (a < 10){
          console.log("a is less than 10");
        }
        else {
          console.log("a is greater than 10");
        }
      }
      }>
        Log1
      </button><p></p>

      {/* 點擊按鈕計算總和 */}
      <button onClick={() => {
        Printsum(4, 5);
      }}>
      Log2
      </button><p></p> 

      {/* 顯示水的狀態 */}
      <Water /><p></p> 

      {/* 點擊按鈕checked */}
      <button onClick= {() => console.log("checked")}>按鈕1</button>
      <p></p>

      {/* 點擊按鈕checked */}
      <button onClick= {handleClick}>按鈕2</button>

    </div>
  );
    
}

export default App;
