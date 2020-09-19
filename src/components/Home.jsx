import React from 'react'

import Header from './Header'
import Footer from './Footer'

import '../css/globalStyles.css'
import '../css/home.css'
import homeMainImage from '../assets/images/homepage_main.jpg'

class Home extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            showLogoInHeader: false,
            headerHeight: 0
        }
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
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
    }

    
    render() {
        return (
            <div className="main-container">
                <Header 
                    showLogoInHeader={this.state.showLogoInHeader} 
                    passHeaderHeight={height => this.setState({headerHeight: height})}
                />
                <div className="home-main-content">
                    <div className="home-main-content-text">

                    </div>
                    <div className="home-main-content-image">
                        <img src={homeMainImage}/>
                    </div>
                </div>

                <div style={{height:1500}}></div>
                <Footer/>
                
            </div>
        )
    }
}

export default Home