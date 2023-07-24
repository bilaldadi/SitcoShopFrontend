import React, { Component, Fragment } from 'react'
import { Container, Row, Card } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import AppUrl from '../../api/AppUrl';


class NewArrival extends Component {

    constructor(props){
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.state={
            NewArrivalData:[]
        }
    }

    next() {
        this.slider.slickNext();
      }
    
    previous() {
        this.slider.slickPrev();
    }
    
    componentDidMount(){
        axios.get(AppUrl.ProductListByRemark("new_arrival")).then(response=>{
            this.setState({NewArrivalData:response.data})
        }).catch(error=>{});
    }






  render() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed:2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
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

      const NewArrivalList = this.state.NewArrivalData;
      const MyView = NewArrivalList.map((NewArrivalList,i)=>{
        return  <div>
                    <Card className="image-box card">
                            <img className="center" alt='' src={NewArrivalList.image}/>   
                        <Card.Body> 
                            <p className="product-name-on-card">{NewArrivalList.title}</p>
                            <p className="product-price-on-card">{NewArrivalList.price}</p>
                        </Card.Body>
                    </Card>
                </div>

      })

    return (
      <Fragment>
        <Container className='text-center' fluid={true}>
                        <div className='section-title text-center mb-55'>
                            <h2> 
                             
                            <button  className='btn btn-sm ml-2 site-btn' onClick={this.previous} >
                            <i className="fa fa-angle-left"></i>
                            </button> 

                                &nbsp;
                                    New Arrival  
                                &nbsp;
                                     
                            <button  className='btn btn-sm ml-2 site-btn' onClick={this.next}>
                            <i className="fa fa-angle-right"></i>
                            </button> 
                            
                            
                            </h2>
                            
                            <p>Check out our new products that you may like</p>
                        </div>
            <Row>
                <Slider ref={c=>(this.slider=c)} {...settings}>

                   {MyView}
                  
                </Slider>
          </Row>

        </Container>
      </Fragment>
    )
  }
}

export default NewArrival
