import Home from "./pages/Home/Home"
import { Routes,Route, useNavigate } from "react-router-dom"
import Login from "./pages/Login/Login"
import Player from "./pages/Player/Player"
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./fireBase"

const App = ()=> {
  const navigate=useNavigate()
  const [verify,setVerify]=useState<boolean>(false)
  useEffect(()=>{
    const checkUser=onAuthStateChanged(auth,async(user)=>{
      console.log(user)
      if(user) setVerify(true)
        else setVerify(false)
    })
    return ()=>checkUser()
  },[navigate])
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={verify?<Home/>:<Login/>}/>
        <Route path="/player/:id" element={verify?<Player/>:<Login/>}/>
      </Routes>
    </div>
  )
}

export default App