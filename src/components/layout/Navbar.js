import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';



const Navbar = ({icon,title}) => {
        return (
            <nav className='navbar bg-primary'>
                <i className={icon}/>
                <h1>{title}</h1>
            <ul>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/table'>Table from Material</Link>
                </li>
                <li>
                    <Link href='/dashboard'>Dashboard</Link>
                </li>
            </ul>
            </nav>
        )
    
}

Navbar.defaultProps={
    title:"Dogs And Hounds",
    icon:'fas fa-github'
};

Navbar.propTypes={
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
}

export default Navbar
