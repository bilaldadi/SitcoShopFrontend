import React, { Component,Fragment } from 'react'
import FeaturedProducts from '../components/home/FeaturedProducts'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import NewArrival from '../components/home/NewArrival'
import HomeTop from '../components/home/HomeTop'
import HomeTopMobile from '../components/home/HomeTopMobile'
import NavMenuDsektop from '../components/common/NavMenuDesktop'

import NavMenuMobile from '../components/common/NavMenuMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'


class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <div className='Desktop'>
            <NavMenuDsektop />
            <HomeTop />
        </div>
        <div className='Mobile'>
            <NavMenuMobile />
            <HomeTopMobile />
        </div>
        <FeaturedProducts />
        <NewArrival />
        <Collection />
        <Categories />
        <div className='Desktop'>
          <FooterDesktop />
        </div>
        <div className='Mobile'>
          <FooterMobile />
        </div>
      </Fragment>
    )
  }
}

export default HomePage
