import React, { useState  } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { GoogleOAuthProvider } from '@react-oauth/google';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Googlelogin = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate=useNavigate();


  const handleLoginSuccess = async (response) => {
    console.log('Google Login Success:', response);
    try {
      const result = await axios.post(import.meta.env.VITE_BASE_URL+'/googlelogin', { token: response.credential });
      console.log('Backend Response:', result);
  
      if (result.data[0] === 'success') {
        const userDetails = { ...result.data[1] };
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        setLoggedIn(true);
        toast("Login successful!", {
          duration: 1500,
          style: {
            backgroundColor: '#28a745',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            fontSize: '16px',
          },
        });
        navigate("/home");
      } else {
        toast(result.data);
      }
    } catch (error) {
      console.error("Error during Google login:", error);
      toast("Google login failed", {
        duration: 1500,
        style: {
          backgroundColor: '#76a745',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          fontSize: '16px',
        },
      });
    }
  };
  
  const handleLoginFailure = (error) => {
    console.error('Google login failed:', error);
  };

  return (
    <GoogleOAuthProvider clientId="540798998843-eqhne287gon8r8tv4297irt1t75kgnu1.apps.googleusercontent.com">
    <div>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
      />
    </div>
    </GoogleOAuthProvider>
  );
};

export default Googlelogin;
