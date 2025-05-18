import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Tabs from './components/Tabs'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

function App() {

  return (
   <>
    <Header/>
    <Tabs/>
    <TodoList/>
    <TodoInput/>
   </>
  )
}

export default App
