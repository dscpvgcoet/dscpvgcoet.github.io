import React from 'react'

import '../css/footer.css'
import instagramLogo from '../assets/images/icons/instagram.png'
import twitterLogo from '../assets/images/icons/twitter.png'
import linkedinLogo from '../assets/images/icons/linkedin.png'
import mail from '../assets/images/icons/mail.png'
import phone from '../assets/images/icons/phone.png'
import location from '../assets/images/icons/pin.png'

const socialMediaInfo = [
    {
        name : 'Instagram',
        image : instagramLogo,
        href : 'https://instagram.com',
    },
    {
        name : 'Twitter',
        image : twitterLogo,
        href : 'https://instagram.com',
    },
    {
        name : 'LinkedIN',
        image : linkedinLogo,
        href : 'https://instagram.com',
    },
]

class Footer extends React.Component {


    renderSocialMediaIcons = () => {
        return socialMediaInfo.map(item => {
            return (
                <a href={item.href} target="_blank">
                    <div className="social-media-icons-card">
                        <img src={item.image} className="social-media-icons-image"/>
                        <p className="social-media-icons-p">{item.name}</p>
                    </div>
                </a>
            )
        })
    }

    render() {
        return (
            <div className="footer-main">
            <div className="social-media-icons">
               {this.renderSocialMediaIcons()}
            </div>
            {/* <div className="footer-text">
                <h2>We are based in Delhi, India</h2>
                <p>We work with clients all over the world. Get in touch with us</p>
            </div> */}

            <div className="three-sections">
                <div className="section">
                    <h3>About Us</h3>
                    <p>Developer Student Clubs PVG's COET, powered by Google Developer Experts, is a non-profit university based community that aims to inspire intelligent minds in the field of technology. </p>
                </div>
                <div className="separator"></div>
                <div className="section">
                    <h3>Contact Us</h3>
                    <span>
                        <img src={mail}/>
                        <p>dscpvgcoet@gmail.com</p>
                    </span>
                    <span>
                        <img src={phone}/>
                        <p style={{textAlign: 'left'}}>+91 94563456XX</p>
                    </span>
                    <span>
                        <img src={location}/>
                        <p style={{textAlign: 'left'}}>PVG's COET, Sahakarnagar, Pune</p>
                    </span>
                </div>
                <div className="separator"></div>
                <div className="section">
                    <h3>Keep in touch</h3>
                    <p>We'll be updating the space with more fun content soon! Keep an eye out for some exciting stuff coming up your way!</p>
                    {/* <div className="app-buttons-div">
                        <button className="app-button primary">Android</button>
                        <button className="app-button secondary">iOS</button>
                    </div> */}
                </div>
            </div>

        </div>
        )
    }
}

export default Footer