import React, { useRef } from 'react';
import Card from 'react-bootstrap/Card';
import r1 from '../../r1.png';
import r2 from '../../r2.png';
import r3 from '../../r3.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './card.css';



export const Cards = () => {

    const slidr= useRef(null)

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
          />
        );
      }





    var settings = {
       
        infinite: false,
        arrows:false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


  return (
    <>
    <div className="container-fluid mt-4 mb-5">
            <div className="row ms-2"><h2 style={{color:"orange"}} >Best Choices</h2></div>
            <div className="row ms-2 ">
                <div className="col-6"> <h2 >Popular Residencies</h2> </div>
                <div className="col-md-5 d-flex justify-content-end ms-2"> 
                    <div className="btn-2 me-4"> <button onClick={()=>slidr.current.slickPrev()} >  <i className="fa-solid fa-less-than"></i> </button> </div> 
                    <div className="btn-2"> <button onClick={()=>slidr.current.slickNext()}> <i className="fa-solid fa-greater-than"></i> </button> </div>
                </div>   
            </div>  




            <div className="slid ">
            <div className="container-fluid mt-4 ">
            <Slider  ref={slidr} {...settings}>
          <div className='house'>
          <Card >
            <Card.Img variant="top" src={r1} />
            <Card.Body>
                <Card.Text> <h5> <span>$</span> 47,043 </h5> </Card.Text>
                <Card.Title> <h3>Aliva Priva Jardin</h3> </Card.Title>
                <Card.Text>
                <p>
                Some example text to build on the card title and make up the
                card's content.
                </p>
                </Card.Text>
            </Card.Body>
        </Card>
          </div>
          <div  className='house'>
          <Card >
            <Card.Img variant="top" src={r2} />
            <Card.Body>
                <Card.Text> <h5> <span>$</span> 66,343 </h5> </Card.Text>
                <Card.Title> <h3>Asti Garden City</h3> </Card.Title>
                <Card.Text>
                <p>
                Some example text to build on the card title and make up the
                card's content.
                </p>
                </Card.Text>
            </Card.Body>
        </Card>
          </div>
          <div  className='house'>
          <Card >
            <Card.Img variant="top" src={r3} />
            <Card.Body>
                <Card.Text> <h5> <span>$</span> 45,343 </h5> </Card.Text>
                <Card.Title> <h3>Islamabad City</h3> </Card.Title>
                <Card.Text>
                <p>
                Some example text to build on the card title and make up the
                card's content.
                </p>
                </Card.Text>
            </Card.Body>
        </Card>
          </div>
          <div  className='house'>
          <Card >
            <Card.Img variant="top" src={r1} />
            <Card.Body>
                <Card.Text> <h5> <span>$</span> 12,343 </h5> </Card.Text>
                <Card.Title> <h3>Haripur City</h3> </Card.Title>
                <Card.Text>
                <p>
                Some example text to build on the card title and make up the
                card's content.
                </p>
                </Card.Text>
            </Card.Body>
        </Card>
          </div>
          <div  className='house'>
          <Card >
            <Card.Img variant="top" src={r2} />
            <Card.Body>
                <Card.Text> <h5> <span>$</span> 66,343 </h5> </Card.Text>
                <Card.Title> <h3>Lahore City</h3> </Card.Title>
                <Card.Text>
                <p>
                Some example text to build on the card title and make up the
                card's content.
                </p>
                </Card.Text>
            </Card.Body>
        </Card>
          </div>
          <div  className='house'>
          <Card >
            <Card.Img variant="top" src={r3} />
            <Card.Body>
                <Card.Text> <h5> <span>$</span> 76,893 </h5> </Card.Text>
                <Card.Title> <h3>Abbottabad City</h3> </Card.Title>
                <Card.Text> 
                <p>
                Some example text to build on the card title and make up the
                card's content.
                </p>
               
                </Card.Text>
            </Card.Body>
        </Card>
          </div>
        </Slider>
            </div>
           
            </div>



            

     </div> 
    </>
      
  )
}

