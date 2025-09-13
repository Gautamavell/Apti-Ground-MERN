import { useState } from 'react'
import Header from './comp/Header'
import Footer from './comp/Footer'
import { FaBars, FaPhone ,FaPhoneAlt} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardGroup, CardImg,  Nav } from 'react-bootstrap';
import logo from './assets/contactus.svg';
import './css/sidebar.css'
import axios from 'axios';
import Swal from 'sweetalert2';




export default function Contact() {
    const [collapsed,setCollapsed]=useState(false);
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [phone,setPhone]=useState();
    const [message,setMessage]=useState();

    const toggleSidebar=()=>{
        setCollapsed(!collapsed)
    }

    console.log(import.meta.env.VITE_BASE_URL);

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post(import.meta.env.VITE_BASE_URL+'/contact',{name,phone,email,message})
        .then(success=>{
            console.log("Message sent to admin!");

            Swal.fire({
                      title: 'Successfull!',
                      text: 'Your response have been sent successfully.',
                      icon: 'success',
                      confirmButtonText: 'OK'
                    });
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
        })
        .catch(err=>{
            console.log(err)
            Swal.fire({
                title: 'Failed!',
                text: 'Response failed due to network issue.',
                icon: 'warning',
                confirmButtonText: 'OK'
              });
        })
    }

    return (
    <div>
      <Header/>
      <div className="container-fluid p-0">
          <div className='row w-100 pl-2'>
            <div className={`${collapsed ? '' : 'col-lg-2 col-12 p-0'}`}>
                <div className={`sidebar h-100 bg-light p-3 ${collapsed ? 'd-none' : ''}`} >
                    <div className="d-flex justify-content-end mb-3">
                        <FaBars onClick={toggleSidebar} style={{ cursor: 'pointer' }} />
                    </div>
                    <h4 className='ms-2'>Side Navbar</h4>
                    <Nav className="flex-column">
                    <Nav.Item>
                        <Nav.Link href='/dashboard' className="text-dark">My Dashboard</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/home" className="text-dark">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/about" className="text-dark">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/service" className="text-dark">Services</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contact" className="text-dark">Contact</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </div>
            </div>

            <div className={`row ${collapsed?'col-lg-12 pl-2 ':'col-lg-10 '} `}>
                <div className="main-content flex-grow-1" style={{ position: 'relative', padding:'30px 0 20px 60px'}}>
                    {collapsed && (
                        <div className="d-flex justify-content-start mb-3">
                            <FaBars onClick={toggleSidebar} style={{ cursor: 'pointer' }} />
                        </div>
                    )}
                    <h1>Contact Us</h1>
                    <CardGroup className='gap-4'>
                            <Card>
                                <CardBody>
                                        <form className='p-5 align-items-center' onSubmit={handleSubmit} >
                                        <div className='mb-3'>
                                        <input type="text" id='name' className='form-control' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter your Name'/>
                                        </div>
                                        <div className='mb-3'>
                                        <input type="number" id='phone' className='form-control' value={phone} placeholder='Enter Phone Number' onChange={(e)=>{setPhone(e.target.value)}}/>
                                        </div>
                                        <div className='mb-3'>
                                            <input type="email" id="mail" className='form-control' value={email} placeholder='Enter Mail Id' onChange={(e)=>{setEmail(e.target.value)}}/>
                                        </div>
                                        <div className='mb-3'>
                                            <textarea id="message" className='form-control' rows={4} cols={50} value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                                        </div>
                                        <div className='d-flex justify-content-center '>
                                            <button className='btn btn-secondary w-100 '>Submit</button>
                                        </div>
                                        </form>
                                        <hr></hr>
                                        <p className='m-0' style={{textAlign:'center'}}><FaPhoneAlt/> <b>Call us</b>  : +91 9867-564-967</p>
                                </CardBody>
                            </Card>
                            <Card style={{boxShadow:'none'}}>
                                <CardImg src={logo}/>
                            </Card>
                    </CardGroup>

                                    

                                
                    
                </div>
                </div>

            </div>
        </div>
      <Footer/>
    </div>
  )
}
