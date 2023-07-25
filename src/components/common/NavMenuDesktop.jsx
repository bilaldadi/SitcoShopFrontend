import React, { Component, Fragment } from 'react'
import {Navbar,Container, Row, Col, Button} from 'react-bootstrap';
import Logo from '../../assets/images/Logo.png';
import { Link } from 'react-router-dom';
// import MegaMenuAll from '../home/MegaMenuAll';
// import Bars from '../../assets/images/bars.png';
// import MegaMenu from '../home/MegaMenu';
// import axios from 'axios';
// import AppUrl from '../../api/AppUrl';

class NavMenuDesktop extends Component {

//   constructor(props){
//     super();
//     this.state={
//       SideNavState:"sideNavClose",
//       ContentOverState:"ContentOverlayClose",
//       MenuData:[],

 
//     }
//   }


//   componentDidMount(){
      
//     axios.get(AppUrl.Categories).then(response=>{
//       if(response.status === 200){
//         this.setState({MenuData:response.data});
//       }
//     }).catch(error=>{})
// }

//   MenuBarClickHandler=()=>{
//     this.SideNavOpenClose();
//   }

//   ContentOverlayClickHandler=()=>{
//     this.SideNavOpenClose();
//   }

//   SideNavOpenClose=()=>{
//     let SideNavState=this.state.SideNavState;
//     let ContentOverState=this.state.ContentOverState;
//     if(SideNavState==="sideNavOpen" && ContentOverState==="ContentOverlayOpen"){
//       this.setState({SideNavState:"sideNavClose",ContentOverState:"ContentOverlayClose"});
//     }
//     else{
//       this.setState({SideNavState:"sideNavOpen",ContentOverState:"ContentOverlayOpen"});
//     }
//   }






  render() {
    return (
      <Fragment>
      <div className='TopSectionDown'>
          <Navbar className='navbar' fixed={"top"} expand="lg">
            <Container fluid={"true"} className=' main-color fixed-top shadow-sm p-2 mb-0'>

              <Row>

                <Col className='text-center' lg={2} md={4} sm={12} xs={12}>
                  
                  <Link to='/'> <img className='nav-logo' src={Logo} alt=''/> </Link>

                </Col>

                <Col className='p-1 mt-1 ' lg={6} md={4} sm={12} xs={12}>
                  <div className='input-group w-100'>
                    <input type="text" className='form-control' placeholder='Search for products, brands and more' />
                    <Button type='button' className='btn btn-warning'><i className='fa fa-search'></i></Button>
                  </div>
                </Col>

              
                <Col className="p-1 mt-1 text-center" lg={4} md={4} sm={12} xs={12}>
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

                      <Link to="/cart" className="cart-btn">
                        <i className="fa fa-shopping-cart"></i> 3 Items
                      </Link>
                </Col>

              </Row>

            </Container>

            

            {/* <div className={this.state.SideNavState}>
                <hr className="w-80" />
                <div className="list-group">
                  <MegaMenuAll/>
                </div> 
            </div> */}

          {/* <div className={this.state.ContentOverState} onClick={this.ContentOverlayClickHandler}>

          </div> */}

          </Navbar>

          
      </div>

      {/* <Container  fluid={true} >

            <Row>

              <Col  className='bg-black p-0 m-0'  lg={2}>

                <button onClick={this.MenuBarClickHandler} className='accordion child_subNav'>
                  <img alt=''  className="bar-img"   src={Bars}  /> &nbsp; All Categories
                </button>

              </Col>

              <Col className='p-0 m-0'>
                <MegaMenu data={this.state.MenuData} />
              </Col>
                
              
            </Row>
            
      </Container> */}
     
      </Fragment>
     
    )
  }
}

export default NavMenuDesktop
