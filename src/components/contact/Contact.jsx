import React from 'react';
import './contact.css';
import contacts from '../../contact.jpg'

const Contact = () => {
  return (
    <>
        <div className="container-fluid mt-5 mb-5">
         <div className="row">
            <div className="col-md ">
                <div className="row ms-2"><h2 style={{color:"orange"}} >Our Contact Us</h2></div>
                 <div className="row ms-2 ">
                    <div className="col"> <h2 >Easy to contact us</h2> </div>
                </div>
                <div className="row ms-2 pe-4">
                <p> We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better</p>
                </div>
                <div className="row">
                    <div className="col-md">
                        <div className="basic ms-4">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="icon">
                                            <i className="fa-solid fa-phone"></i>
                                        </div>
                                     
                                    </div>
                                    <div className="col-8 ">
                                        <div className="number">
                                            <h5>Call</h5>
                                            <p>021 123 145 14</p>
                                        </div>
                                     </div>  
                                    <div className="row center"> 
                                        <button className='text-center btn-2'> Call Now </button>                                   
                                      </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-md me-5">
                    <div className="basic ms-4">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="icon">
                                        <i className="fa-brands fa-rocketchat"></i>
                                        </div>
                                     
                                    </div>
                                    <div className="col-8 ">
                                        <div className="number">
                                            <h5>Chat</h5>
                                            <p>021 123 145 14</p>
                                        </div>
                                     </div>  
                                    <div className="row center"> 
                                        <button className='text-center btn-2'> Chat Now </button>                                   
                                      </div>
                                </div>
                        </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-md mt-4">
                    <div className="basic ms-4">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="icon">
                                        <i className="fa-solid fa-video"></i>
                                        </div>
                                     
                                    </div>
                                    <div className="col-8 ">
                                        <div className="number">
                                            <h5>Video Call</h5>
                                            <p>021 123 145 14</p>
                                        </div>
                                     </div>  
                                    <div className="row center"> 
                                        <button className='text-center btn-2'>Video Call Now </button>                                   
                                      </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-md mt-4 me-5">
                    <div className="basic ms-4">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="icon">
                                        <i className="fa-solid fa-message"></i>
                                        </div>
                                     
                                    </div>
                                    <div className="col-8 ">
                                        <div className="number">
                                            <h5>Message</h5>
                                            <p>021 123 145 14</p>
                                        </div>
                                     </div>  
                                    <div className="row center"> 
                                        <button className='text-center btn-2'> Message Now </button>                                   
                                      </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="col-md d-flex justify-content-center">
            <div className="image " style={{width:"450px" , border:'none'}}>
                          <img className='image-1' src={contacts} alt="" />
                    </div>
            </div>
         </div>    
        </div>
    </>
  )
}

export default Contact