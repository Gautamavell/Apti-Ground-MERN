import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./css/Login.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain , faStar} from '@fortawesome/free-solid-svg-icons';
import { Card, Carousel } from "react-bootstrap";
import goat1 from './assets/goat1.jpg'
import goat2 from './assets/goat2.jpg'
import GOAT from './assets/GOAT.jpg'



function Login() {
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const navigate=useNavigate();
  const [message,setMessage]=useState();

  const aptibg={
    backgroundImage:'url(https://img.freepik.com/premium-vector/school-doodle-pattern-black-white-hand-drawn-education-elements-school-seamless-background_502651-628.jpg )',
    //backgroundImage:'url(https://thumbs.dreamstime.com/b/brainstorm-doodle-seamless-pattern-cartoon-illustration-your-design-118126606.jpg)',
    //backgroundImage:''
    backgroundSize:'cover',
    backgroundPosition:'center',
    borderRadius:'1%',
    backgroundBlur:'50%'
  }

  const dummyUser={
    email: "dummy_user@abc.com",
    name: "Dummy_User",
    password:"123",
    score25: [25,'19','24','20','15','6','10'],
    scorelr: [10, "0", "4","5","7","6","9"],
    scoreqa: [10, "0","4","8","9","6","8","4"]
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data[0] === "success") {
          const userDetails = { ...result.data[1] };
          localStorage.setItem("userDetails", JSON.stringify(userDetails));
          navigate("/home");
        } else {
          setMessage(result.data);
        }
      })
      .catch((error) => {
        if (error.code === "ERR_NETWORK") {
          console.error("Network error:", error);
        } else {
          console.error("Error response:", error.response);
        }
        alert("server is not connected. You are seeing the actual interface with dummy User.")
        localStorage.setItem("userDetails", JSON.stringify(dummyUser));
        navigate("/home");

      });
  };
  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div className="row flex-grow-1 " style={{ height: "100%" }}>
        <div className="col-12 col-lg-5  mx-0 ps-md-4 pt-3 pb-3 align-item-center ">
          <div className="d-flex flex-column justify-content-between align-items-center h-100">
            <div className="card col-md-5 p-5 pb-3 w-100 h-100 border border-white  ">
              <div className="card-body border border-grey ">
                <h2 className=" card-title text-center fs-1  mb-4">
                  <b>Hello There!</b>
                </h2>
                <p className="text-center mb-4">Log in to get started</p>
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      value={password} required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="alert-danger text-center text-danger form-label">
                    {message}
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary mb-3">
                      Login
                    </button>
                    <label htmlFor="signup" className="form-label text-center">
                      Dont have an account?
                    </label>
                    <Link
                      to="/register"
                      type="button"
                      className="btn btn-secondary"
                      id="signup"
                    >
                      Sign Up
                    </Link>
                  </div>
                </form>
              </div>
              <hr />
              <div className="p-2 d-flex flex justify-content-center gap-4 ">
                <a href="https://www.linkedin.com" className="btn p-0 m-0 b-0">
                  <i className="fab fa-2x fa-linkedin"></i>
                </a>
                
                <a href="https://www.facebook.com" className="btn p-0 m-0 b-0">
                  <i className="fab fa-2x fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com" className="btn p-0 m-0 b-0">
                  <i className="fab fa-2x fa-instagram"></i>
                </a>
                <a href="https://www.twitter.com" className="btn p-0 m-0 b-0">
                  <i className="fab fa-twitter fa-2x"></i> 
                </a>
               
              </div>
            </div>
          </div>
          
        </div>
        <div className=" row col-12 col-lg-7">
          <div className="px-3 w-100 col-12 col-lg-7 mt-md-4 mt-lg-0 py-3">
            <div className="h-100" style={aptibg}>
          
              
             <div className="d-flex flex-column h-100 justify-content-between align-items-center">
             <Carousel  style={{padding:'10%'}}>
                <Carousel.Item>
                <Card style={{margin:'15px'}}>
                    <div className="p-5">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />

                      <Card.Text className="mt-3" style={{fontStyle:'italic',color:'#555'}}>
                          "Apti-Ground's quizzes sharpened my problem-solving skills and boosted my confidence. Their challenging and diverse question sets were key to my success. Thanks to Apti-Ground for their service and support, I secured my dream job!"
                      </Card.Text>
                      <hr></hr>
                      <div className="d-flex justify-content-between">
                        <div>
                          <Card.Title style={{fontStyle:"oblique",fontWeight:'bold', fontSize:'1.25rem'}}>Nandhakumar P V</Card.Title>
                          <Card.Subtitle style={{fontSize: '1rem', color: '#888'}}>Intern at Google</Card.Subtitle>
                        </div>
                        <div className="profile-dashboard"  >
                          <img src={goat1} alt="Profile" className="rounded-circle" width="60" height="60"  />
                        </div>
                      </div>
                                          
                    </div>
                 </Card>
                </Carousel.Item>
                <Carousel.Item>
                <Card style={{  margin: '15px' }}>
                    <div className="p-5">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                      <Card.Text className="mt-3" style={{fontStyle:'italic',color:'#555'}}>
                          "Apti-Ground's quizzes honed my problem-solving abilities and significantly increased my confidence. The variety and difficulty of their questions played a crucial role in my success. With their help, I landed my dream job!"                      </Card.Text>
                      <hr></hr>
                      <div className="d-flex justify-content-between">
                        <div>
                          <Card.Title style={{fontStyle:"oblique",fontWeight:'bold', fontSize:'1.25rem'}}>Vasu G</Card.Title>
                          <Card.Subtitle style={{fontSize: '1rem', color: '#888'}}>Intern at Meta</Card.Subtitle>
                        </div>
                        <div className="profile-dashboard"  >
                          <img src={goat2} alt="Profile" className="rounded-circle" width="60" height="60"  />
                        </div>
                      </div>
                                          
                    </div>
                 </Card>
                </Carousel.Item>
                <Carousel.Item>
                <Card style={{  margin: '15px' }}>
                    <div className="p-5">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                      <Card.Text className="mt-3" style={{fontStyle:'italic',color:'#555'}}>
                       "Apti-Ground's quizzes refined my problem-solving abilities and significantly enhanced my confidence. The challenging and diverse question sets were instrumental in my achievement. Thanks to Apti-Ground, I have successfully secured my desired position."                      </Card.Text>
                      <hr></hr>
                      <div className="d-flex justify-content-between">
                        <div>
                          <Card.Title style={{fontStyle:"oblique",fontWeight:'bold', fontSize:'1.25rem'}}>Kewin Rodick M</Card.Title>
                          <Card.Subtitle style={{fontSize: '1rem', color: '#888'}}>Intern at Apple</Card.Subtitle>
                        </div>
                        <div className="profile-dashboard"  >
                          <img src={GOAT} alt="Profile" className="rounded-circle" width="60" height="60"  />
                        </div>
                      </div>
                                          
                    </div>
                 </Card>

                </Carousel.Item>
              </Carousel>
             
              <div className="d-flex m-5 " style={{borderRadius:'20px' ,backgroundColor:'rgb(255, 255, 255)'}}>
                <FontAwesomeIcon  className=" p-2" icon={faBrain} style={{color:'black', width:'65', height:'65'}} />
                <div className="d-flex flex-column p-2 mb-2" style={{color:'#000'}}>
                  <div style={{fontWeight: 'bold',fontSize: '1.5rem'}}>APTI-GROUND</div>
                  <div style={{}}>AN APTITUDE PLAYGROUND</div>
                </div>
              </div>
             </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;


