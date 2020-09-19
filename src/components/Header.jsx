import React from 'react'
import { Link } from 'react-router-dom'

import '../css/header.css'
import horizontalLogo from '../assets/images/DSCPVGCOETHorizontal.png'

class Header extends React.Component {

    componentDidMount() {
        this.props.passHeaderHeight(this.headerElement.clientHeight)
    }

    render() {

        const displayValue = this.props.showLogoInHeader ? '' : 'none'
        
        return (
            <div className="header-main-container" ref={headerElement => this.headerElement = headerElement}>
                <div className="header-logo">
                    <img src={horizontalLogo} style={{display: displayValue }}/> 
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