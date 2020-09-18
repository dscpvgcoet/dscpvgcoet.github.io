import React from 'react'

import Header from './Header'
import Footer from './Footer'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                this is homepage
                <Footer/>
            </div>
        )
    }
}

export default Home