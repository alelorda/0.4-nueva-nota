import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <td>
      <button onClick={props.handleClick}>{props.text}</button>
    </td>
  )
}

export const Statistic = (props) => {
  return (
    <tr>
      <td>
        {props.text}
      </td>
      <td>
        {props.value}
      </td>
    </tr >
  )
}

const Statistics = (props) => {
  const { good, neutral, bad, all, avarage } = props.props

  if (all !== 0) {
    return (
      <>
        <Statistic text='Good' value={good} />
        <Statistic text='Neutral' value={neutral} />
        <Statistic text='Bad' value={bad} />
        <Statistic text='All' value={all} />
        <Statistic text='Avarage' value={avarage / all} />
        <Statistic text='Positive' value={(good / all) * 100 + '%'} />
      </>
    )

  }
  return (
    <tr><td>No feedback given</td>
    </tr>
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
      <table>
        <thead>
        </thead>
        <tbody>
          <tr>
            <Button handleClick={() => handleClickGood()} text='Good' />
            <Button handleClick={() => handleClickNeutral()} text='Neutral' />
            <Button handleClick={() => handleClickBad()} text='Bad' />
          </tr>
        </tbody>
      </table>
      <h1>Statistics</h1>
      <table>
        <thead>
        </thead>
        <tbody>
          <Statistics props={{ good, neutral, bad, all, avarage }} />
        </tbody>
      </table>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
