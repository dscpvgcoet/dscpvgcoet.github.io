import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import { ThemeProvider } from '../context/ThemeContext'

import Home from './Home'
import OurTeam from './OurTeam'
import BlogList from './BlogList'
import EventsTimeline from './EventsTimeline'
import Contact from './Contact'
import EventDetails from './EventDetails'
import Resources from './Resources'
import Blog from './Blogs'
import Archives from './Archive'

import GDSCGif from '../assets/gdsc-logo.gif'

import '../css/globalStyles.css'

const fs = require('fs')


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            imagesLoaded: false
        }
    }

    componentDidMount() {
        this.preloadImages()
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 3000);
    }

    preloadImages() {   
        const importAll = r => r.keys().map(r)
        const loadImage = imageLink => {
            return new Promise((resolve, reject) => {
                const imageToLoad = new Image()
                imageToLoad.src = imageLink
                imageToLoad.onload = () => {
                    setTimeout(() => {
                        resolve(imageLink)
                    }, 2000)
                }
                imageToLoad.onerror = err => reject(err)
            })
        }
          
        const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/))
        
        Promise.all(images.map(image => loadImage(image)))
        .then(() => this.setState({imagesLoaded: true}))
    }

    render() {
        return !this.state.isLoading && this.state.imagesLoaded ? (
            <ThemeProvider>
                <Router>
                    <div>
                        <Route path="/" exact component={Home}/>
                        <Route path="/team" exact component={OurTeam}/>
                        <Route path="/blogs" exact component={BlogList}/>
                        <Route path="/blogs/*" exact component={Blog}/>
                        <Route path="/events" exact component={EventsTimeline}/>
                        <Route path="/event/*" exact component={EventDetails}/>
                        <Route path="/resources" exact component={Resources}/>
                        <Route path="/contact" exact component={Contact}/>
                        <Route path="/archives" exact component={Archives}/>
                        
                    </div>
                </Router>
            </ThemeProvider>
        ) : (
            <div className="loading-screen">
                <img src={GDSCGif} alt="loading...." />
            </div>
        )
    }
}

export default App
