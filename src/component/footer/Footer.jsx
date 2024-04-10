import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import candid from '../../asset/brand/candid.png'
import phone from '../../asset/ui/phone.png'
import mail from '../../asset/ui/mail.png'
import facebook from '../../asset/brand/facebook.png'
import instagram from '../../asset/brand/instagram.png'
import linkedin from '../../asset/brand/linkedin.png'
import tiktok from '../../asset/brand/tik-tok.png'
import twitter from '../../asset/brand/twitter.png'
import youtube from '../../asset/brand/youtube.png'


const Footer = () => {
  return (
    <footer>
      <div className="top">
        <div className="footer-groups">
          <div className="group">
            <p className='p-bold'>About Us</p>
            <ul>
              <li><p><Link to='./about' onClick={() => window.scrollTo(0, 0)}>Our story</Link></p></li>
              <li><p><Link to='./about' onClick={() => window.scrollTo(0, 0)}>Our values</Link></p></li>
              <li><p><Link to='./about' onClick={() => window.scrollTo(0, 0)}>What we offer</Link></p></li>
              <li><p><Link to='./about' onClick={() => window.scrollTo(0, 0)}>Our team</Link></p></li>
            </ul>
          </div>
          <div className="group">
            <p className='p-bold'>Get Involved</p>
            <ul>
              <li><p><Link to='./get-involved' onClick={() => window.scrollTo(0, 0)}>Volunteer</Link></p></li>
              <li><p><Link to='./get-involved' onClick={() => window.scrollTo(0, 0)}>Donate</Link></p></li>
              <li><p><Link to='./get-involved' onClick={() => window.scrollTo(0, 0)}>Wishlist</Link></p></li>
              <li><p><Link to='./get-involved' onClick={() => window.scrollTo(0, 0)}>Partnership</Link></p></li>
            </ul>
          </div>
          <div className="group">
            <p className='p-bold'>Our Partners</p>
            <ul>
              <li>
                <p>
                  <a href="https://www.childrensrescuefund.org/" target="_blank" rel="noopener noreferrer" onClick={() => window.scrollTo(0, 0)}>Children's Rescue Fund</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="https://www.hfhnyc.org/" target="_blank" rel="noopener noreferrer" onClick={() => window.scrollTo(0, 0)}>Home for the Homeless</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="https://www.learntobe.org/" target="_blank" rel="noopener noreferrer" onClick={() => window.scrollTo(0, 0)}>Learn To Be</a>
                </p>
              </li>
              <li><p><Link to='./get-involved' onClick={() => window.scrollTo(0, 0)}>Become a partner</Link></p></li>
            </ul>
          </div>
          <div className="group contact-us">
            <p className='p-bold'>Contact Us</p>
            <ul>
              <li><img src={mail} alt="" /><a href=""><p></p></a></li>
              <li><img src={phone} alt="" /><a href=""><p></p></a></li>
            </ul>
          </div>
          <img id='candid' src={candid} alt="" />
        </div>

      </div>
      <div className="bot">
        <div className="social-media">
          <p className='p-bold'>Connect With Us</p>
          <div>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" />
            </a>
          </div>
        </div>
        <p className='small'><span><Link to='./disclaimer' onClick={() => window.scrollTo(0, 0)}>DISCLAIMER</Link></span>|<span><Link to='./privacy-policy' onClick={() => window.scrollTo(0, 0)}>PRIVACY POLICY</Link></span></p>
        <p className='small'>LetUsBegin, Inc. </p>


      </div>
    </footer>
  )
}

export default Footer