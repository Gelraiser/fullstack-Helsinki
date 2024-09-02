import { useState } from 'react'

const Display = (props) => (
  <div>
    <p>{props.name}: {props.value}</p>
  </div>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='Good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='Bad' />
      <h1>Statistics</h1>
      <Display name = "Good" value={good} />
      <Display name = "Neutral" value={neutral} />
      <Display name = "Bad" value={bad} />


    </div>
  )
}

export default App
