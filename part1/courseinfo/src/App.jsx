const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  console.log(props);
  return (
    <>
    {props.parts.map((part, index) =>  <Part key={index} name={part.name} exercises={part.exercises} />)}
    </>
  );
};

const Part = (props) => {
  return <p>{props.name} {props.exercises}</p>
}

const Total = (props) => {
  return <p>Number of exercises {props.total}</p>;
};

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={parts.reduce((acc, item) => acc + item.exercises, 0)} />
    </div>
  );
};

export default App;
