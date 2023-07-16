import React, { Component, Fragment } from 'react'
import {Navbar,Container, Row, Col, Button} from 'react-bootstrap';
import Logo from '../../assets/images/Logo.png';
import { Link } from 'react-router-dom';
import MegaMenuAll from '../home/MegaMenuAll';
import Bars from '../../assets/images/bars.png';

class NavMenuDesktop extends Component {

  constructor(){
    super();
    this.state={
      SideNavState:"sideNavClose",
      ContentOverState:"ContentOverlayClose"
    }
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
      <div className='TopSectionDown'>
          <Navbar className='navbar' fixed={"top"} expand="lg">
            <Container fluid={"true"} className=' fixed-top shadow-sm p-2 mb-0 bg-white'>

              <Row>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <img alt='' onClick={this.MenuBarClickHandler} className="bar-img" src={Bars} />
                  <Link to='/'> <img className='nav-logo' src={Logo} alt=''/> </Link>

                </Col>

                <Col className='p-1 mt-1' lg={4} md={4} sm={12} xs={12}>
                  <div className='input-group w-100'>
                    <input type="text" className='form-control' placeholder='Search for products, brands and more' />
                    <Button type='button' className='btn btn-warning'><i className='fa fa-search'></i></Button>
                  </div>
                </Col>

              
                <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                      <Link to="/favourite" className="btn">
                        <i className="fa h4 fa-heart"></i>
                        <sup>
                          <span className="badge text-white bg-danger">12</span>
                        </sup>                  
                      </Link>
                      <Link to="/notification" className="btn">
                        <i className="fa h4 fa-bell"></i>
                        <sup>
                          <span className="badge text-white bg-danger">5</span>
                        </sup>                  
                      </Link>
                      
                      <a href="/#" className="btn">
                        <i className="fa h4 fa-mobile-alt"></i>
                      </a>
                      <Link to="/login" className="h4 btn">LOGIN</Link>

                      <Button className="cart-btn">
                        <i className="fa fa-shopping-cart"></i> 3 Items
                      </Button>
                </Col>

              </Row>
              
            </Container>

            <div className={this.state.SideNavState}>
              <hr className="w-80" />
              <div className="list-group">
                <MegaMenuAll/>
              </div> 
          </div>

             <div className={this.state.ContentOverState} onClick={this.ContentOverlayClickHandler}>

          </div>

          </Navbar>
      </div>
     
      </Fragment>
     
    )
  }
}

export default NavMenuDesktop
