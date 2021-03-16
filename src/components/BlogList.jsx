import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Blogs from './Blogs'
import { Fragment } from 'react'
import eventhero from '../assets/images/events-hero.svg'

import '../css/blogs.css'


const blogs = [
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


const RenderBlog = ({title, description, mainImage, author, tags, authorPhoto, index}) => {
    
    const backgroundStyle = {
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1.0), 30%, rgba(0, 0, 0, 0.0)), 
    url(${mainImage})`,
        backgroundSize: "cover",
    }

    const descriptionShort = description.length > 30 ? description.slice(0,30).concat('...') : description.concat('...')

    return (
        <div 
            className="blog-card"
            style={backgroundStyle}
        >
            <p className="t1 darkText ta-left">{title}</p>
            <p className="t3 darkGrey ta-left">{descriptionShort}</p>

            <div className="author">
                <img src={authorPhoto}/>
                <p className="t2 tanText">{author}</p>
            </div>
        </div>
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
        return (
            
            <Fragment>

                <Header 
                    showLogoInHeader={true}                
                    passHeaderHeight={height => this.setState({headerHeight: height})} 
                />  

                

                    <div className="events-hero">
                        
                        <div className="home-main-content-inner" style={{paddingTop:40}}>
                            <div className="home-main-content-text">
                                
                                <p className="h4 darkText ta-center">Blogs from DSC PVGCOET team</p>
                                <p className="t1 ta-center" style={{marginTop: '10vh'}}>Curated blogs, articles and tutorials <br/> written by DSC members</p>
                                
                            </div>
                            
                            <div className="home-main-content-image">
                                <img src={eventhero} style={{width:'55%', margin:'auto', marginTop:'10%'}}/>
                                
                            </div>
                        
                        </div>
                    </div>        
                
                <div className='blogs-main-container'>

                    <p className="t0 darkText ta-center" style={{height: 50, letterSpacing:2, margin:0, fontSize:25}}>Read the blogs you're interested in</p>

                    <div className="filter-container">
                        {
                            this.state.filters.map((filter, index) => {
                                return <RenderFilter filterID={index} filters={this.state.filters}/>
                            })
                        }
                    </div>

                    <div className="blog-list">
                        {
                            blogs.map(({title, description, mainImage, tags, author, authorPhoto}, index) => {
                                return <RenderBlog title={title} description={description} mainImage={mainImage} tags={tags} author={author} authorPhoto={authorPhoto} index={index}/>
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