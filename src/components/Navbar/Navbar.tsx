import { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'
import { logoutUser } from '../../fireBase'


const Navbar = () => {

  const navRef = useRef<HTMLElement | null>(null);

useEffect(() => {
  window.addEventListener("scroll",()=>{
    if(window.scrollY>=80) navRef.current?.classList.add("nav-dark")
      else navRef.current?.classList.remove("nav-dark")

  })
}, []);

  return (
    <div className='navbar' ref={navRef}>
      <div className="navbar-left">
        <img src={logo} alt="error" className="search" />
        <ul>
          <li>Home</li>
          <li>Tv Show</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My list</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="error" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="error" className='icons' />
        <div className='navbar-profile'>
          <img src={profile_img} alt="error" className='profile' />
          <img src={caret_icon} alt="error" />
          <div className="dropdown">
            <p onClick={logoutUser} >sign out</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar