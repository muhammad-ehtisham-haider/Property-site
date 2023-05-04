import React from 'react'
import equi from '../equinix.png';
import pro from '../prologis.png';
import tower from '../tower.png';
import digi from '../realty.png';
import './logo.css'

const Logos = () => {
  return (
    <>
        <div className="container-fluid ">
            <div className="row mt-5 mb-5 ">
                <div className="col-md d-flex justify-content-center"> <img className='image-2' src={pro} alt="" /> </div>
                <div className="col-md d-flex justify-content-center"><img className='image-2' src={tower} alt="" /></div>
                <div className="col-md d-flex justify-content-center"><img className='image-2' src={equi} alt="" /></div>
                <div className="col-md d-flex justify-content-center"><img className='image-2' src={digi} alt="" /></div>
            </div>
        </div>
    </>
  )
}

export default Logos