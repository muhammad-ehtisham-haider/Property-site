import React, { useState } from 'react'
import './accordian.css'
import value from '../../value.png'
import { data } from './Api'
import Myaccordion from './Myaccordion'

const Accordian = () => {
    const[items, setitems]=useState(data)
  return (
    <>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-md ms-4">
                <div className="image " style={{width:"450px"}}>
                          <img className='image-1' src={value} alt="" />
                    </div>
                </div>
                <div className="col-md">
                    <div className="row "><h2 style={{color:"orange"}} >Our Value</h2></div>
                    <div className="row  ">
                        <div className="col"> <h2 >Value We Give to You</h2> </div>
                    </div>
                    <div className="row">
                        <div className="col"> <p>We always ready to help by providijng the best services for you. <br className='col-md' />
                         We beleive a good blace to live can make your life better </p> </div>
                    </div>
                    <div className="row">
                       {
                        items.map((current, i)=>{
                            return(
                                <Myaccordion key={i} {...current}/>
                            )
                        })
                       }

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Accordian