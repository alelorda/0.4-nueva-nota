import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  if (props.props.all !== 0) {
    return (
      <div>
        <p>Good:{props.props.good}</p>
        <p>Neutral:{props.props.neutral}</p>
        <p>Bad:{props.props.bad}</p>
        <p>All:{props.props.all}</p>
        <p>Avarage:{(props.props.good - props.props.bad) / props.props.all}</p>
        <p>Positive:{props.props.good / props.props.all}%</p>
      </div>
    )
  }
  return (
    <div>
      <p>
        No feedback given
      </p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [avarage, setAvarage] = useState(0)
  const [all, setAll] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setAvarage(avarage + 1)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleClickBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setAvarage(avarage - 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleClickGood}>Good</button>
      <button onClick={handleClickNeutral}>Neutral</button>
      <button onClick={handleClickBad}>Bad</button>
      <h1>Statistics</h1>
      <Statistics props={{ good, neutral, bad, all }} />
    </div >
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
