import React, { useState } from 'react'

const Form = ({ addTask }) => {

  // const [task, setTask] = useState('');
  // const [date, setDate] = useState('');

  const [formValue, setFormValue] = useState({
    task: '',
    date: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTask = {
      task: formValue.task,
      status: false,
      date: formValue.date
    }
    addTask(newTask);
    cleanForm();
  }

  const cleanForm = () => {
    setFormValue({
      task: '',
      date: ''
    });
  }
  const handleChange = (e) => {
    let nameInput = e.target.name;
    let value = e.target.value;
    // setTask(value);
    // if (nameInput === 'task') {
    //   setTask(value);
    // }else if(nameInput === 'date') {
    //   setDate(value);
    // }
    let tempForm = { ...formValue };
    tempForm[nameInput] = value;
    console.log(tempForm)
    setFormValue(tempForm)
  }

  return (
    <form className='me-2' onSubmit={handleSubmit}>
      <h3>Nueva Tarea</h3>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Tarea</span>
        <input type="text"
          className="form-control"
          name='task'
          placeholder="Escriba una tarea" aria-label="Tarea"
          aria-describedby="task"
          value={formValue.task}
          onChange={handleChange} />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Fecha</span>
        <input
          type="date"
          name='date'
          className="form-control"
          aria-label="Fecha"
          aria-describedby="date"
          value={formValue.date}
          onChange={handleChange} />
      </div>
      <button type='submit' className='btn btn-success'>Guardar</button>
    </form>
  )
}

export default Form