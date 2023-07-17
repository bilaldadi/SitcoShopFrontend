import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import validation from '../../Validation/validation';
import AppUrl from '../../api/AppUrl';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export class Contact extends Component {

    constructor(){
        super();
        this.state={

            name:"",
            email:"",
            message:""
            
        }
    }

    nameOnChange =(event)=>{

        let name = event.target.value;
        this.setState({name:name})
    }

    emailOnChange =(event)=>{
        
        let email = event.target.value;
        this.setState({email:email})
    }

    messageOnChange =(event)=>{
        
        let message = event.target.value;
        this.setState({message:message})
    }

    FormOnSubmit =(event)=>{

        let name = this.state.name;
        let email = this.state.email;
        let message = this.state.message;
        let sendbtn = document.getElementById('sendbtn');
        let contactForm = document.getElementById('contactForm');

        if(message.length===0){
            toast.error("Message Required");
        }
        else if(name.length===0){
            toast.error("Name Required");
        }
        else if(email.length===0){
            toast.error("Email Required");
        }
        else if(!(validation.NameRegx).test(name)){
            toast.error("Invalid Name, Please Enter Only Letters");
        }

        else{
            
            sendbtn.innerHTML="Sending...";
            let MyFormData = new FormData();
            MyFormData.append("name",name);
            MyFormData.append("email",email);
            MyFormData.append("message",message);

            axios.post(AppUrl.ContactForm,MyFormData).then((res)=>{

                if(res.status===200 && res.data===1){
                    toast.success("Message Send Successfully");
                    sendbtn.innerHTML="Send";
                    contactForm.reset();
                }
                else{
                    toast.error("Message Send Failed");
                    sendbtn.innerHTML="Send";
                }    
            })
            .catch((error)=>{
                toast.error("Error");
                sendbtn.innerHTML="Send";
            })
        }
        
        event.preventDefault();
    }

        
    

     render() {
          return (
               <Fragment>
                    <Container>
                        <Row className="p-2">
                            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>

                            <Row className="text-center">

                                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>

                                    <Form id='contactForm' onSubmit={this.FormOnSubmit} className="onboardForm">

                                        <h4 className="section-title-login">CONTACT WITH US </h4>
                                        <h6 className="section-sub-title">Please Contact With Us </h6>

                                        <input onChange={this.nameOnChange} className="form-control m-2"  type="text" placeholder="Enter Your Name" />

                                        <input onChange={this.emailOnChange} className="form-control m-2"  type="email" placeholder="Enter Email" />

                                        <Form.Control onChange={this.messageOnChange} as="textarea" rows={3} className="form-control m-2"  type="text" placeholder="Enter Your Message" />

                                        <Button id='sendbtn' type='submit' className="btn btn-block m-2 site-btn-login"> Send </Button>

                                    </Form>

                                </Col>

                                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                                <br></br><br></br>
                                        <p className="section-title-contact">
                                                    42211 Fake Street Faknation, Near The Fake Mall. FA 99881 <br></br>
                                                        Email: Support@easylearningbd.com
                                        </p>

                                        <iframe  title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162771.1102477064!2d-74.10054944459704!3d40.70681480276415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1627241390779!5m2!1sen!2sbd" width="600" height="450" styles="border:0;" allowfullscreen="" loading="lazy"></iframe>
                                </Col>
                            </Row>

                            </Col>
                        </Row>
                    </Container>
                    <ToastContainer />
          </Fragment>
          )
     }
}

export default Contact