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


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 3000);
    }

    render() {
        return !this.state.isLoading ? (
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
