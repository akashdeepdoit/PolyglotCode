import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <Link to={'/'}><h1 className="text-6xl font-italic text-white font-bold text-center bg-black bg-opacity-75  py-2">PolyglotCode</h1></Link>
        </div>
    )
}

export default Navbar 