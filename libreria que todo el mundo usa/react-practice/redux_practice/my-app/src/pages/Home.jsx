import React from 'react'
import {Link} from 'react-router-dom'
import {Main} from '../components/Main/Main'

const Home = () => {
    return (
        <>
            <Link to='/proyects'>
            <h1>ESTE ES MI HOME</h1>
            </Link>
            <Main/>
        </>
    )
}

export default Home
