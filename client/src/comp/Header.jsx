import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <div>
         <div className='header'>
                    <div className='d-flex  justify-content-between border border-grey'>
                        <div>
                            <div className="d-flex  " style={{borderRadius:'20px' ,backgroundColor:'rgb(255, 255, 255)'}}>
                                <FontAwesomeIcon  className="p-2 ms-2" icon={faBrain} style={{color:'black', width:'45', height:'45'}} />
                                <div className="d-flex flex-column p-2 " style={{color:'#000'}}>
                                <div style={{fontWeight: 'bold',fontSize: '1rem'}}>APTI-GROUND</div>
                                <div style={{fontSize: '0.8rem'}}>AN APTITUDE PLAYGROUND</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <a href='/dashboard'>
                                <div className="profile-dashboard">
                                    <img src="https://cdn-icons-png.flaticon.com/256/6522/6522516.png" alt="Profile" className="rounded-circle m-2" width="45" height="45"  />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
    </div>
  )
}
