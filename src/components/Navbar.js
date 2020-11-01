import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="row">
            <div className="col">
                <Link to='/'><button className='btn btn-outline-primary'>Home</button></Link>
                <Link to='/add'><button className='btn btn-outline-primary'>Add Post</button></Link>
            </div>
        </div>
    );
}

export default Navbar;