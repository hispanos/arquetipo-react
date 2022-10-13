import React from 'react'

const ListToDo = ({listTask}) => {

    return (
        <>
            <h3>Listado</h3>
            <ul className="list-group mx-4">
                {
                    listTask.map((task, index) => (
                        <li
                            key={index} className="list-group-item bg-secondary text-white my-1 d-flex justify-content-between"
                        >{task.task}
                            <span className='badge bg-warning'>{task.date}</span>
                            <span
                                className={`badge ${task.status ? 'bg-success' : 'bg-primary'}`}>
                                {task.status === true ? 'Hecha' : 'Por hacer'}
                            </span>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default ListToDo