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
import bulb from '../assets/images/Ideate.svg'
import team from '../assets/images/Communicate2.svg'
import jigsaw from '../assets/images/Collaborate.svg'
import codebuddy from '../assets/images/CodeBuddy.svg'
import ama from '../assets/images/AMA.svg'
import verboselog from '../assets/images/VerboseLog.svg'
import spotify from '../assets/images/spotify.svg'
import person1 from '../assets/images/person1.svg'
import person2 from '../assets/images/person2.svg'
import person3 from '../assets/images/person3.svg'
import podcast from '../assets/images/podcast.svg'
import bulbsmall from '../assets/images/bulb.svg'
import books from '../assets/images/book.svg'
import code from '../assets/images/code.svg'
import r1 from '../assets/images/r1.svg'
import r2 from '../assets/images/r2.svg'
import r3 from '../assets/images/r3.svg'
import r4 from '../assets/images/r4.svg' 
import jig from '../assets/images/jig.svg'
import jigmobile from '../assets/images/jigmobile.svg'
import dscjig from '../assets/images/dsc_jig.svg'
import { Spring } from '../helpers'


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

const featuresInfo = [
    {
        color:'#4285F4',
        image:bulb,
        title:'We ideate',
        description:'We brainstorm for new ideas and chalk up a path to implement them successfully'
    },
    {
        color:'#FBA416',
        image:team,
        title:'We communicate',
        description:'We help to hone intelligent minds and develop a dynamic environment through dialogue'
    },
    {
        color:'#594DD2',
        image:jigsaw,
        title:'We collaborate',
        description:'We work together on projects and empower the whole community'
    },
]

const joinDSCInfo = [
    {
        title:'Fill the form',
        description:'Every year, we circulate a form for interested students to apply for joining DSC. Filling the form is the first step to get started!'
    },
    {
        title:'Give the interview',
        description:'Our core committee will conduct a one-to-one interview with you to assess your skills, interests and passion. Based on this interview, suitable canditates will be shortlisted.'
    },
    {
        title:'Contribute and Learn',
        description:'It doesnt end here. Be an active part of DSC and its events to gain maximum knowledge, experience, and to participate in various projects!'
    },
]

const featuresEventsInfo = [
    {
        title:'CodeBuddy Coding Event',
        description:'Over 100 students were mentored by coding experts over 2 months',
        image:codebuddy
    },
    {
        title:'Ask Me Anything',
        description:'Weekly themed series where the DSC panel answers questions',
        image:ama
    },
]

const featuresBlogsInfo = [
    {
        title:'Creating a WhatsApp Bot from scratch',
        description:'Vinod Kamat',
        image:ama
    },
    {
        title:'How to make a codepen with Python',
        description:'Mandar Bhide',
        image:codebuddy
    },
]



const verboseLogInfo = [
    {
        episode:2,
        title:'Open Source',
        speakers:'Ayush Bhardwaj & Sahil Jha',
        link:'https://open.spotify.com/embed/episode/2jWVnNGVSapAbyYpDlEIZi?theme=0',
        image:'',
    },
    {
        episode:3,
        title:'Approaching GSoC',
        speakers:'Ayush Bhardwaj & Sahil Jha',
        link:'https://open.spotify.com/embed/episode/3tpZ7iur7vnETCecOkQJUb?theme=0',
        image:'',
    },
    {
        episode:4,
        title:'Cyber Security',
        speakers:'Aishwarya Gore',
        link:'https://open.spotify.com/embed/episode/3TevIQyTi1Dm77fjyuVbeI?theme=0',
        image:'',
    },
    {
        episode:5,
        title:'About Hackathons',
        speakers:'Vivek Raja PS',
        link:'https://open.spotify.com/embed/episode/2OyGdQp1FNzqdzkQNqSmfk?theme=0',
        image:'',
    },
]

const FAQInfo = [
    {
        title:'Does GDSC require one to have coding skills/technical expertise?',
        description:'Nah. GDSC is composed of students who are talented in every way, including coding. Think you are good at photography or video editing? Maybe you can speak well? DSC has a place for you. Rather than your technical skills, we prefer to focus on your enthusiasm for the job!'
    },
    {
        title:'Is GDSC related to Google?',
        description:'In a way, but not completely. GDSC is an initiative by Google, however, Google neither promotes nor controls DSC activities.'
    },
    {
        title:'Can I apply if I am from mechanical or electrical department?',
        description:'Ofcourse! GDSC aims to have a diversified committee which means that students from any department can apply to join!'
    },
]


