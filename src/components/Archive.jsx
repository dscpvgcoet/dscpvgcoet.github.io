import React from 'react'

import Header from './Header'
import Footer from './Footer'
import { AlignCenter } from 'react-feather'


//import eventhero from '../assets/images/events-hero.svg'






const Archives = () => {

  
  const backgroundStyle = {

    backgroundColor: "#fff",
    
    height : "300px",
 
    width : "300px",
   
    //href="",
  //backgroundImage: url()`,


  }

  return (

    <>
      <Header showLogoInHeader={true} />


       <div className="blogs-main-container "> 


        <p className="h4 darkText ta-center" style={{ margin: '50px 0'  }}>DSC Archive</p>

        
        
        <p className="t2 darkGrey ta-center" style={{ marginBottom: 0}}>
     

          <div className="background-card" style={backgroundStyle}>

          

          <div style={{justifyContent: 'center' }}> 
          
            <p className="h6 darkText ta-left"  style={{ textAlign : 'center',   fontSize: 30 ,color:'black' }}>DSC ARCHIVE !!  </p>


         <p className="t3 darkGrey ta-left" style={{ textAlign :    'center',fontSize: 25 , color:'black'}}>YEAR  2020-2021 </p>


        
         <p className="t3 darkGrey ta-left" style={{ textAlign :    'center',fontSize: 20  , color:'black'}}>
             
            <a href="https://drive.google.com/file/d/11ewrjZQwQ_ccEaVCAamnxt0W1Xq99Gb9/view?usp=sharing" target="_blank" rel="noopener noreferrer">CLICK HERE !! </a>

          </p>

          </div>

          </div>         

        </p>
      </div>

      <Footer />
    </>
  )
}

export default Archives





