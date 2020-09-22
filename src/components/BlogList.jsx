import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Blogs from './Blogs'

class BlogList extends React.Component {
    render() {
        return (
            <div>
            {<Header 
            showLogoInHeader={true}                
            passHeaderHeight={height => this.setState({headerHeight: height})}
                
            />                
            }
            <Blogs />
            <Footer/>
            </div>
        )
    }
}

export default BlogList