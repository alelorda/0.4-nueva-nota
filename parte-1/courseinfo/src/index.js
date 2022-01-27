import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part name={props.props.part1} exercises={props.props.exercises1} />
      <Part name={props.props.part2} exercises={props.props.exercises2} />
      <Part name={props.props.part3} exercises={props.props.exercises3} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.exercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises.exercises1 + props.exercises.exercises2 + props.exercises.exercises3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content props={{ part1, part2, part3, exercises1, exercises2, exercises3 }} />
      <Total exercises={{ exercises1, exercises2, exercises3 }} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))