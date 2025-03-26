import React, { useState } from 'react'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = () => {
  return (
    <div>
      <h1 className='text-red-100 m-1'>Gerenciador de tarefas</h1>
      <AddTask />
      <Tasks />
    </div>
  )
}

export default App
