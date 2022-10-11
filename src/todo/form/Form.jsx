import React, { useState } from 'react'

const Form = ({addTask}) => {

  const [task, setTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTask = {
      task: task,
      status: false
    }
    addTask(newTask);
  }

  const handleChange = (e) => {
    let value = e.target.value;
    setTask(value);
  }

  return (
    <form className='me-2' onSubmit={handleSubmit}>
      <h3>Nueva Tarea</h3>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Tarea</span>
        <input type="text" className="form-control" placeholder="Escriba una tarea" aria-label="Tarea" aria-describedby="basic-addon1" value={task} onChange={handleChange} />
      </div>
      <button type='submit' className='btn btn-success'>Guardar</button>
    </form>
  )
}

export default Form