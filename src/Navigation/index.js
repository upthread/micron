import React from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';

const Navigation = () => {
    return (
        <div className='nav_container'>
            <header>
                <h3 className= "logo"><Link to= "/home">RMT</Link></h3>
                <a className="to_nav" href='#primary_nav'>Menu</a>
            </header>
            <nav id= 'primary_nav'>
                <Link to= '/'>Home</Link>
                <Link to= '/templ'>Form</Link>
                <Link to= '/multi'>Multi</Link>
                {/* <Link to= '/'></Link> */}
                {/* <Link to= '/'></Link> */}
                {/* <Link to= '/'></Link> */}
            </nav>
        </div>
    )
}

export default Navigation