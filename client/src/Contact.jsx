import { useState } from 'react'
import Header from './comp/Header'
import Footer from './comp/Footer'
import { FaBars, FaPhone ,FaPhoneAlt} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardGroup, CardImg,  Nav } from 'react-bootstrap';
import logo from './assets/contactus.svg';
import './css/sidebar.css'



export default function Contact() {
    const [collapsed,setCollapsed]=useState(false);

    const toggleSidebar=()=>{
        setCollapsed(!collapsed)
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
                                        <form className='p-5 align-items-center' action="#">
                                        <div className='mb-3'>
                                        <input type="text" id='name' className='form-control' placeholder='Enter your Name'/>
                                        </div>
                                        <div className='mb-3'>
                                        <input type="number" id='phone' className='form-control' placeholder='Enter Phone Number' />
                                        </div>
                                        <div className='mb-3'>
                                            <input type="email" id="mail" className='form-control' placeholder='Enter Mail Id'/>
                                        </div>
                                        <div className='mb-3'>
                                            <textarea id="message" className='form-control' rows={4} cols={50}></textarea>
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
