import React, { Component } from 'react'

class MegaMenu extends Component {

    constructor(){
        super();
        this.MegaMenu = this.MegaMenu.bind(this);
    }

    componentDidMount(){
        this.MegaMenu();
    }

    MegaMenu(){
        var acc = document.getElementsByClassName("accordion");
        var accNum = acc.length;
        var i;
        for (i = 0; i < accNum; i++) {
            acc[i].addEventListener("click", function(){
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                }else{
                panel.style.maxHeight = panel.scrollHeight + "px";
                }
               
            })
        }
       
    }



  render() {
    return (
    <div className='accordionMenuDiv'>
        <div className='accordionMenuDivInside'>

       
            <button className="accordion">
                <img alt='' className='accordionMenuIcon' src='https://cdn-icons-png.flaticon.com/128/739/739249.png' />
                &nbsp; Man's Clothing
            </button>
            <div className='panel'>
                <ul>
                    <li className='accordionItem'>  <a href="/#" >Mans Tshirt 1</a> </li>
                    <li className='accordionItem'>  <a href="/#" >Mans Tshirt 2</a> </li>
                </ul>
            </div>
        

            <button className="accordion">
                <img alt='' className='accordionMenuIcon' src='https://cdn-icons-png.flaticon.com/128/739/739249.png' />
                &nbsp; Man's Clothing
            </button>
            <div className='panel'>
                <ul>
                    <li className='accordionItem'>  <a href="/#" >Mans Tshirt 1</a> </li>
                    <li className='accordionItem'>  <a href="/#" >Mans Tshirt 2</a> </li>
                </ul>
            </div>


            <button className="accordion">
                <img alt='' className='accordionMenuIcon' src='https://cdn-icons-png.flaticon.com/128/739/739249.png' />
                &nbsp; Man's Clothing
            </button>
            <div className='panel'>
                <ul>
                    <li className='accordionItem'>  <a href="/#" >Mans Tshirt 1</a> </li>
                    <li className='accordionItem'>  <a href="/#" >Mans Tshirt 2</a> </li>
                </ul>
            </div>


            <button className="accordion">
                <img alt='' className='accordionMenuIcon' src='https://cdn-icons-png.flaticon.com/128/739/739249.png' />
                &nbsp; Man's Clothing
            </button>
            <div className='panel'>
                <ul>
                    <li className='accordionItem'>  <a href="/#" >Mans Tshirt 1</a> </li>
                    <li className='accordionItem'>  <a href="/#" >Mans Tshirt 2</a> </li>
                </ul>
            </div>


            <button className="accordion">
                <img alt='' className='accordionMenuIcon' src='https://cdn-icons-png.flaticon.com/128/739/739249.png' />
                &nbsp; Man's Clothing
            </button>
            <div className='panel'>
                <ul>
                    <li className='accordionItem'>  <a href="/#" >Mans Tshirt 1</a> </li>
                    <li className='accordionItem'>  <a href="/#" >Mans Tshirt 2</a> </li>
                </ul>
            </div>


            <button className="accordion">
                <img alt='' className='accordionMenuIcon' src='https://cdn-icons-png.flaticon.com/128/739/739249.png' />
                &nbsp; Man's Clothing
            </button>
            <div className='panel'>
                <ul>
                    <li className='accordionItem'>  <a href="/#" >Mans Tshirt 1</a> </li>
                    <li className='accordionItem'>  <a href="/#" >Mans Tshirt 2</a> </li>
                </ul>
            </div>


            <button className="accordion">
                <img alt='' className='accordionMenuIcon' src='https://cdn-icons-png.flaticon.com/128/739/739249.png' />
                &nbsp; Man's Clothing
            </button>
            <div className='panel'>
                <ul>
                    <li className='accordionItem'>  <a href="/#" >Mans Tshirt 1</a> </li>
                    <li className='accordionItem'>  <a href="/#" >Mans Tshirt 2</a> </li>
                </ul>
            </div>


            <button className="accordion">
                <img alt='' className='accordionMenuIcon' src='https://cdn-icons-png.flaticon.com/128/739/739249.png' />
                &nbsp; Man's Clothing
            </button>
            <div className='panel'>
                <ul>
                    <li className='accordionItem'>  <a href="/#" >Mans Tshirt 1</a> </li>
                    <li className='accordionItem'>  <a href="/#" >Mans Tshirt 2</a> </li>
                </ul>
            </div>
            
        </div>
    </div>
    )
  }
}

export default MegaMenu
