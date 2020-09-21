import React from 'react'
import { Link } from 'react-router-dom'

import '../css/header.css'
import horizontalLogo from '../assets/images/DSCPVGCOETHorizontal.png'

class Header extends React.Component {

    componentDidMount() {
        if(this.props.passHeaderHeight) {
            this.props.passHeaderHeight(this.headerElement.clientHeight)
        }
    }

    render() {

        const displayValue = this.props.showLogoInHeader ? '' : 'hidden'
        const boxShadow = this.props.showLogoInHeader ? '4px 0 20px #0000002a' : '' 
        
        return (
            <div className="header-main-container" ref={headerElement => this.headerElement = headerElement} style={{boxShadow: boxShadow,}}>
                <div className="header-logo">
                    <img src={horizontalLogo} style={{visibility: displayValue }}/> 
                </div>
                <div className="header-options">
                    <ul>
                        <li><Link to="/" className="link">Home</Link></li>
                        <li><Link to="/blog-list" className="link">Blogs</Link></li>
                        <li><Link to="/our-team" className="link">Team</Link></li>
                        <li><Link to="/" className="link">Contact</Link></li> 
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default Header