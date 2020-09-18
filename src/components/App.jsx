import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import OurTeam from './OurTeam'
import BlogList from './BlogList'

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route path="/" exact component={Home}/>
                        <Route path="/our-team" exact component={OurTeam}/>
                        <Route path="/blog-list" exact component={BlogList}/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App