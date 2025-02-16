import { useState } from 'react'
import Footer from './comp/Footer'
import Header from './comp/Header'
import { FaBars } from 'react-icons/fa';
import { Nav,Card,CardBody, CardText, CardTitle, CardSubtitle, } from 'react-bootstrap';


export default function Service() {
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
                            <Nav.Link href="/contact">Contact</Nav.Link>
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
                    
                    <h1>Service</h1>
                    <Card>
                        <CardBody>
                            <CardTitle>Our Service</CardTitle>
                            <CardText> 
                                 At Apti-Ground, we are committed to providing professional, personalized services that cater to the needs of college students and individuals seeking to enhance their aptitude skills. Our platform offers a range of free resources and tools to help you track your progress and achieve your goals, all within a supportive community environment.
                            </CardText>

                            <CardSubtitle>Professional Assessments:</CardSubtitle>
                            <CardText>
                                Our platform features a diverse array of professional assessments designed to evaluate and improve various aptitude skills, including logical reasoning, numerical ability, and verbal proficiency. Our assessments are meticulously crafted to challenge and aid in your growth.
                            </CardText>
                            <CardSubtitle>Personalized Learning Plans:</CardSubtitle> 
                            <CardText>
                                Recognizing the uniqueness of each learner, Apti-Ground provides personalized learning plans based on your assessment results. These tailored plans offer targeted resources and exercises to facilitate improvement in specific areas.
                            </CardText>

                            <CardSubtitle>For College Students:</CardSubtitle>
                            <CardText>                            
                                 Understanding the unique challenges faced by college students, our services are tailored to support your academic and career aspirations. From entrance exam preparation to enhancing problem-solving skills, Apti-Ground is your trusted partner in academic success.
                            </CardText>

                            <CardSubtitle>Free Resources:</CardSubtitle>
                            <CardText>
                                We believe that education should be accessible to all. Our platform offers a wealth of free resources, including tutorials, practice exercises, and expert tips. We strive to ensure that financial barriers do not hinder your ability to improve your aptitude skills.
                            </CardText>

                            <CardSubtitle>Track Your Progress:</CardSubtitle>
                            <CardText>
                                Our individual dashboard feature allows you to monitor your progress over time. Set goals, track your improvement, and receive personalized recommendations to stay motivated and on the path to success.
                            </CardText>
                            <CardSubtitle>Community Support:</CardSubtitle>
                            <CardText>
                                Join a vibrant community of learners who share your passion for self-improvement. Our platform fosters an environment where users can participate in discussions, exchange tips, and support each other’s growth, creating a positive and encouraging learning atmosphere.
                            </CardText>
                            <CardSubtitle>Resource Library:</CardSubtitle>
                            <CardText>
                                Our extensive resource library offers a variety of learning materials to suit different learning styles. From video tutorials to interactive quizzes, you’ll find everything you need to master your aptitude skills.
                                <br/><br/>
                                At Apti-Ground, we are dedicated to helping you unlock your full potential. Whether you are a college student aiming for academic excellence or a professional seeking to enhance your skills, our services are designed to support your journey. Join us today and become part of our community committed to learning and growth.
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
