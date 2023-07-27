import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class MegaMenu extends Component {

    constructor(props){
        super();
    }




  render() {

    const CatList = this.props.data;
    const CatListView = CatList.map((CatList,i)=>{

        return <div key={i.toString()} className='container_subNav' >
                  <Link to={"categoryproducts/"+ CatList.category_name} >
                    <div className='inner_subNav' key={i.toString()}>

                        <button className="accordion child_subNav">
                        {/* <img alt='' className='accordionMenuIcon' src={CatList.category_image} /> */}
                        &nbsp; {CatList.category_name}
                        </button>

                    </div>
                  </Link>
               </div>

    });




    return (
    <div >
        <div >
              
                {CatListView}
        </div>
    </div>
    )
  }
}

export default MegaMenu
