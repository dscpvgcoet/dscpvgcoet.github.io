import React, {Fragment} from 'react'

import Header from './Header'
import Footer from './Footer'

const Resources = ({}) => {




    return (

        <Fragment>
            <Header showLogoInHeader={true}/>
            
            <div className="blogs-main-container ">
                
                

                <p className="h4 darkText ta-center" style={{margin:'50px 0'}}>DSC Resources</p>

                <p className="t2 darkGrey ta-center" style={{marginBottom:100}}>Resources related to DSC events, workshops and webinars</p>

                <div style={{height:500}}></div>

            </div>

            <Footer />
        </Fragment>
    )
}

export default Resources