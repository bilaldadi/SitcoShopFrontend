import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import AppUrl from '../../api/AppUrl';
import HtmlParser from 'react-html-parser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Refund extends Component {

     constructor(){
          super();
          this.state={
               refund :"",
               loaderDiv :"",
               mainDiv :"d-none"
          }
     }

          componentDidMount(){

               let siteInfoRefund = sessionStorage.getItem('AllSiteInfo');
               if(siteInfoRefund === null){
                    axios.get(AppUrl.AllSiteInfo).then(response=>{
                         if(response.status === 200){
                              let JsonData = (response.data)[0]['refund'];
                              this.setState({refund:JsonData,loaderDiv:'d-none',mainDiv:''});
                              sessionStorage.setItem('siteInfoRefund',JsonData);
                         }else{
                              toast.error("Something Went Wrong !",{ position: "bottom-center"});

                         }
                    }).catch(error=>{
                         toast.error("Something Went Wrong !",{ position: "bottom-center"});
                    });

               }else{
                    this.setState({refund:siteInfoRefund,loaderDiv:'d-none',mainDiv:''});
               }

              

          }
     
     render() {
          return (
               <Fragment>
                    <Container>
                         <Row className="p-2">
                              <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                                   <h4 className="section-title-login">Refund Policy Page </h4>

                                   <div className={this.state.loaderDiv} class="ph-item">
                                        <div class="ph-col-12">
                                             
                                             <div class="ph-row">
                                                  <div class="ph-col-6 big"></div>
                                                  <div class="ph-col-6 empty big"></div>
                                                  
                                                  
                                                  <div class="ph-col-4"></div>
                                                  <div class="ph-col-8 empty"></div>

                                                  <div class="ph-col-6"></div>
                                                  <div class="ph-col-6 empty"></div>
                                                  <div class="ph-col-6"></div>
                                                  <div class="ph-col-6 empty"></div>
                                                  <div class="ph-col-6"></div>
                                                  <div class="ph-col-6 empty"></div>
                                                  <div class="ph-col-6"></div>
                                                  <div class="ph-col-6 empty"></div>
                                                  <div class="ph-col-6"></div>
                                                  <div class="ph-col-6 empty"></div>
                                                  <div class="ph-col-6"></div>
                                                  <div class="ph-col-6 empty"></div>

                                                  <div class="ph-col-12"></div>
                                             </div>
                                        </div>
                                   </div>

                                   <div className={this.state.mainDiv}>
                                        <p className="section-title-contact">
                                             {HtmlParser(this.state.refund)}
                                        </p>
                                   </div>

                              </Col>
                         </Row>
                    </Container>
                    <ToastContainer />
          </Fragment>
          )
     }
}

export default Refund