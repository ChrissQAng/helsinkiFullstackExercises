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
  const Content = (props) => {
    return (
      <>
        <p>
          Name of part: {props.part1} - Number of exercises:{" "}
          {props.numberOfExercises1}{" "}
        </p>
        <p>
          Name of part: {props.part2} - Number of exercises:{" "}
          {props.numberOfExercises2}{" "}
        </p>
        <p>
          Name of part: {props.part3} - Number of exercises:{" "}
          {props.numberOfExercises3}{" "}
        </p>
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
      {/* <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
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
