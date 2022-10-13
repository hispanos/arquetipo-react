import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import Header from './todo/header/Header'
import ListToDo from './todo/list/ListToDo'
import Form from './todo/form/Form'

const Todo = () => {

    const [listTask, setListTask] = useState([]);

    const addTask = (newTask) => {
        // const tempList = listTask;
        // tempList.push(task)
        // setListTask(tempList)
        setListTask([
            ...listTask,
            newTask
        ])
    }

    return (
        <>
        <Header />
        <div className='row mt-2'>
            <div className="col-sm-7">
                <ListToDo listTask={listTask} />
            </div>
            <div className="col-sm-5">
                <Form addTask={addTask} />
            </div>
        </div>
        </>
    )
}

export default Todo