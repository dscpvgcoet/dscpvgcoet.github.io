import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { ChevronLeft } from 'react-feather'
import { Link } from 'react-router-dom'

import '../css/events.css'
import { Timer } from '../helpers'
import Header from './Header'

const EventDetails = ({}) => {

    const [currentIndex, setCurrentIndex] = useState(null)
    const [headerHeight, setHeaderHeight] = useState(0)

    useEffect(() => {
        const fullURL = window.location.pathname.split('/')
        console.log(fullURL)
    }, [])

    return (
        
        <Fragment>
            
            <Header 
                showLogoInHeader={true}
                passHeaderHeight={height => setHeaderHeight(height+20)}
            />
           
            <div 
                className="event-details-container"
                style={{paddingTop: headerHeight}}    
            >
                
                    <p className="t2 darkGrey ta-left go-back" style={{margin:'20px 0'}}>
                        <Link to="/events"><ChevronLeft className="darkGrey" size={24}/>back to timeline</Link>
                    </p>
                
                
                <div className="top-headings">

                    <p className="h3 darkText ta-center" style={{margin: 50}}>Name of the event</p>
                    <p className="t2 tanText ta-center">organised by DSC PVGCOET</p>
                    <p className="t2 darkGrey ta-center">26th December 2020</p>

                    {/* <br/>
                    <br/> */}
                    {/* <p className="t3 ta-center darkGrey">SPEAKERS</p> */}

                    {/* <div className='horizontal'>

                        <div className='image-gallery'>

                        </div>

                        <div className='registration-box'>
                            <p className='h5 white ta-center' style={{letterSpacing: 1.2, fontWeight:400}}>Event Registration</p>

                            <p className='t2 ta-center white' style={{marginTop:30}}>event begins in</p>
                            <Timer startDate={new Date().getTime() + 10000000}/>

                            <p className="t1 ta-center white" style={{marginTop:30}}>26th December 2020</p>
                            <p className="t3 ta-center white" style={{marginTop:10}}>VIRTUAL GOOGLE MEET</p>
                            <p className="t3 ta-center white" style={{marginTop:40}}>Over 100 participants were provided guidance from experts and study material to cover major parts of DSA within 2 months</p>

                            <div className='primary-button'><p className='h6 blue'>Sign Me Up</p></div>
                        </div>
                    
                    </div> */}

                    <div className='registration-box'>
                            <p className='h5 white ta-center' style={{letterSpacing: 1.2, fontWeight:400}}>Event Registration</p>

                            <p className='t2 ta-center white' style={{marginTop:30}}>event begins in</p>
                            <Timer startDate={new Date().getTime() + 10000000}/>

                            <p className="t1 ta-center white" style={{marginTop:30}}>26th December 2020</p>
                            <p className="t3 ta-center white" style={{marginTop:10}}>VIRTUAL GOOGLE MEET</p>
                            <p className="t3 ta-center white" style={{marginTop:40}}>Over 100 participants were provided guidance from experts and study material to cover major parts of DSA within 2 months</p>

                            <div className='primary-button'><p className='h6 blue'>Sign Me Up</p></div>
                    </div>

                    <div className='image-gallery'>

                    </div>

                    
                    <div style={{height:1700, backgroundColor:'greenyellow'}}></div>
                   

                </div>
                
            </div>

        </Fragment>
    )
}

export default EventDetails