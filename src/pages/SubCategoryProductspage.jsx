import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import axios from 'axios'
import AppUrl from '../api/AppUrl'
import SubCategoryProducts from '../components/home/SubCategoryProducts'

class SubCategoryProductspage extends Component {
    constructor({match}){
        super();
        this.state={
             category:match.params.category,
             subcategory:match.params.subcategory,
             ProductData:[]
        }
   }


   componentDidMount(){
        window.scroll(0,0)

        axios.get(AppUrl.ProductListBySubCategory(this.state.category,this.state.subcategory)).then(response=>{
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

             <SubCategoryProducts category={this.state.category} subcategory={this.state.subcategory} ProductData={this.state.ProductData}/>

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
export default SubCategoryProductspage
