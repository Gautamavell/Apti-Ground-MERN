import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import bg from './assets/login-div.jpg'
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GoogleLogin } from '@react-oauth/google';




function Signup() {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [message,setMessage]=useState();
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post(import.meta.env.VITE_BASE_URL+"/register",{name,email,password,scorelr:[10],scoreqa:[10],score25:[25]})
        .then(result=>{
          if(result.data==="user already exist"){
            setMessage(result.data)
          }else{
            console.log(result)
            navigate('/')
          } 
        })
        .catch(error=>{
            if (error.code === 'ERR_NETWORK'){
                console.error('Network error:', error); 
                alert('Not connected to server.(enter any value and login to check out the site with dummy user)')
                navigate('/')
            } else 
                 { console.error('Error response:', error.response); }
            

        })
        
    }

    const bgstyle={
      backgroundImage:`url(${bg})`,
      height:'100vh',
      backgroundSize:'cover'
    }

  return (
  <>
  <div style={bgstyle} className= ''>

      <div className="row justify-content-center p-5">
        <div className="col-md-6 col-lg-4">
        <div className="d-flex mt-2 mb-3 p-3 justify-content-center shadow-lg " style={{borderRadius:'20px' ,backgroundColor:'rgb(0, 0, 0)'}}>
      <FontAwesomeIcon  className="p-2" icon={faBrain} style={{color:'white', width:'65', height:'65'}} />
      <div className="d-flex flex-column p-2 mb-2" style={{color:'#fff'}}>
        <div style={{fontWeight: 'bold',fontSize: '1.5rem'}}>APTI-GROUND</div>
        <div style={{}}>AN APTITUDE PLAYGROUND</div>
      </div>
    </div>
          <div className="card shadow-lg border border-dark">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" required
                   onChange={(e)=>{setName(e.target.value)}} />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" required
                   onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter your password" required
                  onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <div className="alert-danger text-center text-danger form-label">
                    {message}
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary mb-3">Sign Up</button>
                  <label htmlFor='login' className='form-label'>Already have an account</label>
                  <Link to="/" type="button" className="btn btn-secondary" id='login'>Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  

  </>
    
  );
}

export default Signup;
