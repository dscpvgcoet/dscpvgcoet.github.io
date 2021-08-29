import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Blogs from './Blogs'
import { Fragment } from 'react'
import eventhero from '../assets/images/events-hero.svg'

import '../css/blogs.css'
import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import * as blogs from '../blogs.json'

const blogsF = [
    {
        title:'How to get started with Github',
        description:'lorem impsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut, ea commodo, sed do eiusmod tempor incidid',
        mainImage:'https://picsum.photos/200/300',
        author: 'Yatish Kelkar',
        tags:['github', 'tech hacks'],
        authorPhoto: 'https://picsum.photos/100'
    },
    {
        title:'How to get started with Github',
        description:'lorem impsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut, ea commodo, sed do eiusmod tempor incidid',
        mainImage:'https://picsum.photos/200/300',
        author: 'Yatish Kelkar',
        tags:['github', 'tech hacks'],
        authorPhoto: 'https://picsum.photos/100'
    },
    {
        title:'How to get started with Github',
        description:'lorem impsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut, ea commodo, sed do eiusmod tempor incidid',
        mainImage:'https://picsum.photos/200/300',
        author: 'Yatish Kelkar',
        tags:['github', 'tech hacks'],
        authorPhoto: 'https://picsum.photos/100'
    },
    {
        title:'How to get started with Github',
        description:'lorem impsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut, ea commodo, sed do eiusmod tempor incidid',
        mainImage:'https://picsum.photos/200/300',
        author: 'Yatish Kelkar',
        tags:['github', 'tech hacks'],
        authorPhoto: 'https://picsum.photos/100'
    },
    {
        title:'How to get started with Github',
        description:'lorem impsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut, ea commodo, sed do eiusmod tempor incidid',
        mainImage:'https://picsum.photos/200/300',
        author: 'Yatish Kelkar',
        tags:['github', 'tech hacks'],
        authorPhoto: 'https://picsum.photos/100'
    },
    {
        title:'How to get started with Github',
        description:'lorem impsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut, ea commodo, sed do eiusmod tempor incidid',
        mainImage:'https://picsum.photos/200/300',
        author: 'Yatish Kelkar',
        tags:['github', 'tech hacks'],
        authorPhoto: 'https://picsum.photos/100'
    },
]


const RenderBlog = ({title, description, mainImage, author, tags, authorPhoto, index, link}) => {
    
    const backgroundStyle = {
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1.0), 40%, rgba(0, 0, 0, 0.0) 60%), 
    url(${mainImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        alignSelf: "center",
        backgroundPosition: "center top"
    }

    const descriptionShort = description.length > 30 ? description.slice(0,30).concat('...') : description.concat('...')

    return (
        <a href={link} target="_blank">
            <div 
                className="blog-card"
                style={backgroundStyle}
            >
                <p className="h5 darkText ta-left">{title}</p>
            
                <div className="author">
                    <img src={authorPhoto}/>
                    <p className="t2 tanText">{author}</p>
                </div>
            </div>
        </a>
    )
}


const RenderFilter = ({filterID, filters}) => {
    return (
        <div className="filter-option">
            <p className="t2 darkGrey">{filters[filterID]}</p>
        </div>
    )
}


class BlogList extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            headerHeight:0, 
            filters:['app development', 'github','web','tech hacks','design','flutter','react','coding']
        }
    }

    componentDidMount() {
        window.scroll({top: 0, left: 0, behavior:'smooth'})
    }
    
    
    render() {
        console.log(blogs)
        return (
            
            <Fragment>

                <Header 
                    showLogoInHeader={true}                
                    passHeaderHeight={height => this.setState({headerHeight: height})} 
                />  

                

                    <div className="events-hero">
                        
                        <div className="home-main-content-inner" style={{paddingTop:100}}>
                            <div className="home-main-content-text" style={{width:'100%', marginLeft: 0, paddingLeft: 0}}>
                                
                                <p className="h4 darkText ta-center">Blogs from GDSC PVGCOET team</p>
                                <p className="t1 ta-center" style={{marginTop: isMobile ? '20px' : '10vh'}}>Curated blogs, articles and tutorials written by GDSC members</p>
                                
                            </div>
                            
                            {/* <div className="home-main-content-image">
                                <img src={eventhero} style={{width: isMobile ? '90%' : '55%', margin:'auto', marginTop:'10%'}}/>
                                
                            </div> */}
                        
                        </div>
                    </div>        
                
                <div className='blogs-main-container'>

                    {/* <p className="t0 darkText ta-center" style={{height: 50, letterSpacing:2, margin:0, fontSize: isMobile ? 17: 25, width : isMobile ? '70%' : 'auto'}}>Read the blogs you're interested in</p> */}

                    {/* <div className="filter-container">
                        {
                            this.state.filters.map((filter, index) => {
                                return <RenderFilter filterID={index} filters={this.state.filters}/>
                            })
                        }
                    </div> */}

                    <div className="blog-list">
                        {
                            blogs.default.map(({title, imageURL, blogLink, name, authorPhoto=""}, index) => {
                                return <RenderBlog title={title} description="" mainImage={imageURL} author={name} authorPhoto={authorPhoto} index={index} link={blogLink}/>
                            })
                        }
                    </div>

                </div>

                <Footer/>

            </Fragment>
            
        )
    }
}

export default BlogList