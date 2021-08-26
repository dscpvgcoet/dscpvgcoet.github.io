import React from 'react'

import Header from './Header'
import Footer from './Footer'
import archiveInfo from '../archiveInfo'
import '../css/archive.css'
import { ArrowUpLeft, ArrowUpRight, ExternalLink } from 'react-feather'
import { isMobile } from 'react-device-detect'

const Archives = () => {

  const backgroundStyle = {
    backgroundColor: "#fff",
    height : "300px",
    width : "300px",
  }

  return (

    <>
      <Header showLogoInHeader={true} />

      <div className="blogs-main-container " style={{paddingTop: isMobile ? 40 : 100}}> 
        <p className="h4 darkText ta-center" style={{ margin: '50px 0'}}>GDSC Archives</p>
        
          {/* <div className="background-card" style={backgroundStyle}>
            <div style={{justifyContent: 'center'}}> 
              <p className="h6 darkText ta-left"  style={{ textAlign : 'center',   fontSize: 30 ,color:'black' }}>DSC ARCHIVE !!  </p>
              <p className="t3 darkGrey ta-left" style={{ textAlign : 'center',fontSize: 25 , color:'black'}}>YEAR  2020-2021 </p>
              <p className="t3 darkGrey ta-left" style={{ textAlign : 'center',fontSize: 20  , color:'black'}}>  
                <a href="https://drive.google.com/file/d/11ewrjZQwQ_ccEaVCAamnxt0W1Xq99Gb9/view?usp=sharing" target="_blank" rel="noopener noreferrer">CLICK HERE !! </a>
              </p>
            </div>
          </div>          */}
        {archiveInfo.map(year => {
          return (
            <div className="year-container">
              <div className="year-name">
                <p className="h5 darkText">GDSC {year.year}</p>
              </div>
              <div className="link-cards">
                {year.info.map(inf => {
                  return (
                    <div className="link-card">
                      <div className="link-info">
                        <p className="t00 tanText" style={{marginTop: 5}}>{inf.title}</p>
                        <p className="t2 darkGrey">{inf.description}</p>
                      </div>
                      &emsp;
                      <a href={inf.link} rel="noopener noreferrer" target="_blank">
                        <div className="open-button">
                          <p className="t2 darkText">
                            Open
                            
                            {/* <ArrowUpRight size={16}/> */}
                          </p>
                        </div>
                      </a>
                      
                    </div>
                  )
                })}
              </div>
              
              
            </div>
          )
        })}
      </div>

      <Footer />
    </>
  )
}

export default Archives





