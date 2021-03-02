import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { ThemeProvider } from '../context/ThemeContext'

import Home from './Home'
import OurTeam from './OurTeam'
import BlogList from './BlogList'

class App extends React.Component {

    render() {
        return (
            <ThemeProvider>
                <Router>
                    <div>
                        <Route path="/" exact component={Home}/>
                        <Route path="/team" exact component={OurTeam}/>
                        <Route path="/blogs" exact component={BlogList}/>
                    </div>
                </Router>
            </ThemeProvider>
        )
    }
}

export default App
