import React from 'react';
import './main.css';
import hero from '../hero-image.png';

const Main = () => {
  return (
    <>
        <div className="container-fluid main pb-5">
        <div className="container ps-4">
        <div className="row">
                <div className="col-md left">
                    <div className="title pt-5 pb-5">
                     <h1>Discover <br />Most Suitable <br /> Property </h1> 
                     </div>
                     <div className="orange"></div>
                     <div className="blur"></div>
                    <div className="para-1 pb-3"> <p>Find a variety of properties that suit you very easilty
                                                Forget all difficulties in finding a residence for you</p> 
                    </div>
                    
                    <div className="search d-flex justify-content-around mt-2 pt-2 pb-2">
                        <div className="icon mt-2"><i className="fa-solid fa-location-dot"></i></div>
                        <input type="text" />
                        <button className='btn btn-primary'> Search</button>
                    
                    </div>
                    <div className="row pt-5 mt-2 ">
                      <div className="col">
                        <div className="no d-flex"> <h2>9,000</h2>  <i className="fa-solid fa-plus mt-2 ms-2"></i>  </div>
                        <div className="para-1"> <p  >Premium Product</p> </div>
                      </div>
                      <div className="col">
                      <div className="no d-flex"> <h2>2,000</h2>  <i className="fa-solid fa-plus mt-2 ms-2"></i>  </div>
                        <div className="para-1"> <p >Happy Customer</p> </div>
                      </div>
                      <div className="col">
                      <div className="no d-flex"> <h2>28</h2>  <i className="fa-solid fa-plus mt-2 ms-2"></i>  </div>
                        <div className="para-1"> <p >Awards Winning</p> </div>
                      </div>
                    </div>
                </div>
                <div className="col-md pt-5">
                    <div className="image">
                          <img className='image-1' src={hero} alt="" />
                    </div>
                </div>
            </div>
        </div>
       
           
        </div>
       
       
    </>
  )
}

export default Main