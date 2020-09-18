import React from 'react'
import { Link } from 'react-router-dom'

import '../css/header.css'

class Header extends React.Component {

    render() {
        return (
            <div className="header-main-container">
                <div className="header-logo">
                    logo here 
                </div>
                <div className="header-options">
                    <ul>
                        <li><Link to="/" className="link">Blogs</Link></li>
                        <li>Our Team</li>
                        <li>Contact</li> 
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default Header