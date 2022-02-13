import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handlerClick}>{props.text}</button>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [point, setPoint] = useState([0, 0, 0, 0, 0, 0])
  const [ubiAnec, setUbiAnec] = useState(0)
  const [maxVal, setMaxVal] = useState(0)

  const newSelected = () => {
    setSelected(Math.floor(Math.random() * (6 - 0)) + 0)
    maxVotes();
  };

  const newVote = () => {
    const copy = [...point]
    copy[selected] += 1
    setPoint(copy)
    maxVotes();
  }

  const maxVotes = () => {
    for (let index = 0; index < point.length; index++) {
      const elemen = point[index];
      if (maxVal < elemen) {
        setUbiAnec(index)
        setMaxVal(elemen)
      }
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <p>Has {point[selected]}</p>
      <div>
        <Button handlerClick={() => newVote()} text='Vote' />
        <Button handlerClick={() => newSelected()} text='New Anecdote' />
      </div>
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[ubiAnec]}
      <p>Has {point[ubiAnec]}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)