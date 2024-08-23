const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = ({ part1, part2, part3 }) => {
  return (
    <>
      <Part name={part1.name} exercises={part1.exercises1} />
      <Part name={part2.name} exercises={part2.exercises2} />
      <Part name={part3.name} exercises={part3.exercises3} />
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

const Total = (props) => {
  console.log(props)
  return (
    <>
      <p>Number of exercises = {props.total} </p>
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name : 'Fundamentals of React',
    exercises1:  10 
  }
  const part2 = { 
    name: 'Using props to pass data',
    exercises2: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises3: 14
  }

  return (
    <div>
      <Header course = {course}/>
      <Content 
          part1 = {part1} 
          part2= {part2} 
          part3={part3} 
          />
      <Total total = {part1.exercises1 + part2.exercises2 + part3.exercises3} />
    </div>
  )
}

export default App
