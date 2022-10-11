import React from 'react'

const Header = ({ list, listUsers }) => {
    return (
        <>
            <div>Header</div>
            {
                list.map((element, index) => (
                    <p key={index}>{element}</p>
                ))
            }
            <h3>Usuarios</h3>
            <ul>
                {
                    listUsers.map((user, index) => (
                        <li key={`${user.id}-${index}`}>{user.name}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default Header