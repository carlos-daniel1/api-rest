import React, { useState } from 'react'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = () => {
  return (
    <div className='bg-[rgb(56,56,61)] h-screen'>
      <h1 className='text-red-100'>Home</h1>
      <AddTask />
      <Tasks />
    </div>
  )
}

export default App
