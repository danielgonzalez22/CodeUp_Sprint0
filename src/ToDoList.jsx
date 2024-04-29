import React, { useState, useEffect, useRef } from 'react'
import './styles/ToDoList.css'

function ToDoList() {
  const storedTasks = JSON.parse(localStorage.getItem('tasks'))
  const [tasks, setTasks] = useState(storedTasks)
  const [searchText, setSearchText] = useState('')
  const [newTaskText, setNewTaskText] = useState('')
  const doneCheckboxRef = useRef(null)
  const pendingCheckboxRef = useRef(null)
  const filteredTasks = tasks.filter(task => {
    const textMatch = task.text.toLowerCase().includes(searchText)
    const isDoneMatch = doneCheckboxRef.current.checked ? task.done : true
    const isPendingMatch = pendingCheckboxRef.current.checked ? !task.done : true
    return textMatch && isDoneMatch && isPendingMatch
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
    console.log(JSON.parse(localStorage.getItem('tasks')))
  }, [tasks])

  function handleAddTaskInput(event) {
    setNewTaskText(event.target.value)
  }

  function handleSearchInput(event) {
    setSearchText(event.target.value.toLowerCase())
  }

  function addTask() {
    if (newTaskText.trim() !== '') {
      setTasks([...tasks, { text: newTaskText, done: false }])
    }
    setNewTaskText('')
  }

  function markAsDone(index) {
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks]
      updatedTasks[index] = { ...updatedTasks[index], done: true }
      return updatedTasks
    })
  }

  function markAsPending(index) {
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks]
      updatedTasks[index] = { ...updatedTasks[index], done: false }
      return updatedTasks
    })
  }

  function deleteTask(listItemIndex) {
    setTasks(prevTasks => prevTasks.filter((task, index) => index !== listItemIndex))
  }


  function handleDoneCheckbox(index) {

  }

  function handlePendingCheckbox() {

  }


  return (
    <div className="main-container">
      <h1>To-Do-List</h1>
      <div className='inputs-container'>
        <div className='newtask-div'>
          <input
            type="text"
            placeholder='New task...'
            onChange={handleAddTaskInput}
            value={newTaskText}
          />
          <button
            className='btn-add'
            onClick={() => addTask()}
          >
            Add
          </button>
        </div>
        <div className='search-div'>
          <input
            type="text"
            placeholder='Search task...'
            onChange={handleSearchInput}
          />
          <input type="checkbox" id="doneCheckbox" ref={doneCheckboxRef} onChange={handleDoneCheckbox} />
          <label htmlFor="doneCheckbox">Done</label>
          <input type="checkbox" id="pendingCheckbox" ref={pendingCheckboxRef} onChange={handlePendingCheckbox} />
          <label htmlFor="pendingCheckbox">Pending</label>
          <label htmlFor=""></label>
          <label htmlFor=""></label>
        </div>
      </div>
      <ol>
        {filteredTasks.map((task, index) =>
          <li key={index} className='list-item'>
            <span className={task.done ? 'li-text done' : 'li-text'}>{task.text}</span>
            <button
              className='btn-check'
              onClick={() => markAsDone(index)}
              disabled={task.done}
            >
              Done
            </button>
            <button
              className='btn-uncheck'
              onClick={() => markAsPending(index)}
              disabled={!task.done}
            >
              Pending
            </button>
            <button
              className='btn-delete'
              onClick={() => deleteTask(index)}
            >
              X
            </button>
          </li>
        )}
      </ol>
    </div>
  )
}
export default ToDoList