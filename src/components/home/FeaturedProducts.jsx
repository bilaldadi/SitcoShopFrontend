import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import AppUrl from '../../api/AppUrl';

class FeaturedProducts extends Component {

    constructor(){
        super();
        this.state={
            ProductData:[]
        }
    }

    componentDidMount(){
        axios.get(AppUrl.ProductListByRemark("FEATURED")).then(response=>{
            this.setState({ProductData:response.data});
        }).catch(error=>{
            
        });
    }



  render() {

    const ProductList = this.state.ProductData;
    const MyView = ProductList.map((ProductList,i)=>{
        if(ProductList.special_price === "NA") {

            return  <Col className='p-1' key={i.toString()} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Link to="/ProductDetails">

                            <Card className="image-box card">
                                    <img alt='' className="center" src={ProductList.image} />   
                                <Card.Body> 
                                    <p className="product-name-on-card">{ProductList.title}</p>
                                    <p className="product-price-on-card">Price:{ProductList.price}</p>
                                </Card.Body>
                            </Card>
                            
                        </Link>

                    </Col>
                }else {
                    return  <Col className='p-1' key={i.toString()} xl={2} lg={2} md={2} sm={4} xs={6}>
                                <Link to="/ProductDetails">

                                    <Card className="image-box card">
                                            <img alt='' className="center" src={ProductList.image} />   
                                        <Card.Body> 
                                            <p className="product-name-on-card">{ProductList.title}</p>
                                            <p className="product-price-on-card">Price: <strike className="text-secondary">{ProductList.price}</strike>  {ProductList.special_price} </p>
                                        </Card.Body>
                                    </Card>
                                    
                                </Link>

                            </Col>

                }
        

    })




    return (
        <Fragment>
                <Container >
                    <Row className='text-center' fluid={true} >
                            <div className='section-title text-center mb-55'>
                                <h2>Featured Products</h2>
                                <p>Check out our new products that you may like</p>
                            </div>
                    </Row>
                    <Row>
                       {MyView}

                    </Row>
                </Container>
        </Fragment>
     
     
    )
  }
}

export default FeaturedProducts
