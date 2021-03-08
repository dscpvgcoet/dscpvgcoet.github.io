import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { ChevronLeft } from 'react-feather'
import { Link } from 'react-router-dom'

import '../css/events.css'
import { Timer } from '../helpers'
import Footer from './Footer'
import Header from './Header'

const EventDetails = ({}) => {

    const [currentIndex, setCurrentIndex] = useState(null)
    const [headerHeight, setHeaderHeight] = useState(0)

    useEffect(() => {
        window.scroll({
            top:0,
        })
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

                   

                    <div className='registration-box'>
                            <p className='h5 white ta-center' style={{letterSpacing: 1.2, fontWeight:400}}>Event Registration</p>

                            <p className='t2 ta-center white' style={{marginTop:30}}>event begins in</p>
                            <Timer startDate={new Date().getTime() + 10000000}/>

                            <p className="t1 ta-center white" style={{marginTop:30}}>26th December 2020</p>
                            <p className="t3 ta-center white" style={{marginTop:10}}>VIRTUAL GOOGLE MEET</p>
                            <p className="t3 ta-center white" style={{marginTop:40}}>Over 100 participants were provided guidance from experts and study material to cover major parts of DSA within 2 months</p>

                            <div className='primary-button'><p className='h6 blue'>Sign Me Up</p></div>
                    </div>

                    <div className='featured-media'>

                    </div>

                    
                    <div className='event-content'>
                        <p className='t2 darkGrey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse metus eros, pulvinar sed velit nec, volutpat luctus lacus. Morbi neque lorem, dictum sed pharetra pretium, pharetra sit amet diam. Pellentesque et bibendum enim, ac laoreet tellus. In sed mollis nunc, in tincidunt ligula. Phasellus justo lorem, rhoncus at maximus non, molestie vestibulum nunc. Sed est erat, convallis nec est vitae, ultrices lobortis ipsum. Nunc consequat sapien at eros rutrum, ac dictum lectus vestibulum. Curabitur ut lacus sed justo rhoncus ullamcorper. Proin turpis turpis, placerat quis tristique et, dapibus sit amet arcu. Aliquam vitae dolor posuere, consequat diam ac, finibus libero. Donec sollicitudin elementum varius. Morbi lorem leo, malesuada molestie metus rutrum, dictum maximus tellus. Sed finibus orci non augue mattis, id imperdiet erat fringilla. Quisque in ultricies dolor. Maecenas nulla leo, vestibulum quis mauris et, posuere iaculis nisi.
                                <br/><br/><br/>
                                Donec mauris enim, tempor eget convallis ac, ultricies et diam. Praesent auctor magna at est vestibulum tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce eleifend mattis sem eu suscipit. Sed gravida sapien sit amet odio porttitor tincidunt. Nullam quis dolor nisl. Nam laoreet, risus id fermentum commodo, dui lectus vulputate tortor, commodo volutpat turpis leo eu risus. Aenean viverra cursus ligula sit amet sodales. Suspendisse fermentum consectetur magna vitae commodo. Nullam vehicula, sem id rutrum sagittis, lorem ligula posuere enim, et posuere diam tellus in eros. Nam ac elit gravida, cursus risus et, accumsan ante. Curabitur eu imperdiet tellus. Cras mollis aliquam justo nec aliquet. Cras ultrices elit sed nisl vestibulum, vitae suscipit nunc dictum.
                                <br/><br/><br/>
                                In eu dui at diam egestas ullamcorper eget in orci. Maecenas nec vulputate risus. Duis dictum tristique ligula quis tempus. Etiam tempor metus sit amet leo convallis mattis. Quisque feugiat, ligula sit amet condimentum tempor, nisl ex euismod nibh, a egestas lorem leo et augue. Nullam ligula mi, gravida nec nunc suscipit, sollicitudin imperdiet ante. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                    </div>
                   

                </div>

                <p className='h4 darkText ta-center' style={{margin:'50px auto'}}>Image gallery</p>
                
            </div>

            <Footer/>

        </Fragment>
    )
}

export default EventDetails