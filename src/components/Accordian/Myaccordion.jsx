import React, { useState } from 'react'
import './accordian.css'

const Myaccordion = ({question, answer}) => {
    const[show, setshow]=useState(false)
  return (
   <>

    <div className="row accord">
        <div className="col-8" onClick={()=> setshow(!show)} style={{cursor:"pointer"}}> <h5>  {question} </h5> </div>
        <div className="col-4 d-flex justify-content-end" onClick={()=> setshow(!show)} > {show== true? <i className="fa-solid fa-minus mt-2"></i> : <i className="fa-solid fa-plus mt-2"></i> } </div>
        <div className="ans"> {show && <p> {answer} </p> } </div> 
    </div>
   </>
  )
}

export default Myaccordion