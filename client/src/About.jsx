import Header from './comp/Header'
import Footer from './comp/Footer'
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardText, CardTitle, Nav } from 'react-bootstrap';
import './css/sidebar.css'

export default function About() {
        const [collapsed, setCollapsed] = useState(false);
    
        const toggleSidebar = () => {
            setCollapsed(!collapsed);
        };

  return (
    <div>
       <Header/>
       <div className="container-fluid p-0">
          <div className='row w-100 pl-2'>
            <div className={`${collapsed ? '' : 'col-lg-2 col-12 p-0'}`}>
            
            <div className={`sidebar h-100 bg-light p-3 ${collapsed ? 'd-none' : 'd-block'}`}>
        <div className="d-flex justify-content-end mb-3">
            <FaBars onClick={toggleSidebar} style={{ cursor: 'pointer' }} />
        </div>
        <h4 className="ms-2 ">Side Navbar</h4>
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
                    
                    <h1>About Us</h1>
                    <Card>
                        <CardBody>
                            <Card.Title>Welcome to Apti-Ground!</Card.Title>
                            <Card.Text>
                            At Apti-Ground, we believe in the power of continuous learning and personal growth. Our mission 
                            is to provide a comprehensive platform that helps individuals improve their aptitude skills and achieve 
                            their fullest potential.
                            </Card.Text>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <Card.Title>Who We Are :</Card.Title>
                            <Card.Text>
                            Apti-Ground is a dedicated team of educators, technologists, and lifelong learners who are passionate
                            about empowering people to excel in their personal and professional lives. We understand that strong 
                            aptitude skills are the foundation for success in many fields, and we are committed to providing the
                             tools and resources needed to develop these skills.
                            </Card.Text>
                        </CardBody>
                    </Card>
                    <Card>
                        <Card.Body>
                            <CardTitle>What We Offer :</CardTitle>
                            <CardText>
                            <strong>Assessments:</strong> Our platform features a wide range of assessments designed to evaluate and enhance various aptitude skills, including logical reasoning, numerical ability, verbal proficiency, and more.
                                            <br/>
                            <strong>Personalized Dashboard:</strong> Each user has access to their own individual dashboard, where they can track their progress, set goals, and receive personalized recommendations for improvement.
                                            <br/>
                            <strong>Learning Resources:</strong> In addition to assessments, we offer a wealth of learning resources, including tutorials, practice exercises, and expert tips to help users master their aptitude skills.
                                            <br/>
                            <strong>Community Support:</strong> Join a vibrant community of learners who share your passion for self-improvement. Participate in discussions, exchange tips, and motivate each other to achieve your goals.
                            </CardText>
                        </Card.Body>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardTitle>Our Vision :</CardTitle>
                            <CardText>
                            Our Vision: We envision a world where everyone has the opportunity to unlock 
                            their true potential and thrive in their chosen careers. At Apti-Ground, we are
                            dedicated to creating a supportive and inclusive environment where learners of
                            all backgrounds can come together to improve their aptitude skills and reach new heights.
                            </CardText>
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
