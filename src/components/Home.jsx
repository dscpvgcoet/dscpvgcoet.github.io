import React from 'react'

import Header from './Header'
import Footer from './Footer'

import '../css/globalStyles.css'

class Home extends React.Component {

    onScroll = () => {
        console.log('scroll event')
    }

    render() {
        return (
            <div className="main-container" onScroll={this.onScroll}>
                <Header/>
                this is homepage
                <div style={{height:1500}}></div>
                <Footer/>
                
            </div>
        )
    }
}

export default Home