const RenderOpportunity = ({icon, description, index}) => {
    return (
        <div className="grid-opportunities-item" key={index}>
            <div className="opportunities-icon">{icon}</div>
            <p className="t2 darkGrey ta-center">{description}</p>
        </div>
    )
}

const RenderFeature = ({color, image, title, description, index}) => {
    return (
        <div className="feature-item" key={index}>
            <div className="feature-item-left" style={{backgroundColor:color}}>
                <img src={image} className={`feature-${index}`}/>
            </div>
            <div className="feature-item-right">
                <p className="h0 lightGrey">0{index+1}</p>
                <p className="h2 tanText">{title}</p>
                <p className="t2 darkGrey">{description}</p>
            </div>
        </div>
    )
}

const RenderJoinDSCCard = ({title, description, index}) => {
    return (
        <div className="join-dsc-card" key={index}>
            <div className="join-dsc-card-upper">
                <div className="join-dsc-index">
                    <p className="h5 tanText">{index+1}</p>
                </div>
                <p className="h6 tanText">{title}</p>
            </div>
            <p className="t2 darkGrey join-dsc-card-text">{description}</p>
        </div>
    )
}

const RenderEventHomepage = ({title, description="", index, image, text}) => {
    return (
        <div className="event-card">
            <div className="event-card-image">
                <img src={image} className={`event-${index}`}/>
            </div>
            <div className="event-info">
                {/* <p className="h0 tanText" style={{opacity:0.2}}>0{index+1}</p> */}
                <p className="h5 ultraLightGrey ta-center" style={{marginTop: 20}}>{title}</p>
                <p className="t2 lightGrey ta-center" style={{marginTop: 20}}>{description}</p>
                <p className="t2 white ta-center" style={{marginTop: 20}}>{text}</p>
            </div>
        </div>
    )
}

const RenderSpotifyCard = ({episode, title, speakers, link, image, index}) => {
    return (
        
        <div className="spotify-card" key={index}>
            {/* <a href={link} target="_blank">
            <p className="t4 darkGrey">EPISODE {episode}</p>
            <p className="h6 tanText">{title}</p>
            <p className="t3 darkGrey">{speakers}</p>
            </a> */}
            <iframe src={link} width="100%" height="100%" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
    )
}

const RenderFAQCard = ({title, description, index}) => {
    return (
        <div className="faq-card" key={index}>
            <p className="t1 tanText">{title}</p>
            <p className="t2 darkGrey">{description}</p>
        </div>
    )
}


