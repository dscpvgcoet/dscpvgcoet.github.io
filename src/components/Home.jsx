import React from 'react'
import { ChevronDown } from 'react-feather'

import Header from './Header'
import Footer from './Footer'

import '../css/globalStyles.css'
import '../css/home.css'

import homeMainImage from '../assets/images/homepage_main.jpg'
import DSCLogo from '../assets/images/DSCPVGCOETVertical.png'
import bulb from '../assets/images/lightbulb.png'
import team from '../assets/images/team.png'
import jigsaw from '../assets/images/jigsaw.png'

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
                        <ChevronDown size={45} color='#434343' className="home-main-content-down-arrow-arrow"/>
                    </div>
                </div>

                <div className="hero">
                    <svg viewBox="0 0 14832 55" className="svg-curve"><path d="M7501.307 8.517l-68.043 39.341c-10.632 6.185-23.795 6.185-34.528 0l-68.144-39.34c-8.91-5.173-18.988-8.215-29.316-8.518H0v55h14832V0H7530.671a63.604 63.604 0 0 0-29.364 8.517z"></path></svg>
                </div>

                <div className="about-us-container">
                    <h3>About Us</h3>
                    <p>Developers Students Club is a group of like minded individuals with the sole aim of teaching, learning and helping our fellow students to excel</p>
                    <div className="features">
                        <div className="feature-item">
                            <div className="feature-item-image">
                                <img src={bulb}/>
                            </div>
                            <h4 style={{color: 'gold'}}>We ideate</h4>
                            <h6>We brainstorm for new ideas and chalk up a path to implement it</h6>
                        </div>
                        <div className="feature-item">
                            <div className="feature-item-image">
                                <img src={jigsaw}/>
                            </div>
                            <h4 style={{color: '#0BC70B'}}>We inspire</h4>
                            <h6>We help to hone intelligent minds and develop a dynamic environment</h6>
                        </div>
                        <div className="feature-item">
                            <div className="feature-item-image">
                                <img src={team}/>
                            </div>
                            <h4 style={{color: '#4285F4'}}>We collaborate</h4>
                            <h6>We work together on projects and empower the whole community</h6>
                        </div>
                    </div>
                    <h4>Who can be a part of DSC ?</h4>
                    <p>Anyone. Yep, that's right.</p>
                    <p style={{fontSize: 15}}>DSC is open to any student, ranging from amateur developers who are just getting started, to experienced developers who want to further hone and showcase their skills</p>
                    <br/>
                    <h4>What do we do ?</h4>
                    <p style={{fontSize:15}}>
                        DSC PVG's COET comprises of a very diverse community with members from various displines of engineering and expertise working towards this initiative. 
                        <br/>
                        <br/>
                        Here at DSC PVG's COET, we plan for students to get to work with a remarkably dedicated group of developers, collaborate on projects, organise workshops, represent us in competitions and hackathons and much more. 
                        <br/>
                        <br/>
                        Students also get to interact with industry experts as well as experts within and around our community, who are extremely keen to be in touch with us and guide us.
                    </p>
                </div>
                <div style={{height: 500, backgroundColor: '#fff'}}>

                </div>
                <Footer/>
            </div>
        )
    }
}

export default Home
