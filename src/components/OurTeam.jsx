import React from 'react'

import Header from './Header'
import Footer from './Footer'
import { DSCLeadInformation, teamInformation } from '../teamInformation'
import team from '../assets/images/team.jpg'

import '../css/our-team.css'

class OurTeam extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            headerHeight: 0
        }
    }

    componentDidMount() {
        window.scroll({top: 0, left: 0, behavior:'smooth'})
    }

    renderCoreTeam = (start, end) => {
        return teamInformation.core.slice(start,end).map(member => {
            return (
                <div className="core-member-box">
                    <div className="core-member-photo">
                        <img src={member.photo.replace('open?', 'uc?')}/>
                    </div>
                    <h3>{member.name}</h3>    
                    <p>{member.position}</p>
                </div>
            )
        })
    }

    renderCompleteTeam = (start, end) => {
        return teamInformation.team.slice(start,end).map(member => {
            return (
                <div className="complete-member-box">
                    {/* <div className="complete-member-photo-box">
                        <div className="complete-member-photo-box-photo">
                            <img src={member.photo}/>
                        </div>
                        
                    </div> */}
                    <div>
                        <h3>{member.name}</h3>    
                        <p>{member.position}</p>
                    </div>
                </div>
            )
        })
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
                        <img src={team} style={{width: '40%', objectFit:'cover', marginBottom: 0, display: 'none'}}/>
                    </div>
                </div>
                <div className="team-members-core">
                    <h3 className="team-title">Core Team</h3>
                    <div className="team-members-core-inner">
                        {this.renderCoreTeam(0,4)}
                    </div>
                    <div className="team-members-core-inner">
                        {this.renderCoreTeam(4,8)}
                    </div>
                    <h3 className="team-title">Complete Team</h3>
                    <div className="team-members-core-inner">
                        {this.renderCompleteTeam(0,6)}
                    </div>
                    <div className="team-members-core-inner">
                        {this.renderCompleteTeam(6,12)}
                    </div>
                    <div className="team-members-core-inner">
                        {this.renderCompleteTeam(12,18)}
                    </div>
                    <div className="team-members-core-inner">
                        {this.renderCompleteTeam(18,24)}
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default OurTeam