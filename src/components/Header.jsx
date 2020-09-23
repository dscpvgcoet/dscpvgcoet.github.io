import React from 'react'
import { Link } from 'react-router-dom'
import { BarChart, X } from 'react-feather'
import { isMobile, BrowserView, MobileView } from 'react-device-detect'

import '../css/header.css'
import horizontalLogo from '../assets/images/DSCPVGCOETHorizontal.png'
import { times } from 'lodash'

class Header extends React.Component {

    state = {
        menuOpen : false
    }

    componentDidMount() {
        if(this.props.passHeaderHeight) {
            this.props.passHeaderHeight(this.headerElement.clientHeight)
        }
    }

    handleMenuButtonClick = () => {
        window.scroll({top:0, left:0, behavior:'smooth'})
        this.setState({menuOpen: !this.state.menuOpen})
    }

    render() {

        const displayValue = this.props.showLogoInHeader ? '' : 'hidden'
        const boxShadow = this.props.showLogoInHeader ? '4px 0 20px #0000002a' : '' 
        
        return (
            <>
            <div className="header-main-container" ref={headerElement => this.headerElement = headerElement} style={{boxShadow: boxShadow,}}>
                <div className="header-logo">
                    <img src={horizontalLogo} style={{visibility: displayValue }}/> 
                </div>
                <div onClick={this.handleMenuButtonClick}>
                    <MobileView>
                        {
                            this.state.menuOpen 
                            ? <X size={30} color="#434343" className="rotate"/>
                            : <BarChart size={30} color="#434343" className="rotate"/>  
                        }
                    </MobileView>
                </div>
                <BrowserView>
                    <div className="header-options">
                        <ul>
                            <li><Link to="/" className="link">Home</Link></li>
                            <li><Link to="/blog-list" className="link">Blogs</Link></li>
                            <li><Link to="/our-team" className="link">Team</Link></li>
                            <li><Link to="/" className="link">Contact</Link></li> 
                        </ul>
                    </div>
                </BrowserView>
            </div>
            <MobileView>
                <div className="mobile-menu" style={{visibility: this.state.menuOpen ? '' : 'hidden', paddingTop: 70, height: this.state.menuOpen ? 150 : 0, overflow:'hidden'}}>
                    <div className="header-options">
                        <ul>
                            <li onClick={() => this.setState({menuOpen: !this.state.menuOpen})}><Link to="/" className="link">Home</Link></li>
                            <li onClick={() => this.setState({menuOpen: !this.state.menuOpen})}><Link to="/blog-list" className="link">Blogs</Link></li>
                            <li onClick={() => this.setState({menuOpen: !this.state.menuOpen})}><Link to="/our-team" className="link">Team</Link></li>
                            <li onClick={() => this.setState({menuOpen: !this.state.menuOpen})}><Link to="/" className="link">Contact</Link></li> 
                        </ul>
                    </div>
                </div>
            </MobileView>
            </>
        )
    }
}

export default Header