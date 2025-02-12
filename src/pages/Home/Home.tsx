
import Navbar from '../../components/Navbar/Navbar'
import TaitleCards from '../../components/TitleCards/TaitleCards'
import hero_banner from "../../assets/hero_banner.jpg"
import hero_title from "../../assets/hero_title.png"
import play_icon from "../../assets/play_icon.png"
import info_icon from "../../assets/info_icon.png"
import './Home.css'
import Footer from '../../components/Footer/Footer'

const Home = () => {

  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="error" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="error" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="error" />More Info</button>
          </div>
          <div className="title-card">
            <TaitleCards title={null} category={null}/>
          </div>
        </div>
      </div>
      <div className="more-cards">
      <TaitleCards title={"Popular"} category="popular"/>
      <TaitleCards title={"Top Rated"} category="top_rated" />
      <TaitleCards title={"Up Coming"}  category="upcoming"/>
      {/* <TaitleCards /> */}
      </div>
      <Footer/>
    </div>
  )
} 

export default Home