import React from 'react'
import {signOut} from 'firebase/auth';
import {auth} from '../firebase'
import { useNavigate } from 'react-router-dom';
const Home = () => {

    const navigate = useNavigate();

    const handleLogout = async ()=>{
        await signOut(auth);
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate('/login')
        
    }
  return (
    <div>
      <div>home</div>
      <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default Home
