import "./Footer.css"
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer-icons">
      <img src={facebook_icon} alt="error" />
      <img src={instagram_icon} alt="error" />
      <img src={twitter_icon} alt="error" />
      <img src={youtube_icon} alt="error" />
    </div>
    <ul>
      <li>Audio Description</li>
      <li>Help Center</li>
      <li>Gift Card</li>
      <li>Media Center</li>
      <li>Invester Relations</li>
      <li>Jobs</li>
      <li>Terms of Use</li>
      <li>Privacy</li>
      <li>Legal Notice</li>
      <li>Cookie Preference</li>
      <li>Corporate Information</li>
      <li>Contact Us</li>
    </ul>
    <p className="copyright-text">&#169; 2025 Netflix, Inc.</p>
  </div>
  )
}

export default Footer