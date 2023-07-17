import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import playstore from '../../assets/images/google.png'
import apple from '../../assets/images/apple.png'
import AppUrl from '../../api/AppUrl'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class FooterDesktop extends Component {

  constructor(){
    super();
    this.state={
      address:"",
      facebook:"",
      instagram:"" ,
      twitter:"",
      ios:"",
      android:""
    }
  }

  componentDidMount(){

      axios.get(AppUrl.AllSiteInfo).then(response=>{
        if(response.status === 200){
          let JsonData = (response.data)[0];

          this.setState(
                       {address:JsonData['address'],
                        facebook:JsonData['facebook'],
                        instagram:JsonData['instagram'],
                        twitter:JsonData['twitter'],
                        ios:JsonData['ios_app'],
                        android:JsonData['android_app']
                      });
        }else{
          toast.error("Something Went Wrong !",{ position: "bottom-center"});
        }
      }).catch(error=>{
        toast.error("Something Went Wrong !",{ position: "bottom-center"});
      })
    }

  

  render() {
    return (
      <Fragment>
          <div className="footerback m-0 mt-5 pt-3 shadow-sm"> 
              <Container>
                <Row className="px-0 my-5">
                      <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                          <h5 className="footer-menu-title">OFFICE ADDRESS</h5>
                          <p>
                            {this.state.address}
                          </p>
                          <h5 className="footer-menu-title">SOCIAL LINK</h5>
                          <a href={this.state.facebook}  target="_blank" rel="noopener noreferrer" ><i className="fab m-1 h4 fa-facebook"></i></a>
                          <a href={this.state.instagram} target="_blank" rel="noopener noreferrer"><i className="fab m-1 h4 fa-instagram"></i></a>
                          <a href={this.state.twitter} target="_blank" rel="noopener noreferrer" ><i className="fab m-1 h4 fa-twitter"></i></a>
                      </Col>

                      <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                      <h5 className="footer-menu-title">THE COMPANY</h5>
                      <Link className="footer-link" to="/aboutus">About Us</Link><br></br>
                      <Link className="footer-link" to="/contact">Contact Us</Link><br></br>
                      </Col>

                      <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                      <h5 className="footer-menu-title">MORE INFO</h5>
                      <Link className="footer-link" to="/purchase">How to Purchase</Link><br></br>
                      <Link className="footer-link" to="/privacy">Privacy Policy</Link><br></br>
                      <Link className="footer-link" to="/refund">Refund Policy</Link><br></br>
                      </Col>

                      <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                      <h5 className="footer-menu-title">DOWNLOAD APPS</h5>
                      <a href={this.state.ios}><img src={playstore} alt=""/></a><br></br>
                      <a href={this.state.android}><img className="mt-2" src={apple} alt=""/></a><br></br>
                      </Col>

                </Row>
              </Container>
              <Container fluid={true} className='text-center m-0 pt-3 pg-1 bg-dark'>
                <Row>
                  <h6  className="text-white" >© 2023 All Rights Reserved. Developed By <a className="text-white" href="#/">Bilal Dadi</a></h6>
                </Row>
              </Container>
              

         </div>
         <ToastContainer />
         
         

      </Fragment>
    )
  }
}

export default FooterDesktop
