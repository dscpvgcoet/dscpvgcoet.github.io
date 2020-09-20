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

    
    render() {
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
                    <div className="home-main-content-down-arrow">
                        <ChevronDown size={35} color='#434343'/>
                    </div>
                </div>

                <div style={{height:1500}}></div>
                <Footer/>
                
            </div>
        )
    }
}

export default Home