import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Blogs from './Blogs'
import { Fragment } from 'react'

class BlogList extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            headerHeight:0
        }
    }
    
    
    
    render() {
        return (
            
            <Fragment>

                <Header 
                    showLogoInHeader={true}                
                    passHeaderHeight={height => this.setState({headerHeight: height})} 
                />  

                <div className='team-main-container'>
            
                <p className="h3 darkText ta-center">Blogs from DSC PVGCOET team</p>              
                
                </div>

                <Footer/>

            </Fragment>
            
        )
    }
}

export default BlogList