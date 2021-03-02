import React from 'react'
import { Box, Briefcase, ChevronDown, FastForward, Globe, ThumbsUp, TrendingUp, Users } from 'react-feather'
import { isMobile, BrowserView, MobileView} from 'react-device-detect'

import Header from './Header'
import Footer from './Footer'

import '../css/globalStyles.css'
import '../css/home.css'

import homeMainImage from '../assets/images/homepage_main.jpg'
import DSCLogo from '../assets/images/DSCPVGCOETOnlyLogo.svg'
import DSCLogoText from '../assets/images/DSCPVGCOETOnlyTextWhite.svg'
import bulb from '../assets/images/lightbulb.png'
import team from '../assets/images/team.png'
import jigsaw from '../assets/images/jigsaw.png'


const opportunitiesInfo = [
    {
        icon: <ThumbsUp style={{stroke: "url(#gradient-1)"}}/>,
        text: "Growth of knowledge and technologies and more through peer to peer workshops"
    },
    {
        icon: <Briefcase style={{stroke: "url(#gradient-2)"}}/>,
        text: "Relevant industry experience by solving problems for local organizations"
    },
    {
        icon: <Globe style={{stroke: "url(#gradient-2)"}}/>,
        text: "Showcase prototypes and solutions to local communities, industries and organizations"
    },
    {
        icon: <TrendingUp style={{stroke: "url(#gradient-1)"}}/>,
        text: "Inspiration to become excellent developers and changemakers from sharing success stories"
    },
]

const RenderOpportunity = ({icon, description, index}) => {
    return (
        <div className="grid-opportunities-item" key={index}>
            <div className="opportunities-icon">{icon}</div>
            <p className="t2 grey ta-center">{description}</p>
        </div>
    )
}


class Home extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            showLogoInHeader: false,
            headerHeight: 0,
            colors:['#FBA416', '#594DD2','#1E76E7'],
            widths:[95, 80, 95],
            activeColor:0,
            activeWidth:0
        }
    }
    
    componentDidMount() {
        
        window.addEventListener('scroll', this.onScroll);
        window.scroll({top:0, left:0, behavior:'smooth'})

        setInterval(() => {
            this.setState({activeColor : (this.state.activeColor + 1) % this.state.colors.length})
            this.setState({activeWidth : (this.state.activeWidth + 1) % this.state.widths.length})
        }, 2000)
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
                    <div className="home-main-content-inner" style={{paddingTop: this.state.headerHeight}}>
                        <div className="home-main-content-text">
                            
                            <div className="home-main-content-logo-box">
                                <img src={DSCLogo} className="dsc-only-logo"/>
                                <img src={DSCLogoText} className="dsc-only-text"/>
                            </div>
                            
                            <p className="h2 ta-center">A developers community by students, for students</p>
                            

                            <p className="t1 ta-center" style={{marginTop: '10vh'}}>We at DSC PVGCOET hope to empower young developers discover </p>
                                
                            <p className="t1 ta-center">
                                <span>their talents and help them</span>
                                <span className="change-word" style={{backgroundColor: this.state.colors[this.state.activeColor], width: this.state.widths[this.state.activeWidth]}}>
                                    <ul className="flip">
                                        <li>succeed</li>
                                        <li>ideate</li>
                                        <li>conquer</li>
                                    </ul>
                                </span>
                            </p>

                            
                        </div>
                        
                        <div className="home-main-content-image">
                            {/* <img src={homeMainImage}/> */}
                        </div>
                    
                    </div>
                    
                    <div className="home-main-content-down-arrow" style={{display: isBelowMainFrame}} onClick={this.handleArrowClick}>
                        <ChevronDown size={isMobile ? 65 : 45} color='#434343' className="home-main-content-down-arrow-arrow"/>
                    </div>
                
                </div>


                <div className="dsc-def-container">
                    <p className="h5 ta-right">What is Developer Student's Club<br/> and what does it mean?</p>
                    <p className="t2 ta-left">Developers Students Club is a group of like minded individuals with the sole aim of teaching, learning and helping our fellow students to excel. <br/><br/> Every year, DSC conducts various events and activites intended to promote an environment of ideation, help, collaboration and community.</p>
                </div>

                
                <div className="about-us-container">
                    
                    
                    <p className="h3 darkText">Opportunities DSC provides</p>
                    
                    <div className="grid-opportunities">
                        {
                            opportunitiesInfo.map((item, index) => {
                                return <RenderOpportunity icon={item.icon} description={item.text} index={index}/>
                            })
                        }
                    </div>

                   
                    
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
                            <h4 style={{color: '#17BA08'}}>We inspire</h4>
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
                    <h4>Who can be a part of DSC?</h4>
                    <p>Anyone. Yep, that's right.</p>
                    <p style={{fontSize: 15}}>DSC is open to any student, ranging from amateur developers who are just getting started, to experienced developers who want to further hone and showcase their skills</p>
                    <br/>
                    <h4>What do we do?</h4>
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
                {/* <div style={{height: 500, backgroundColor: '#fff'}}>

                </div> */}
                <Footer/>

                <svg width="0" height="0">
                    <linearGradient id="gradient-1" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop stopColor="#4111A1" offset="0%" />
                        <stop stopColor="#06DEDA" offset="30%" />
                        <stop stopColor="#066DDE" offset="100%" />
                    </linearGradient>
                </svg>
                <svg width="0" height="0">
                    <linearGradient id="gradient-2" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop stopColor="#066DDE" offset="10%" />
                        <stop stopColor="#06DEDA" offset="60%" />
                        <stop stopColor="#0C9218" offset="100%" />
                    </linearGradient>
                </svg>
            </div>
        )
    }
}

export default Home
