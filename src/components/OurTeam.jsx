import React from 'react'

import Header from './Header'
import Footer from './Footer'

import '../css/our-team.css'

class OurTeam extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            headerHeight: 0
        }
    }

    render() {

        console.log(this.state.headerHeight)
        return (
            
            <div>
                <Header 
                    showLogoInHeader={true}
                    passHeaderHeight={height => this.setState({headerHeight: height})}
                />
                <div className="team-main-container" style={{paddingTop: this.state.headerHeight + 20}}>
                    <div className="left-side">
                        <h2>Our Team</h2>
                        <p>Presenting our passionate team for Developer Students Club PVGCOET 2020-2021</p>
                    </div>
                    <div className="right-side">
nsodf
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default OurTeam