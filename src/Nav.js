import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <div className='home'>
            {/* <Link to="/">Home</Link>
            <br></br>
            <Link to='/about'>About</Link> */}
            <ul>
                <Link to="/" style={{textDecoration:"none"}}>
                  <li>Home</li>
                  </Link>

                  <Link to="/about" style={{textDecoration:"none"}}>
                  <li>About</li>
                  </Link>

                  </ul>

        </div>
    )
}
export default Nav;