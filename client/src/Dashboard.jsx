import  { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, ProgressBar,Nav } from 'react-bootstrap';
import { FaUser,FaBars } from 'react-icons/fa';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js';
import { Line } from 'react-chartjs-2';
import './css/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import Footer from './comp/Footer';
import './css/sidebar.css'



// Registering necessary components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip);

export default function Dashboard() {
    const [userDetails, setUserDetails] = useState(null);
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    useEffect(() => {
        const storedUserDetails = JSON.parse(localStorage.getItem('userDetails'));
        if (storedUserDetails) {
            setUserDetails(storedUserDetails);
        }
    }, []);

    const renderChart = (scores, key ,totalScore) => (
        <Line 
            key={key}
            data={{
                labels: scores.slice(1).map((_, index) => ``),
                datasets: [
                    {
                        label: 'Scores',
                        data: scores.slice(1),
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                        pointBorderColor: '#fff',
                    },
                ],
            }}
            options={{
                scales: {
                    y: {
                        beginAtZero: true,
                        max: totalScore
                    },
                },
                plugins: { 
                    tooltip: { 
                        callbacks: { 
                            label: function(context) { 
                                return `Score: ${context.raw}`; 
                            }
                        }
                    }
                }
            }}
        />
    );

    if (!userDetails) {
        return <p>Loading...</p>;
    }

    const handleLogout=()=>{
        localStorage.clear();
        window.location.href='/'
    }

    
        

    function calcProgress(a) {
        let s = 0;
        for (let i = 1; i < a.length; i++) {
            s =s+ +a[i];
            console.log(a[i])
        }
        console.log(s);
        return ((s / ((a.length-1)*a[0])) * 100).toFixed(2);
    }
    const progressScore25=calcProgress(userDetails.score25);
    const progressScorelr=calcProgress(userDetails.scorelr);
    const progressScoreqa=calcProgress(userDetails.scoreqa);
    
    return (
        <>
        <div className='header'>
            <div className='d-flex  justify-content-between border border-grey'>
                <div>
                    <div className="d-flex  " style={{borderRadius:'20px' ,backgroundColor:'rgb(255, 255, 255)'}}>
                        <FontAwesomeIcon  className="ms-2 p-2" icon={faBrain} style={{color:'black', width:'45', height:'45'}} />
                        <div className="d-flex flex-column p-2 " style={{color:'#000'}}>
                        <div style={{fontWeight: 'bold',fontSize: '1rem'}}>APTI-GROUND</div>
                        <div style={{fontSize: '0.8rem'}}>AN APTITUDE PLAYGROUND</div>
                        </div>
                    </div>
                </div>
                <div>
                    <Button variant="outline-dark p-2 m-2" onClick={()=>handleLogout()}>Logout</Button>
                </div>
            </div>
        </div>
        
        <div className="container-fluid p-0">
          <div className='row w-100 pe-2'>
            <div className={`${collapsed ? '' : 'col-lg-2 col-12 p-0'}`}>
                <div className={`sidebar h-100 bg-light p-3 ${collapsed ? 'd-none' : 'animate__animated animate__slideInLeft'}`} >
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
                <div className="main-content flex-grow-1" style={{ position: 'relative ', padding:'30px 0 20px 60px'}}>
                    {collapsed && (
                        <div className="d-flex justify-content-start mb-3">
                            <FaBars onClick={toggleSidebar} style={{ cursor: 'pointer' }} />
                        </div>
                    )}
                    <Container className="mt-5 mb-5" id='dashboard'>
                        <Row className="mb-4">
                            <Col md={4}>
                                <Card className="profile-card  ">
                                    <Card.Body>
                                        <FaUser className="profile-icon" style={{color:'black'}} />
                                        <h5 className="mt-3">{userDetails.name}</h5>
                                        <p>{userDetails.email}</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={8}>
                                <Card>
                                    <Card.Body>
                                        <h5 className='mt-2'>Score Analysis</h5>
                                        <div className='container-fluid justify-content-between'>
                                            <div className='row'>
                                                <div className='col-lg-4 col-12'>
                                                    <p className='mt-2 mb-0'>Today's 25 :</p>
                                                </div>
                                                <div className='col-lg-8 col-12'>
                                                    <ProgressBar animated now={progressScore25} label={progressScore25} className="mt-3" />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-lg-4 col-12'>
                                                    <p className='mb-0 mt-2'>Logical and Reasoning :</p>
                                                </div>
                                                <div className='col-lg-8 col-12'>
                                                    <ProgressBar animated now={progressScorelr} label={progressScorelr} className="mt-3" />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-lg-4 col-12'>
                                                <p className='mb-0 mt-2'> Quantitative Analysis :</p>
                                                </div>
                                                <div className='col-lg-8 col-12'>
                                                <ProgressBar animated now={progressScoreqa} label={progressScoreqa} className="mt-3" />
                                                </div>
                                            </div>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Card className="stats-card">
                                    <Card.Body>
                                        <h5>Test 25 Analysis</h5>
                                        {renderChart(userDetails.score25, 'chart1', 25)}
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="stats-card">
                                    <Card.Body>
                                        <h5>Test LR Analysis</h5>
                                        {renderChart(userDetails.scorelr, 'chart2' ,10)}
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="stats-card">
                                    <Card.Body>
                                        <h5>Test QA Analysis</h5>
                                        {renderChart(userDetails.scoreqa, 'chart3', 10)}
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    
                    
                </div>
                </div>

            </div>
        </div>
        
        
        <Footer/>
        </>
    );
}
