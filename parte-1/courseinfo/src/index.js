import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map(element => (
        <Part part={element.name} exercises={element.exercises} />)
      )}
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div >
  )
}

const Total = (props) => {
  console.log(props.exercises);
  let total = 0
  props.exercises.map(element => (
    total += element.exercises
  ))


  return (
    <p>Number of exercises {total}</p>

  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercises={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))