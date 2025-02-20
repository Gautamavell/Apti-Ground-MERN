import { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Nav } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import Header from './comp/Header';
import Footer from './comp/Footer';
import './css/sidebar.css'

const Home = () => {
    const userDetails=JSON.parse(localStorage.getItem('userDetails'));
    const [collapsed, setCollapsed] = useState(false);
    const [loggedIn,setloggedIn]=useState(true);
    const navigate=useNavigate()
    
    useEffect(()=>{
        if(!loggedIn){
          navigate('/');
        }
      },[loggedIn])

    useEffect(()=>{
        setloggedIn(JSON.parse(localStorage.getItem('isLoggedIn')));
      },[])

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <>
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
                    
                    <h1 >Today's Test</h1>
                    <div className="d-flex flex-column ">
                        <div>
                            <Card className="mb-4 card-hover-border-dark" key={1} style={{ position: 'relative', minHeight: '150px'}}>
                                <Card.Body>
                                    <Card.Title>Logical and Reasoning</Card.Title>
                                    <Card.Text>
                                        10 Questions | 15 min
                                    </Card.Text>
                                    <Link to={'/testlr'} type='buttom' className="btn btn-outline-dark    " variant="primary" style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                        Start Now
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className="mb-4  card-hover-border-dark" key={1} style={{ position: 'relative', minHeight: '150px' }}>
                                <Card.Body>
                                    <Card.Title>Quantitative Analysis</Card.Title>
                                    <Card.Text>
                                        10 Questions | 15 min
                                    </Card.Text>
                                    <Link to={'/testqa'} type='buttom' className="btn btn-outline-dark " variant="primary" style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                        Start Now
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className="mb-4 card-hover-border-dark" key={1} style={{ position: 'relative', minHeight: '150px'}}>
                                <Card.Body>
                                    <Card.Title>Today's 25</Card.Title>
                                    <Card.Text>
                                        25 Questions | 30 min
                                    </Card.Text>
                                    <Link to={'/test25'} type='buttom' className="btn btn-outline-dark " variant="primary" style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                        Start Now
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                </div>

            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Home;
