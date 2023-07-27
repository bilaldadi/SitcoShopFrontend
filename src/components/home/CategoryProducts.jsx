import React, {Fragment } from 'react'
import { Col, Container, Row, Card} from 'react-bootstrap'
import 'react-toastify/dist/ReactToastify.css';

function CategoryProducts(props) {

    
    


    const category =props.category; 
    const ProductList = props.ProductData;
    const MyView = ProductList.map((ProductList,i)=>{

        return  <Col key={i.toString()} className="p-2" xl={3} lg={3} md={3} sm={6} xm={6}>

                    <Card className="image-box card w-100">
                            <img alt='' className="center w-75" src={ProductList.image} />   
                        <Card.Body> 
                            <p className="product-name-on-card">{ProductList.title}</p>
                            <p className="product-price-on-card">{ProductList.price}</p>
                        </Card.Body>
                    </Card>

                </Col>


    });
  
    return (
        
     <Fragment>
        <Container className='text-center p-1'>
                        <div className='section-title text-center mb-55'>
                            <h2>{category}</h2>
                            <p>This is out Latest Collection of {category}</p>
                        </div>
                <Row>
                   {MyView}
                    
                </Row>
        </Container>
       
     </Fragment>
    )
  }


export default CategoryProducts
