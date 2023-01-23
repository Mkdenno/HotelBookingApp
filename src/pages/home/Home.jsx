import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import './home.css'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertylist/PropertyList'
import FeauturedProperty from '../../components/featuredProperty/FeauturedProperty'
import MailList from '../../components/mailList/MailList'


const Home = () => {
  return (
    <div>
        <NavBar/>
        <Header/>
        <div className='homeContainer'>
          <Featured/>
          <h2 className='homeTitle'> Browse Hotel Name And Location </h2>
          <PropertyList/>
          <h1 className='homeTitle'>Guest Hotels</h1>
          <FeauturedProperty/>
          <MailList/>
        </div>
        
    </div>
  )
}

export default Home