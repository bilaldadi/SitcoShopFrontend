import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import AppUrl from '../../api/AppUrl';
import { Link } from 'react-router-dom';

class Categories extends Component {

    constructor(){
        super();
        this.state={
            MenuData:[]
        }
    }

    componentDidMount(){
        axios.get(AppUrl.Categories).then(response=>{
            this.setState({MenuData:response.data});
        }).catch(error=>{});
    }

  render() {

    const CatList = this.state.MenuData;

    const myview = CatList.map((CatList,i)=>{

        return  <Col className='p-2' key={i.toString()} xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Link to={"categoryproducts/"+ CatList.category_name} >
                        {/* <Card className="text-center home_categories">
                            <Card.Body> 
                                <img alt='' className="center" src={CatList.category_image}/>
                            </Card.Body>
                        </Card> */}
                        <img alt='' className="center down_cat" src={CatList.category_image}/>
                    </Link>
                </Col>
    })


    return (
        <Fragment>
                <Container className='text-center'>
                            <div className='section-title text-center mb-55'>
                                        <h2>Categories</h2>
                                        <p>Check out our new products that you may like</p>
                            </div>
                        <Row>
                            <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
                                <Row>
                                   {myview}
                                </Row>
                            </Col>
                        </Row>

                </Container>

        </Fragment>
    )
  }
}

export default Categories
