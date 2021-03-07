import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { ThemeProvider } from '../context/ThemeContext'

import Home from './Home'
import OurTeam from './OurTeam'
import BlogList from './BlogList'
import EventsTimeline from './EventsTimeline'
import Contact from './Contact'
import EventDetails from './EventDetails'

class App extends React.Component {

    render() {
        return (
            <ThemeProvider>
                <Router>
                    <div>
                        <Route path="/" exact component={Home}/>
                        <Route path="/team" exact component={OurTeam}/>
                        <Route path="/blogs" exact component={BlogList}/>
                        <Route path="/events" exact component={EventsTimeline}/>
                        <Route path="/event/*" exact component={EventDetails}/>
                        <Route path="/contact" exact component={Contact}/>
                        
                    </div>
                </Router>
            </ThemeProvider>
        )
    }
}

export default App
