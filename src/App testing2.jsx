import { useState } from "react";

function Square({num}) {
  return (<div> {num **2} </div>);
}

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

function Robot({driver}) {
  return (
    <div>
      <div>Robot1 Controlled by :  {driver.name}</div>
    </div>
  );
}

function Robot2({name}) {
  return (
    <div>
      <div> Robot2 Controlled by :  {name}</div>
    </div>
  );
}

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

function Printsum(b, c) {
  console.log(b + c);
}

function Water(){
  const [ temperature, setTemperature] = 
    useState(99);
  
  const displayText = 
    temperature <= 0 ? "ice" : temperature >= 100 ? "steam" : "water";

  return (
    <div> {displayText} </div>
  );
}
//////////////////////////////////////////////////////
function App() {
  const person = {name: "Neo"};
  
  return (
    <div>
      <Square num={2} />
      <Square num={4} />
      <Square num={6} />
      <p></p>

      <Largest arr={[4, 0, 22, 6, 17]} />
      <p></p>

      <Robot driver={person} />
      <p></p>

      <Robot2 name="Leo" />
      <p></p>

      <Profile name='Leo' money={90} childen='ABC'>
        <h1>childen content</h1>
      </Profile>
      <p></p>

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

      <button onClick={() => {
        Printsum(4, 5);
      }}>
      Log2
      </button><p></p> 

      <Water /><p></p>    
    </div>
  );
    
}

export default App;