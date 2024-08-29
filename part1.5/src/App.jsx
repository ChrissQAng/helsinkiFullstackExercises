const App = () => {
  // const course = "Half Stack application development";
  // const part1 = "Fundamentals of React";
  const exercises1 = 10;
  // const part2 = "Using props to pass data";
  const exercises2 = 7;
  // const part3 = "State of a component";
  const exercises3 = 14;

  const Header = (props) => {
    return (
      <>
        <h1>Course: {props.course}</h1>
      </>
    );
  };

  const Part = (props) => {
    return (
      <>
        <p>
          Name of part: {props.part} - Number of exercises:
          {props.numberOfExercises}{" "}
        </p>
      </>
    );
  };
  const Content = (props) => {
    return (
      <>
        <div>
          <Part part={props.part1} numberOfExercises={exercises1} />
          <Part part={props.part2} numberOfExercises={exercises2} />
          <Part part={props.part3} numberOfExercises={exercises3} />
        </div>
      </>
    );
  };
  const Total = ({ totalExercises }) => {
    return (
      <>
        <br />
        <p>Total of Exercises: {totalExercises}</p>
      </>
    );
  };

  return (
    <div>
      <Header course="Half Stack application development" />
      <br />
      <br />
      <Content
        part1="Fundamentals of React"
        part2="Using props to pass data"
        part3="State of a component"
        numberOfExercises1={exercises1}
        numberOfExercises2={exercises2}
        numberOfExercises3={exercises3}
      />
      <Total totalExercises={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
