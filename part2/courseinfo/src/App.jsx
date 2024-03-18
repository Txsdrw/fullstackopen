const Header = ({course}) => {
  return <h1>{course}</h1>;
};

const Content = ({parts}) => {
  return (
    <>
    {parts.map((part, index) =>  <Part key={index} name={part.name} exercises={part.exercises} />)}
    </>
  );
};

const Part = (props) => {
  return <p>{props.name} {props.exercises}</p>
}

const Total = ({parts}) => {
  return (
    <p>Total of {parts.reduce((total, part) => total + part.exercises, 0)} exercises</p>
  )
}

const Course = ({course}) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App