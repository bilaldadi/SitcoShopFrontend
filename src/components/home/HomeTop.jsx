import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HomeSlider from './HomeSlider'
import Bars from '../../assets/images/bars.png';
import MegaMenu from '../home/MegaMenu';
import axios from 'axios';
import AppUrl from '../../api/AppUrl';
import MegaMenuAll from '../home/MegaMenuAll';

class HomeTop extends Component {

  constructor(props){
    super();
    this.state={
      SideNavState:"sideNavClose",
      ContentOverState:"ContentOverlayClose",
      MenuData:[],

 
    }
  }


  componentDidMount(){
      
    axios.get(AppUrl.Categories).then(response=>{
      if(response.status === 200){
        this.setState({MenuData:response.data});
      }
    }).catch(error=>{})
}

  MenuBarClickHandler=()=>{
    this.SideNavOpenClose();
  }

  ContentOverlayClickHandler=()=>{
    this.SideNavOpenClose();
  }

  SideNavOpenClose=()=>{
    let SideNavState=this.state.SideNavState;
    let ContentOverState=this.state.ContentOverState;
    if(SideNavState==="sideNavOpen" && ContentOverState==="ContentOverlayOpen"){
      this.setState({SideNavState:"sideNavClose",ContentOverState:"ContentOverlayClose"});
    }
    else{
      this.setState({SideNavState:"sideNavOpen",ContentOverState:"ContentOverlayOpen"});
    }
  }

  


  render() {
    return (
      <Fragment>

<Container  fluid={true} >

    <Row>

        <Col  className='p-0 m-0'  lg={2}>

            <button onClick={this.MenuBarClickHandler} className='accordion child_subNav'>
              <img alt=''  className="bar-img"   src={Bars}  /> &nbsp; All Categories
            </button>

        </Col>

        <Col className='p-0 m-0'>
            <MegaMenu data={this.state.MenuData} />
        </Col>
          
      
    </Row>

</Container>

        <Container className='p-0 m-0 overflow-hidden' fluid={true}>
            <Row> 


                <Col lg={12} md={12} sm={12}>

                   <HomeSlider/>

                </Col>
            </Row>
        </Container>

        <div className={this.state.SideNavState}>
                <div className="list-group">
                  <MegaMenuAll/>
                </div> 
        </div>

            <div className={this.state.ContentOverState} onClick={this.ContentOverlayClickHandler}>

            </div>
      </Fragment>
    )
  }
}

export default HomeTop