class Home extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            showLogoInHeader: false,
            headerHeight: 0,
            colors:['#FBA416', '#6659E8','#1E76E7'],
            widths:[95, 80, 95],
            activeColor:0,
            activeWidth:0,
            isInfographicVisible:false,
            showVideo:false
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
        const hasPassed = window.scrollY - (window.pageYOffset + document.querySelector('.infographic-container').getBoundingClientRect().top)
        // const hasPassedVid = window.scrollY - (window.pageYOffset + document.querySelector('.video-container').getBoundingClientRect().top)
        this.setState({isInfographicVisible: hasPassed})
        //showVideo: hasPassedVid > (-window.innerHeight/2 - 100)

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
                            
                            <div className="home-main-content-logo-box">
                                <img src={DSCLogo} className="dsc-only-logo"/>
                                <img src={DSCLogoText} className="dsc-only-text"/>
                            </div>
                            
                            <p className="h2 ta-center">A developers community by students, for students</p>
                            

                            <p className="t1 ta-center" style={{marginTop: isMobile ? '30px' : '10vh'}}>We at GDSC PVGCOET hope to empower young developers discover </p>
                                
                            <p className="t1 ta-center">
                                <span>their talents and help them</span>
                                <span className="change-word" style={{backgroundColor: this.state.colors[this.state.activeColor], width: this.state.widths[this.state.activeWidth], boxShadow:`3px 3px 15px #111111`}}>
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
                            <img src={ isMobile ? jigmobile : jig} style={{width:isMobile ? '90%' : '70%', marginTop: isMobile ? 30 : 60, marginBottom: 0}}/>
                            <img src={dscjig} style={{width: isMobile ? 110 : 210, position:'absolute', margin:'auto', paddingLeft: isMobile ? 0 : 80, animation:'float2 10s ease infinite'}}/>
                        </div>
                    
                    </div>
                    
                    <div className="home-main-content-down-arrow" style={{display: isBelowMainFrame}} onClick={this.handleArrowClick}>
                        {/* <ChevronDown size={isMobile ? 65 : 45} color='#878787' className="home-main-content-down-arrow-arrow"/> */}
                        <div className='mouse'></div>
                    </div>

                    
                
                </div>


                <div className="dsc-def-container">
                    <p className="h5 ta-right">What is Google Developer Student's Club<br/> and what does it mean?</p>
                    <p className="t2 ta-left">Google Developers Students Club is a group of like minded individuals with the sole aim of teaching, learning and helping our fellow students to excel. <br/><br/> Every year, DSC conducts various events and activites intended to promote an environment of ideation, help, collaboration and community.</p>
                </div>

                
                <div className="about-us-container">
                    
                    
                    <p className="h3 darkText ta-center" style={{width: isMobile ? '80%' : 'auto'}}>Opportunities GDSC provides</p>
                    
                    <div className="grid-opportunities">
                        {
                            opportunitiesInfo.map((item, index) => {
                                return <RenderOpportunity icon={item.icon} description={item.text} index={index}/>
                            })
                        }
                    </div>



                    
                    <Spring>
                        <div className="blue-container">

                            <p className="h2 white ta-left" style={{width:'40%'}}>Some of our <br/>featured events</p>

                            <div className="join-dsc-container-inner" style={{height:'auto', marginTop: 50}}>
                                {
                                    featuresEventsInfo.map((item, index) => {
                                        return <RenderEventHomepage title={item.title} description={item.description} index={index} image={item.image} text="read more"/>
                                    })
                                }
                            </div>

                            <div className="secondary-button top-right">
                                <p className="t2 tanText">see all</p>
                            </div>
                        </div>
                    </Spring>


                   

                    <div className="verbose-container">
                        
                        <div className="verbose-upper">
                            
                            <div className="verbose-heading">
                                
                                <p className="h1 tanText">VerboseLog</p>
                                <p className="t2 darkGrey">A Spotify podcast by GDSC PVGCOET</p>
                                <a href="https://open.spotify.com/show/2rx52wlDkwR9DlAXq83IYH?si=D8Dn8w8NTEW1X35mD7NaIw" target="_blank">
                                
                                <div className="spotify-button">
                                    
                                    <img src={spotify}/>
                                    <div>
                                        <p className="h7 tanText">Listen on</p>
                                        <p className="h5" style={{color:'#11C30E'}}>Spotify</p>
                                    </div>
                                    
                                </div>
                                </a>
                            </div>
                            
                            <div className="verbose-featured">
                                
                                <iframe src="https://open.spotify.com/embed-podcast/episode/0WDHQzIXLnx97XPbyQ91PZ" width="100%" height="100%" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                            
                            </div>
                        
                        </div>
                        
                        <p className="h6 tanText">Featured episodes</p>
                        
                        <div className="verbose-lower">
                            {
                                verboseLogInfo.map(({title, speakers, episode, link, image}, index) => {
                                    return <RenderSpotifyCard title={title} speakers={speakers} episode={episode} link={link} image={image} index={index}/>
                                })
                            }
                        </div>
                    </div>

                    
                    {/* <p className="h3 darkText ta-center" style={{marginTop: 100}}>Watch what we do</p>
                    
                    <div className={this.state.showVideo ? 'animate-vid video-container' : 'video-container'}>
                        <video 
                            src="https://media.w3.org/2010/05/sintel/trailer.mp4" 
                            muted 
                            autoPlay 
                            loop>
                        </video>
                    </div> */}

                    <p className="h3 darkText ta-center" style={{marginTop: 100}}>What GDSC does and how</p>
                   

                    <div className="features">
                        {
                            featuresInfo.map((item, index) => {
                                return <RenderFeature color={item.color} description={item.description} index={index} title={item.title} image={item.image}/>
                            })
                        }
                    </div>


                    <div className="join-dsc-container">

                        <p className="h3 darkText ta-center" style={{marginTop:50}}>How do I join GDSC ?</p>
                        <p className="t2 darkGrey ta-center" style={{marginTop:50, width: isMobile ? '100%' : '60%'}}>DSC is open to any student, ranging from amateur developers who are just getting started, to experienced developers who want to further hone and showcase their skills</p>
                        <div className="join-dsc-container-inner">
                            {
                                joinDSCInfo.map((item, index) => {
                                    return <RenderJoinDSCCard title={item.title} description={item.description} index={index}/>
                                })
                            }
                        </div>
                    </div>

                    

                    <div className="infographic-container">
                        
                        <infograph className="purple"><p className="h4" style={{color:'white'}}>Google Developer <br/> Students Club</p></infograph>
                        <infograph className={this.state.isInfographicVisible > -100 ? "faint move-down-3":"faint"}><p className="h5 tanText">Creativity</p></infograph>
                        <infograph className="green"><img src={person1}/></infograph>
                        <infograph></infograph>
                        <infograph></infograph>
                        <infograph></infograph>
                        <infograph></infograph>
                        <infograph></infograph>
                        <infograph className="bluebg"><p className="h5 tanText">Ambition</p></infograph>
                        <infograph className="yellow"><img src={code} style={{width:'40%'}}/></infograph>
                        <infograph></infograph>
                        <infograph></infograph>
                        <infograph></infograph>
                        <infograph></infograph>
                        <infograph className={this.state.isInfographicVisible > 50 ? "faint move-down-2" : "faint"}><img src={bulbsmall}/></infograph>
                        <infograph></infograph>
                        <infograph></infograph>
                        <infograph className="faint"><img src={books}/></infograph>
                        <infograph className={this.state.isInfographicVisible > 70 ?"green move-right-2":"green"}><p className="h5 tanText">Empower</p></infograph>
                        <infograph></infograph>
                        <infograph className={this.state.isInfographicVisible > 120 ? "purple move-up-2":"purple"}><img src={podcast}/></infograph>
                        <infograph className="green"><p className="h5 tanText">Implement</p></infograph>
                        <infograph></infograph>
                        <infograph className="yellow"><img src={person2}/></infograph>
                        <infograph className={this.state.isInfographicVisible > 150 ? "purple move-up" : "purple"}><p className="h5 tanText">Ideate</p></infograph>
                        <infograph className="orange"><img src={DSCLogo}/></infograph>
                        <infograph></infograph>
                        <infograph className={this.state.isInfographicVisible > 150?  "faint move-down":"faint"}><img src={person3}/></infograph>
                        <infograph></infograph>
                        <infograph></infograph>
                        <infograph></infograph>
                        <infograph></infograph>
                        <infograph></infograph>
                        <infograph></infograph>
                        <infograph className={this.state.isInfographicVisible > 300 ? "green move-up-2" : "green"}><p className="h5 tanText" style={{color:'#fff'}}><span style={{fontSize: 40}}>16</span><br/>committee members</p></infograph>
                        <infograph></infograph>
                        <infograph className="yellow"><p className="h5 tanText">Think</p></infograph>
                    
                        <p className="h3 tanText i1">At GDSC, there's a place for everyone</p>
                    
                    </div>

                    

                </div>


                <div className="faq-container">
                    
                    <p className="h3 darkText ta-center" style={{marginBottom: 60}}>Frequently Asked Questions</p>

                    {
                        FAQInfo.map((item, index) => {
                            return <RenderFAQCard title={item.title} description={item.description} index={index}/>
                        })
                    }
                </div>


                {/* <Spring>
                    <div className="blue-container" style={{backgroundColor:'#06956B'}}>

                        <p className="h2 white ta-left" style={{width:'40%'}}>Some of our <br/>featured blogs</p>

                        <div className="join-dsc-container-inner" style={{height:'auto', marginTop: 50}}>
                            {
                                featuresBlogsInfo.map((item, index) => {
                                    return <RenderEventHomepage title={item.title} description={item.description} index={index} image={item.image} text="read blog"/>
                                })
                            }
                        </div>

                        <div className="secondary-button top-right">
                            <p className="t2 tanText">see all</p>
                        </div>
                    </div>
                </Spring> */}



                {/* Reviews Section */}
                <div className="reviews-container">
                
                    <p className="h2 tanText ta-center">Hear it from our team</p>
                
                    <img src={r1} className="review r1"/>
                    <img src={r2} className="review r2"/>
                    <img src={r3} className="review r3"/>
                    <img src={r4} className="review r4"/>
                </div>

                
                
                
                <p className="h2 tanText ta-center" style={{marginTop:160}}>Collaboration is a l<span style={{color:'#5018D8'}}><span style={{letterSpacing:-8}}>o</span>o</span>p, <br/> not a cycle.</p>
                <p className="t1 darkGrey ta-center join-line" style={{marginTop: 20}}>Join DSC PVGCOET today to be a part of this! &#128512;</p>

                
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
                
                <Footer/>

                
                
                
                {/* SVG Gradients */}
                



            </div>
        )
    }
}

export default Home
