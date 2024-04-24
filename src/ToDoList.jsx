import React, { useState } from 'react'

function ToDoList() {

    const [tasks, setTasks] = useState(["comprar Diclorodifeniltricloroetano", "comprar pan", "sacar la basura", "limpiar el espectrómetro de resonancia magnética nuclear de alto campo"])
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }


    function addTask() {

    }


    function deleteTask(listItemIndex) {

    }


    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input
                    type="text"
                    placeholder='Write a task...'
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button
                className='btn-add'
                onClick={addTask}
                >
                </button>
            </div>



        </div>
    )

}
export default ToDoList