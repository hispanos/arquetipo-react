import React from 'react';
import Counter from './counter/Counter';
import Header from './header/Header';

const App = () => {
    const listFruits = ['Mango', 'Piña']
    const listUsers = [
        {
            id: 1,
            name: 'Mailer'
        },
        {
            id: 2,
            name: 'Jesus'
        }
    ]

    return (
        <>
            <h1>Hola Mundo</h1>
            <Header 
                list={listFruits} 
                listUsers={listUsers} 
            />
            <Counter />
        </>
    )
}

export default App;