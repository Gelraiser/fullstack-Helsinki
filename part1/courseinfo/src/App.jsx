const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      {
        parts.map(part => (
          <Part name={part.name} exercises={part.exercises}/>  
        ))
      }
    </>
  )
}

const Part = ({name, exercises}) => {
  return (
    <>
      <p>
        {name}: {exercises}
      </p>
    </>
  )
}

const Total = ({parts}) => {
  console.log(parts)
  const totalExercises = parts.map(part => part.exercises).reduce((sum, exercises) => sum + exercises, 0)
  return (
    <>
      <p>Number of exercises = {totalExercises} </p>
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [{
      name : 'Fundamentals of React',
      exercises:  10 
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
      <Header course = {course}/>
      <Content parts = {parts}/>
      <Total parts = {parts} />
    </div>
  )
}

export default App
