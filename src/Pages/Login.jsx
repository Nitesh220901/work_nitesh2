import {  signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import {auth} from '../firebase'
import {Link, useNavigate} from 'react-router-dom'
const Login = () => {
   
    const  [email,setEmail] = useState('')
    const  [password,setPassword] = useState('')

    const navigate = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const userCredential = await signInWithEmailAndPassword(auth,email,password)
            console.log(userCredential)
            const user = userCredential.user;
            localStorage.setItem('token',user.accessToken);
            localStorage.setItem('user',JSON.stringify(user));
            navigate('/');

        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit} >
  <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    value={email} 
    onChange={(e)=>setEmail(e.target.value)}
    />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"
    value={password} 
    onChange={(e)=>setPassword(e.target.value)}
    
    />
  </div>
 
  <button type="submit" className="btn btn-primary">Login</button>
</form>
<p>Need to signup?<Link to="/signup">create account</Link></p>
    </div>
  )
}

export default Login
