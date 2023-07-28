import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HomeSlider from './HomeSlider'
import AppUrl from '../../api/AppUrl'
import axios from 'axios'


class HomeTopMobile extends Component {

  constructor(){
    super();
    this.state={
      SliderData:[]
    }
  }

  componentDidMount(){
    axios.get(AppUrl.HomeSlider).then(response=>{
      this.setState({SliderData:response.data});
    }).catch(error=>{});

  }


  render() {
    return (
      <Fragment>
        <Container className='p-0 m-0 overflow-hidden' fluid={true}>
            <Row  className='p-0 m-0 overflow-hidden'>
                <Col lg={12} md={12} sm={12}>

                <HomeSlider SliderData={this.state.SliderData}/>

                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default HomeTopMobile
