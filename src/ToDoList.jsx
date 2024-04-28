import React, { useState, useEffect } from 'react'

function ToDoList() {
  const storedTasks = JSON.parse(localStorage.getItem('tasks'))
  const [tasks, setTasks] = useState(storedTasks)
  const [newTaskText, setNewTaskText] = useState('')
  const [searchText, setSearchText] = useState('')
  const filteredTasks = tasks.filter(task => task.toLowerCase().includes(searchText))

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
    console.log(JSON.parse(localStorage.getItem('tasks')))
  }, [tasks])

  function handleAddTaskInput(event) {
    setNewTaskText(event.target.value)
  }

  function handleSearchEmptyBtn() {

  }

  function handleSearchInput(event) {
    setSearchText(event.target.value.toLowerCase())
  }

  function addTask() {
    if (newTaskText.trim() !== '') {
      setTasks([...tasks, newTaskText])
    }
    setNewTaskText('')
  }


  function deleteTask(listItemIndex) {
    setTasks(prevTasks => prevTasks.filter((task, index) => index !== listItemIndex))
  }



  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder='New task...'
          onChange={handleAddTaskInput}
          value={newTaskText}
        />
        <button
          className='btn-add'
          onClick={() => addTask()}
          style={{ width: "30px", height: "30px" }}
        >
        </button>
        <input
          type="text"
          placeholder='Search task...'
          onChange={handleSearchInput}
        />
        <button
          className='btn-empty-search'
          onClick={handleSearchEmptyBtn}
        >
        </button>
      </div>
      <ol>
        {filteredTasks.map((task, index) =>
          <li key={index}>
            <span className='li-text'>{task}</span>
            <button
              className='btn-delete'
              onClick={() => deleteTask(index)}
            >
              Delete task
            </button>
          </li>
        )}
      </ol>
    </div>
  )
}
export default ToDoList