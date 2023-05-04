import React from 'react'
import "./omz.css";
import logo2 from '../../logo2.png'

export const Homz = () => {
  return (
    <>
        <div className="container-fluid mt-5 mb-5">
            <div className="row started ms-2 me-2 ">
                <div className="col">
                    <h2 className='mt-5 mb-4'>Get started with Homyz</h2>
                    <p className='mb-4'>Subscribe and find super attractive price quotes from us.
                    Find your residence soon</p>
                    <div className="btn-3">
                        <button> Get Started </button>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-between ms-2 me-2 mt-5">
                <div className="col-md-3 pe-5">
                    <img src={logo2} alt="" />
                    <p style={{color:'gray'}}> Our vision is to make all people
                            the best place to live for them.</p>
                </div>
                <div className="col-md-4">
                    <h2 style={{color:"blue"}}>Information</h2>
                    <p style={{color:"gray"}}>145 New York, FL 5467, USA</p>
                    <div className="row pe-5">
                    <ul >
                        <li>Property</li>
                        <li>Services</li>
                        <li>Product</li>
                        <li>About Us</li>
                    </ul>
                    </div>
                
                </div>
            </div>
        </div>
    </>
  )
}
