const Hello = ({ name, age }) => {
  console.log(name, age);

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old.{" "}
      </p>
    </div>
  );
};

const App = () => {
  const name = "Peter";
  const age = 10;
  return (
    <div>
      <h1>Grettings</h1>
      <Hello name="Maya" age={36} />
      <Hello name={name} age={age} />
    </div>
  );
};

export default App;
