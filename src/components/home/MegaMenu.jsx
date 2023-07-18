import React, { Component } from 'react'


class MegaMenu extends Component {

    constructor(props){
        super();
    }




  render() {

    const CatList = this.props.data;
    const CatListView = CatList.map((CatList,i)=>{

        return <div className='container_subNav' >
                    <div className='inner_subNav' key={i.toString()}>

                        <button className="accordion child_subNav">
                        <img alt='' className='accordionMenuIcon' src={CatList.category_image} />
                        &nbsp; {CatList.category_name}
                        </button>

                    </div>
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
