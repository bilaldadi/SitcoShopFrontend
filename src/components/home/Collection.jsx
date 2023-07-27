import React, {Fragment,useEffect,useState } from 'react'
import { Col, Container, Row, Card} from 'react-bootstrap'
import AppUrl from '../../api/AppUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Collection() {

    const [ProductData, setProductData] = useState([]);

    useEffect(() => {
       const fetchData = async () => {
        try{
            const response = await fetch(AppUrl.ProductListByRemark("Collection"));
            const json = await response.json();
            setProductData(json);
        }catch(error){
            toast.error("Something Went Wrong !",{ position: "top-center"});
        }
       }; 
       fetchData();
    }, []);


    const ProductList = ProductData;
    const MyView = ProductList.map((ProductList,i)=>{

        return  <Col key={i.toString()} className="p-2" xl={3} lg={3} md={3} sm={6} xm={6}>

                    <Card className="image-box card w-100">
                            <img alt='' className="center w-75" src={ProductList.image} />   
                        <Card.Body> 
                            <p className="product-name-on-card">{ProductList.title}</p>
                            <p className="product-price-on-card">{ProductList.price}</p>
                        </Card.Body>
                    </Card>

                </Col>


    });
  
    return (
        
     <Fragment>
        <Container className='text-center' fluid={true}>
                        <div className='section-title text-center mb-55'>
                            <h2>Products Collection</h2>
                            <p>Check out our new products that you may like</p>
                        </div>
                <Row>
                   {MyView}
                    
                </Row>
        </Container>
        <ToastContainer />
     </Fragment>
    )
  }


export default Collection
