function  App() {

  function getName() {
    return "Leo Cheung";
  }
  
  function Profile({name, gender, height, children}) {
    return (
      <div>
        <div> Profile {name} </div>
        <div> gender : {gender} </div>
        <div> height : {height} </div>
        <div> {children} </div>        
      </div>
    );
  }

  let arrElement = [
    <div key="1">1</div>,
    <div key="2">2</div>,
    <div key="3">3</div>
  ];

  let name = "Neo Cheung",
      placeholder = "please input",
      age = 42,
      mianiClass = "app";

  let age1 = 42;

  let numberOfMuscle = 4,
      muscle = <div>iPad</div>,
      list = [3, 5, 7, 9];

  const element = (
  <section className = "intro">
      <div> {name} & {getName()} </div>
       <input type="text" tabIndex= "2" placeholder= {placeholder}/>
       <div className="img-wrapper">
         <img src="/baby.jpg" alt=""/>
       </div>

      <div className= {mianiClass}>
        <h>{arrElement}</h>
      </div>
      
      <div className="age">
        {age1 > 18 ? <div>Adult</div> : <div>Child</div>}
      </div>

      <div>
        <p></p>
        <div>{1 + 2}</div>
        <div>{null}</div>
        {numberOfMuscle === "numberOFMuscle"}
        {numberOfMuscle <6 ? muscle : <div> Nice </div>}
        {list.map ((item) => (
          <div key = {item} > {item} </div>
          ))}
      </div>

      <div>
      <Profile>
        name = 'Neo Cheung'
        gender = 'M'
        height = {184.5}
      </Profile>
      </div>

    </section>
  );
  return element;

} 

export default App;