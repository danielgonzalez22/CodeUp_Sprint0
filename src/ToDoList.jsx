import React, { useState, useEffect } from 'react'

function ToDoList() {

  const [tasks, setTasks] = useState(["comprar Diclorodifeniltricloroetano", "comprar pan", "sacar la basura", "limpiar el espectrómetro de resonancia magnética nuclear de alto campo"])
  const [newTask, setNewTask] = useState("")

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
    console.log(tasks)
  }, [tasks])

  function handleNewTaskInput(event) {
    setNewTask(event.target.value)
  }

  function handleAddTaskBtn() {

  }


  function handleSearchEmptyBtn() {

  }


  function handleSearchInput(event) {
    if (!event.target.value) return setTasks(tasks)
    const resultsArray = tasks.filter(task => task.includes(event.target.value))
    setTasks(resultsArray)
  }


  function addTask() {

  }


  function deleteTask(listItemIndex) {
    setTasks(tasks.filter((task, index) => index !== listItemIndex))
  }



  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder='New task...'
          value={newTask}
          onChange={handleNewTaskInput}
        />
        <button
          className='btn-add'
          onClick={addTask}
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
        {tasks.map((task, index) =>
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