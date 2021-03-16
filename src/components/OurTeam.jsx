import React from 'react'
import { isMobile, BrowserView, MobileView } from 'react-device-detect'

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
                    <p className="h6 tanText ta-center">{member.name}</p>    
                    <p className="t2 darkGrey ta-center">{member.position}</p>
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
                    {/* <div> */}
                        <p className="h6 tanText ta-center">{member.name}</p>    
                        <p className="t2 darkGrey ta-center">{member.position}</p>
                    {/* </div> */}
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
                <div className="team-main-container" style={{paddingTop: isMobile? 0 : this.state.headerHeight + 100}}>
                    <div className="left-side">
                        <p className="h3 darkText">Our Team</p>
                        <p className="t2 darkGrey">Presenting our passionate team for Developer Students Club PVGCOET 2020-2021</p>
                    </div>
                </div>
                <div className="team-members-core">
                    <p className="team-title h6 tanText ta-center">Core Team</p>
                    <div className="team-members-core-inner">
                        {this.renderCoreTeam(0,4)}
                    </div>
                    <div className="team-members-core-inner">
                        {this.renderCoreTeam(4,8)}
                    </div>
                    <p className="team-title h6 tanText ta-center">Complete Team</p>
                    <BrowserView>
                        <div className="team-members-core-inner">
                            {this.renderCompleteTeam(0,4)}
                        </div>
                        <div className="team-members-core-inner">
                            {this.renderCompleteTeam(4,8)}
                        </div>
                        <div className="team-members-core-inner">
                            {this.renderCompleteTeam(8,12)}
                        </div>
                        <div className="team-members-core-inner">
                            {this.renderCompleteTeam(12,16)}
                        </div>
                        <div className="team-members-core-inner">
                            {this.renderCompleteTeam(16,20)}
                        </div>
                        <div className="team-members-core-inner">
                            {this.renderCompleteTeam(20,24)}
                        </div>
                        
                    </BrowserView>
                    <MobileView>
                        <div className="team-members-core-inner-mobile">
                            {this.renderCompleteTeam(0,6)}
                        </div>
                        <div className="team-members-core-inner-mobile">
                            {this.renderCompleteTeam(6,12)}
                        </div>
                        <div className="team-members-core-inner-mobile">
                            {this.renderCompleteTeam(12,18)}
                        </div>
                        <div className="team-members-core-inner-mobile">
                            {this.renderCompleteTeam(18,24)}
                    </div>
                    </MobileView>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default OurTeam