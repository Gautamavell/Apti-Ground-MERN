import { useState } from 'react'
import Header from './comp/Header'
import Footer from './comp/Footer'
import { FaBars } from 'react-icons/fa';
import { Nav ,Card,CardBody,CardText,CardTitle} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Terms() {
    const[collapsed,setCollapsed]=useState(false);
    const toggleSidebar=()=>{
            setCollapsed(!collapsed);
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
                            <Nav.Link href='/dashboard'>My Dashboard</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/service">Services</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>

            <div className={`row ${collapsed?'col-lg-12 pl-2 ':'col-lg-10 '} `}>
                <div className="main-content flex-grow-1" style={{ position:'relative',padding:'30px 0 20px 60px'}}>
                    {collapsed && (
                        <div className="d-flex justify-content-start mb-3">
                            <FaBars onClick={toggleSidebar} style={{ cursor: 'pointer' }} />
                        </div>
                    )}
                    
                    <h1>Terms and Conditions</h1>
                    <Card>
                        <CardBody>
                            <Card.Text>
                            Welcome to KCE Developes. These Terms and Conditions govern your use of our website located at [Your Website URL]. By accessing and using our website, you agree to comply with these terms. If you do not agree with any part of these terms, please do not use our website.
                            </Card.Text>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <Card.Title>Use of Our Service</Card.Title>
                            <Card.Text>
                            <strong>Eligibility:</strong> You must be at least 16 years old or have the consent of a parent or guardian to use our services. By using our website, you represent and warrant that you have the legal capacity to enter into this agreement.
                            <br/>
                            <strong>Account Registration:</strong> To access certain features of our website, you may be required to create an account. You agree to provide accurate and complete information during the registration process and to keep your account information up to date.
                                            <br/>
                            <strong>User Responsibilities:</strong>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                                            <br/>
                            <strong>Prohibited Activities:</strong>You agree not to engage in any activities that may harm the website or its users, including but not limited to:
                                            <br/>
                                <ul>
                                    <li>
                                    Uploading or transmitting harmful or malicious software.
                                    </li>
                                    <li>Engaging in any form of cyber-attacks or hacking.</li>
                                    <li>Posting or sharing inappropriate, offensive, or unlawful content.</li>
                                </ul>            
                            </Card.Text>
                        </CardBody>
                    </Card>
                    <Card>
                        <Card.Body>
                            <CardTitle>Intellectua Property:</CardTitle>
                            <CardText>
                            <strong>Ownership:</strong>All content, including but not limited to text, graphics, images, and software, on our website is the property of KCE Developes or its licensors and is protected by intellectual property laws.
                                            <br/>
                            <strong>Limited License:</strong> You are granted a limited, non-exclusive, non-transferable license to access and use the content on our website for personal, non-commercial purposes. You may not reproduce, distribute, or create derivative works from our content without our express written permission.
                                          
                          
                            </CardText>
                        </Card.Body>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardTitle>Disclaimers and Limitations of Liability:</CardTitle>
                            <CardText>
                            <b>No Warranty:</b> Our website and services are provided on an "as-is" and "as-available" basis. We make no warranties, express or implied, regarding the accuracy, reliability, or availability of our website.
                                <br/>
                            <b>Limitation of Liability:</b> To the fullest extent permitted by law, KCE Developes and its affiliates shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services.
                            </CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardTitle>Contact Us:</CardTitle>
                            <CardText>If you have any questions or concerns about these Terms and Conditions, please contact us at <strong>support@kcedev.in</strong></CardText>
                        </CardBody>
                    </Card> 
                </div>
                </div>

            </div>
        </div>

      <Footer/>
    </div>
  )
}
