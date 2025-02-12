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

function App() {
  return (
    <div>
      <Square num={2} />
      <Square num={4} />
      <Square num={6} />

      <Largest arr={[4, 0, 22, 6, 17]} />
    </div>
  );
}

export default App;