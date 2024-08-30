const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };
  // console.log(part1, part2, part3);

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
          <Part
            part={props.coursePart1}
            numberOfExercises={props.numberOfExercises1}
          />
          <Part
            part={props.coursePart2}
            numberOfExercises={props.numberOfExercises2}
          />
          <Part
            part={props.coursePart3}
            numberOfExercises={props.numberOfExercises3}
          />
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
        coursePart1={part1.name}
        coursePart2={part2.name}
        coursePart3={part3.name}
        numberOfExercises1={part1.exercises}
        numberOfExercises2={part2.exercises}
        numberOfExercises3={part3.exercises}
      />
      <Total
        totalExercises={part1.exercises + part2.exercises + part3.exercises}
      />
    </div>
  );
};

export default App;
