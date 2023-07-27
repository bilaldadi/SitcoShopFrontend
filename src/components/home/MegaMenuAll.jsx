import axios from 'axios';
import React, { Component } from 'react'
import AppUrl from '../../api/AppUrl';
import { Link } from 'react-router-dom';

class MegaMenuAll extends Component {
     constructor(){
          super();
          this.state={
               MenuData:[]
          }
     }

     componentDidMount(){

          axios.get(AppUrl.Categories).then(res=>{
               this.setState({MenuData:res.data})
          }).catch(error=>{})
     }



      MenuItemClick = (event)=>{
        event.target.classList.toggle("active");
        var panel = event.target.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            }else{
            panel.style.maxHeight = panel.scrollHeight + "px";
            }

    }


     render() {

          const CatList = this.state.MenuData;
          const myview = CatList.map((CatList,i)=>{
               return <div key={i.toString()}>
                         <button onClick={this.MenuItemClick} className="accordionAll">
                              <img alt=''  className="accordionMenuIconAll" src={CatList.category_image} />&nbsp; {CatList.category_name}
                         </button>
                         <div className="panelAll">
                              <ul>
                                   {
                                        (CatList.subcategory_name).map((SubCat,i)=>{
                                             return <li key={i.toString()}>
                                                       <Link to={"subcategoryproducts/"+CatList.category_name+"/"+SubCat.subcategory_name}>
                                                       <p  className="accordionItemAll" > {SubCat.subcategory_name}</p>
                                                       </Link>
                                                    </li>
                                        })
                                   }
                                   
                              </ul>
                         </div>
                      </div>
          })


          return (
                <div className="accordionMenuDivAll">
                   <div className="accordionMenuDivInsideAll">

                    {myview}


                   </div>
               </div>
          )
     }
}

export default MegaMenuAll