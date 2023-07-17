import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import AppUrl from '../../api/AppUrl';
import HtmlParser from 'react-html-parser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Purchase extends Component {

     constructor(){
          super();
          this.state={
               purchase : ""
          }
     }

     componentDidMount(){

          let siteInfoPurchase = sessionStorage.getItem('AllSiteInfo');

          if(siteInfoPurchase === null){

               axios.get(AppUrl.AllSiteInfo).then(response=>{
                    if(response.status === 200){
                         let JsonData = (response.data)[0]['purchase'];
                         this.setState({purchase:JsonData});
                         sessionStorage.setItem('siteInfoPurchase',JsonData);

                    }else{
                         toast.error("Something Went Wrong !",{ position: "bottom-center"});

                    }
     
               }).catch(error=>{
                    toast.error("Something Went Wrong !",{ position: "bottom-center"});
               });

          }else{
               this.setState({purchase:siteInfoPurchase});
          }

          
     }

     render() {
          return (
               <Fragment>
                    <Container>
                         <Row className="p-2">
                              <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                                   <h4 className="section-title-login">Purchase Page </h4>
                                   <p className="section-title-contact">
                                        {HtmlParser(this.state.purchase)}
                                   </p>

                              </Col>
                         </Row>
                    </Container>
                    <ToastContainer />
          </Fragment>
          )
     }
}

export default Purchase