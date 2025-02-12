function App() {
  
  // Functions
  function getName() {
    return "Leo Cheung";
  }

  // Components
  function Profile({ name, gender, height, children }) {
    return (
      <div>
        <div>Profile: {name}</div>
        <div>Gender: {gender}</div>
        <div>Height: {height}</div>
        <div>{children}</div>
      </div>
    );
  }

  // Variables
  const name = "Neo Cheung";
  const placeholder = "please input";
  const age = 42;
  const mianiClass = "app";
  const age1 = 42;
  const numberOfMuscle = 4;
  const muscle = <div>iPad</div>;
  const list = [3, 5, 7, 9];

  // Array of elements
  const arrElement = [
    <div key="1">1</div>,
    <div key="2">2</div>,
    <div key="3">3</div>
  ];

  // Main render
  const element = (
    <section className="intro">
      {/* Name Section */}
      <div>
        {name} & {getName()}
      </div>

      {/* Input Section */}
      <input 
        type="text" 
        tabIndex="2" 
        placeholder={placeholder}
      />

      {/* Image Section */}
      <div className="img-wrapper">
        <img src="/baby.jpg" alt="" />
      </div>

      {/* Array Elements Section */}
      <div className={mianiClass}>
        <h>{arrElement}</h>
      </div>

      {/* Age Condition Section */}
      <div className="age">
        {age1 > 18 ? <div>Adult</div> : <div>Child</div>}
      </div>

      {/* Calculations and Conditions Section */}
      <div>
        <p></p>
        <div>{1 + 2}</div>
        <div>{null}</div>
        {numberOfMuscle === "numberOFMuscle"}
        {numberOfMuscle < 6 ? muscle : <div>Nice</div>}
        {list.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>

      {/* Profile Component Section */}
      <div>
        <p></p>
        <Profile name="Neo Cheung" gender="M" aaa="ABC">
          aaa = 'leo'
        </Profile>
      </div>
    </section>
  );

  return element;
}

export default App;
