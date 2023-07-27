import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import axios from 'axios'
import AppUrl from '../api/AppUrl'
import CategoryProducts from '../components/home/CategoryProducts'


 class ProductCategoryPage extends Component {

     constructor({match}){
          super();
          this.state={
               category:match.params.category,
               ProductData:[]
          }
     }


     componentDidMount(){
          window.scroll(0,0)

          axios.get(AppUrl.ProductListByCategory(this.state.category)).then(response=>{
               if(response.status===200){
                    this.setState({ProductData:response.data})
               }
          }).catch(error=>{})
     } 


     render() {
          return (
               <Fragment> 
               <div className="Desktop">
                <NavMenuDesktop /> 
               </div>

               <div className="Mobile">
               <NavMenuMobile />  
               </div>                       

               <CategoryProducts category={this.state.category} ProductData={this.state.ProductData}/>

               <div className="Desktop">
               <FooterDesktop/>
               </div>

               <div className="Mobile">
               <FooterMobile/>
               </div>

          </Fragment>
          )
     }
}

export default ProductCategoryPage