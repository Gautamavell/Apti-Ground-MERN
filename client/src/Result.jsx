import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { FaRegSmileWink } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import { Link } from 'react-router-dom';
import { useEffect,useRef } from 'react';
import axios from 'axios';
import Header from './comp/Header';
import Footer from './comp/Footer';
    

export default function Result({ type,test }) {
    const userDetails = JSON.parse(localStorage.getItem('userDetails')) || {};
    const totalScore = userDetails[type][0];
    const score =localStorage.getItem('score') || 'No score available';
    const updateRef = useRef(localStorage.getItem('isScoreUpdated')||false);
    useEffect(() => {
        if (!updateRef.current){
            updateRef.current = true;
            userDetails[type].push(score);
            localStorage.setItem('userDetails',JSON.stringify(userDetails));
            localStorage.setItem('isScoreUpdated',JSON.stringify(updateRef.current));
            const updateUserDetails = async()=>{
                try {
                    await axios.put(import.meta.env.VITE_BASE_URL+'/updateScore', userDetails);
                } catch (error) {
                    console.error('Error updating user details (Results):', error);
                }
            };
            if(updateRef.current){
                updateUserDetails();
            }
            localStorage.removeItem('score')
    }

    }, [type, score]);
    

    return (
        <>
        <Header/>
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="border border-dark animate__animated animate__zoomIn animate__delay-.4s">
                        <Card.Body >
                            <Card.Title className="text-center">
                                <FaRegSmileWink size={50} className="mb-3" />
                                <h2 className="animate__animated animate__bounceIn">Test Results</h2>
                                <h4 className="animate__animated animate__bounceIn animate_delay-2s">{test}</h4>
                            </Card.Title>
                            <hr />
                            <Card.Text className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                                <strong>Your Score:</strong> {score}
                            </Card.Text>
                            <Card.Text className="text-center animate__animated animate__fadeInUp animate__delay-2s">
                                <strong>Total Score:</strong> {totalScore}
                            </Card.Text>
                            <Card.Text className="text-center animate__animated animate__fadeInUp animate__delay-3s">
                                <strong>User Name:</strong> {userDetails.name || 'No name available'}
                            </Card.Text>
                            <div className='d-flex justify-content-center align-items-center animate__animated animate__zoomIn animate__delay-4s'>
                                <Link to='/home' className='btn btn-dark align-center ' type='button'>Home</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Footer/>
        </>
    );
}


