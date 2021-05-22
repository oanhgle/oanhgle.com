import * as React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return(
        <div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/project'>Project</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header