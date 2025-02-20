import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
        
        <div className='footer bg-light border border-grey'>
                    <div className='container pt-5'>
                        <div className="row ">
                            
                            <div className='col-lg-4 col-12 col-md-6 mb-0 mb-md-4 pb-0 pb-md-2 '>
                                <div className='d-flex flex-column'>
                                    <div className="d-flex mb-2" >
                                        <FontAwesomeIcon  className="pt-2 pr-2 pb-2" icon={faBrain} style={{color:'black', width:'45', height:'45'}} />
                                        <div className="d-flex flex-column p-2" style={{color:'#000'}}>
                                            <div style={{fontWeight: 'bold',fontSize: '1rem'}}>APTI-GROUND</div>
                                            <div style={{fontSize: '0.7rem'}}>AN APTITUDE PLAYGROUND</div>
                                        </div>
                                    </div>
                                    <p className='fs-6'>Leading Assessment provider in India</p>
                                    <p className='fs-6'>© {new Date().getFullYear()} Copyrights<><br />A Product of KCE Developers</></p>                         
                                </div>                      
                            </div> 
        
                            <div className='col-lg-3 col-12 col-md-6 mb-0 mb-md-4 pb-0 pb-md-2'>
                                <p className='fs-4 mb-1'>Platform</p>
                                <ul className='fs-6 p-0' type='none' style={{color:'black'}}>
                                    <li className='mb-1'><Link to='/about'><i className='fas fa-chevron-right'></i> About us</Link></li>
                                    <li className='mb-1'><Link to="/service"><i className='fas fa-chevron-right'></i> Service</Link></li>
                                    <li className='mb-1'><Link to="/terms"><i className='fas fa-chevron-right'></i> Terms and Conditions</Link></li>
                                    <li className='mb-1'><Link to="/contact"><i className='fas fa-chevron-right'></i> Contact Us  </Link></li>
                                </ul>
        
                            </div>
        
                            <div className='col-lg-3 col-12 col-md-6 mb-0 mb-md-4 pb-0 pb-md-2'>
                                <p className='fs-4 mb-1'>Usefull Links</p>
                                <ul className='fs-6 p-0' type='none' style={{color:'black'}}>
                                    <li className='mb-1'><Link to="/home"><i className='fas fa-chevron-right'></i> Today's Test</Link></li>
                                    <li className='mb-1'><Link to="/dashboard"><i className='fas fa-chevron-right'></i> Dashboard</Link></li>
                                    <li className='mb-1'><Link to="#"><i className='fas fa-chevron-right'></i> Courses</Link></li>
                                    <li className='mb-1'><Link to="#"><i className='fas fa-chevron-right'></i> Overviews</Link></li>
                                </ul>
                            </div>
        
                            <div className='col-lg-2 col-12 col-md-6 mb-0 mb-md-4 pb-0 pb-md-2'>
                                <p className='fs-4 mb-1'>Follow us on</p>
                                <ul className='fs-6 p-0' type='none' style={{color:'black'}}>
                                    <li className='mb-1'>
                                        <a href="https://www.linkedin.com" className="btn p-0 m-0 b-0">
                                            <i className="fab fa-1x fa-linkedin"></i> Linkedin
                                        </a>
                                    </li>
                                    <li className='mb-1'>
                                        <a href="https://www.facebook.com" className="btn p-0 m-0 b-0">
                                            <i className="fab fa-1x fa-facebook"></i> Facebook
                                        </a>
                                    </li>
                                    <li className='mb-1'>
                                        <a href="https://www.instagram.com" className="btn p-0 m-0 b-0">
                                            <i className="fab fa-1x fa-instagram"></i> Instagram
                                        </a>
                                    </li>
                                    <li className='mb-1'>
                                        <a href="https://www.twitter.com" className="btn p-0 m-0 b-0">
                                            <i className="fab fa-twitter fa-1x"></i> Twitter
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

    </div>
  )
}
