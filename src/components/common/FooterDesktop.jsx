import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import playstore from '../../assets/images/google.png'
import apple from '../../assets/images/apple.png'

class FooterDesktop extends Component {
  render() {
    return (
      <Fragment>
          <div className="footerback m-0 mt-5 pt-3 shadow-sm"> 
              <Container>
                <Row className="px-0 my-5">
                      <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                          <h5 className="footer-menu-title">OFFICE ADDRESS</h5>
                          <p>42211 Fake Street Fake state, Near Fake Mall. FA 26112 <br></br>
                                      Email: Support@sitcoshop.com
                          </p>
                          <h5 className="footer-menu-title">SOCIAL LINK</h5>
                          <a href="/#"><i className="fab m-1 h4 fa-facebook"></i></a>
                          <a href="/#"><i className="fab m-1 h4 fa-instagram"></i></a>
                          <a href="/#"><i className="fab m-1 h4 fa-twitter"></i></a>
                      </Col>

                      <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                      <h5 className="footer-menu-title">THE COMPANY</h5>
                      <Link className="footer-link" to="/aboutus">About Us</Link><br></br>
                      <Link className="footer-link" to="/">Company Profile</Link><br></br>
                      <Link className="footer-link" to="/contact">Contact Us</Link><br></br>
                      </Col>

                      <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                      <h5 className="footer-menu-title">MORE INFO</h5>
                      <Link className="footer-link" to="/purchase">How to Purchase</Link><br></br>
                      <Link className="footer-link" to="/privacy">Privecy Policy</Link><br></br>
                      <Link className="footer-link" to="/refund">Refund Policy</Link><br></br>
                      </Col>

                      <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                      <h5 className="footer-menu-title">DOWNLOAD APPS</h5>
                      <a href="/#"><img src={playstore} alt=""/></a><br></br>
                      <a href="/#"><img className="mt-2" src={apple} alt=""/></a><br></br>
                      </Col>

                </Row>
              </Container>
              <Container fluid={true} className='text-center m-0 pt-3 pg-1 bg-dark'>
                <Row>
                  <h6  className="text-white" >© 2023 All Rights Reserved. Developed By <a className="text-white" href="#/">Bilal Dadi</a></h6>
                </Row>
              </Container>

         </div>

               </Fragment>
    )
  }
}

export default FooterDesktop
