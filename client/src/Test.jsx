import { useState, useEffect ,useRef} from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Form, ProgressBar, ListGroup, Card } from 'react-bootstrap';
import './css/Test.css'; 
import {Sample25,SampleLR,SampleQA} from './SampleQuestions';
import Swal from 'sweetalert2';

export default function Test({type}) {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [timeLeft, setTimeLeft] = useState(type==='test25'?1800:900); //Set overall test duration   
    const [countdown, setCountdown] = useState(3); //Set initial countdown value
    const [testStarted, setTestStarted] = useState(false); //Track if the test has started
    const chosenOption=useRef([]);



    useEffect(() => {
        const url='http://127.0.0.1:3001/';
        axios.get(url+type)
            .then(response => {
                console.log('Calling endpoint:',url+type);
                console.log(response);
                setQuestions(response.data);
                initializeEmptyOption(response.data);
            })
            .catch(error => {
                console.error('Error fetching questions:', error)
            });
    },[]);

    useEffect(() => {
        if (testStarted) {
            if (timeLeft > 0) {
                const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
                return () => clearTimeout(timerId);
            } else {
                handleSubmit();// Auto-submit the test if time runs out
            }
        }
    }, [timeLeft, testStarted]);

    useEffect(() => {
        if (countdown > 0) {
            const countdownId = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(countdownId);
        } else {
            setTestStarted(true);
        }
    }, [countdown]);

    useEffect(() => {
    if (questions.length === 0) {
        console.log('Failed to fetch questions, using sample questions.');
        setQuestions(type === 'testlr' ? SampleLR : type === 'testqa' ? SampleQA : Sample25);
        initializeEmptyOption(questions);
    }
}, [questions, type]);


    function initializeEmptyOption(question){
        const initialOption=question.map(()=>'null')
        chosenOption.current=initialOption;
    }



    const handleOptionChange = (index,value) => {
        chosenOption.current[index]=value
    };

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setCurrentQuestion(0); //loop back to the first question if the last question is reached
        }
    };

    const handleNavigation = (index) => {
        setCurrentQuestion(index);
    };

    const handleSubmit = () => {
        Swal.fire({
            title: 'Confirm Submission',
            text: "Do you want to submit?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, submit it!'
          }).then((result) => {
            if (result.isConfirmed) {
                let score=0
                for(let i=0;i<questions.length;i++){
                     if (chosenOption.current[i] === questions[i].correctAnswer) {
                        score=score+1;
                    }
                }
                localStorage.setItem('score', score);
                localStorage.removeItem('isScoreUpdated');
                window.location.href =type+'/result';
            }
          });
        
    };

    if (!questions[currentQuestion]) {
        return <Container>Error: Question not found.</Container>;
    }

    return (
        <div>
            {!testStarted && (
                <div className="blur-overlay">
                    <div className="countdown">
                        <h1 className="countdown-number">{countdown}</h1>
                    </div>
                </div>
            )}
            <header>
                <div className='p-3 d-flex justify-content-between border border-grey'>
                    <h4 className='mb-0'>{type==='testlr'?'Logical and Reasoning':(type==='testqa'?'Quantitative Analysis':"Todays's 25")}</h4>
                </div>
            </header>
            
            <Container fluid>
                <Row className="mt-4">
                    <Col md={3} className='mb-3'>
                        <Card className='h-100'>
                            <Card.Header><strong>Questions</strong></Card.Header>
                            <ListGroup variant="flush" style={{maxHeight:'75vh',overflowY:'auto'}}>
                                {questions.map((q, index) => (
                                    <ListGroup.Item
                                        key={index}
                                        action
                                        active={currentQuestion === index}
                                        onClick={() => handleNavigation(index)}
                                    >
                                        Question {index + 1}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col md={9} className='mb-3'>
                        
                        <Card className='h-100 '>
                            <Card.Header>
                            <div className='d-flex p-3 justify-content-between bg-light'>
                                <h5 className='m-0'>Question {currentQuestion +1 }:</h5>
                                <div className='d-flex mb-0'>
                                    <h6 className='mb-0'>Marks : <span className='badge bg-success p-2 mx-2'>+ 1</span><span className='badge bg-danger p-2 mx-2'>- 0</span></h6>
                                </div>
                            </div>
                            </Card.Header>
                            <Card.Body className='d-flex flex-column justify-content-between'>
                                <h5>{questions[currentQuestion].question}</h5>
                                <Form>
                                    {questions[currentQuestion].options.map((option, index) => (
                                        <Form.Check 
                                            type="radio"
                                            name="options"
                                            key={index}
                                            label={option}
                                            value={option}
                                            checked={chosenOption.current[currentQuestion] === option}
                                            onChange={()=>{handleOptionChange(currentQuestion,option)}}
                                            className="my-2"
                                        />
                                    ))}
                                </Form>
                                <div className="mt-4 text-left">
                                    <Button onClick={handleNextQuestion} variant="primary" style={{ position: 'absolute', bottom: '110px', right: '17px' }}>Next</Button>
                                </div>
                               
                            </Card.Body>
                            <Card.Footer>
                                <div className=" d-flex justify-content-between mt-2">
                                    <p className='mt-2 mb-0'>
                                        <strong >Time left:</strong> {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')} minutes
                                    </p>
                                    <Button onClick={handleSubmit} variant="success">Submit</Button>
                                </div>
                                <ProgressBar now={((type==='test25'?1800:900 )- timeLeft) / 10} className="mt-3" />
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <hr></hr>

            
        </div>
    );
}


