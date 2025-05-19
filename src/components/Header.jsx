import React from 'react'

const Header = (props) => {
  const {todos} = props
  const todoslength = todos.length

  const isTaskPlural = todoslength != 1

  const tasksortask = isTaskPlural? 'tasks':'task'

  return (
    <header>
        <h1 className='text-gradient'>You have {todoslength} open {tasksortask}.</h1>
    </header>
  )
}

export default Header