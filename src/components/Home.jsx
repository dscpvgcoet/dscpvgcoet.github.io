import React from 'react'
import { ChevronDown } from 'react-feather'

import Header from './Header'
import Footer from './Footer'

import '../css/globalStyles.css'
import '../css/home.css'

import homeMainImage from '../assets/images/homepage_main.jpg'
import DSCLogo from '../assets/images/DSCPVGCOETVertical.png'

class Home extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            showLogoInHeader: false,
            headerHeight: 0
        }
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
        window.scroll({top:0, left:0, behavior:'smooth'})
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    onScroll = () =>  {
        if(window.pageYOffset > this.state.headerHeight) {
            this.setState({showLogoInHeader: true})
        } else {
            this.setState({showLogoInHeader: false})
        }
    }

    isBelowMainFrame = () => {
        return window.pageYOffset > window.innerHeight/2
    }

    handleArrowClick = () => {
        window.scroll({
          top: window.innerHeight * 0.8,
          left: 0,
          behavior: 'smooth'  
        })
    }

    
    render() {

        const isBelowMainFrame = this.isBelowMainFrame() ? 'none' : ''
        return (
            <div className="main-container">
                <Header 
                    showLogoInHeader={this.state.showLogoInHeader} 
                    passHeaderHeight={height => this.setState({headerHeight: height})}
                />
                <div className="home-main-content">
                    <div className="home-main-content-inner">
                        <div className="home-main-content-text">
                            <img src={DSCLogo}/>
                            <h4>A community by students , for students</h4>
                            <h6>We at DSC PVGCOET hope to empower young developers discover their talents and help them succeed</h6>
                        </div>
                        <div className="home-main-content-image">
                            <img src={homeMainImage}/>
                        </div>
                    </div>
                    <div className="home-main-content-down-arrow" style={{display: isBelowMainFrame}} onClick={this.handleArrowClick}>
                        <ChevronDown size={35} color='#434343'/>
                    </div>
                </div>

                <div className="hero">
                    <svg viewBox="0 0 14832 55" className="svg-curve"><path d="M7501.307 8.517l-68.043 39.341c-10.632 6.185-23.795 6.185-34.528 0l-68.144-39.34c-8.91-5.173-18.988-8.215-29.316-8.518H0v55h14832V0H7530.671a63.604 63.604 0 0 0-29.364 8.517z"></path></svg>
                </div>

                <div className="about-us-container">
                    <h3>About Us</h3>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Home