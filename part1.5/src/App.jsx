const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

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
          Name of part: {props.part.name} - Number of exercises:
          {props.part.exercises}{" "}
        </p>
      </>
    );
  };
  const Content = (props) => {
    return (
      <>
        <div>
          <Part part={props.parts[0]} />
          <Part part={props.parts[1]} />
          <Part part={props.parts[2]} />
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
      <Header course={course.name} />
      <br />
      <br />
      <Content parts={course.parts} />
      <Total
        totalExercises={
          course.parts[0].exercises +
          course.parts[1].exercises +
          course.parts[2].exercises
        }
      />
    </div>
  );
};

export default App;
