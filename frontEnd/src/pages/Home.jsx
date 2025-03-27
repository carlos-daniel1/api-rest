import React from 'react'
import { useState } from 'react'
import GetCoffee from '../components/GetCoffee';
import NavBar from '../components/NavBar';

const Home = () => {
    const [coffees, setCoffees] = useState([
        {
            id: 1,
            name: 'express coffee',
            price: 2.4
        },
        {
            id: 2,
            name: 'chocolate coffee',
            price: 6
        },
        {
            id: 3,
            name: 'gelatto coffee',
            price: 10
        }

    ]);

    return (
        <div className='bg-[rgb(56,56,61)] h-screen'>
            <NavBar />
            <GetCoffee coffees={coffees} />
        </div>
    )
}

export default Home