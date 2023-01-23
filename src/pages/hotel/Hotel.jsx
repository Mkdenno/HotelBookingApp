import React from 'react'
import './hotel.css'
import NavBar from '../../components/navbar/NavBar'
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../components/footer/Footer'
import MailList from '../../components/mailList/MailList'


const photos=[
  {
    src:"https://images.pexels.com/photos/5055816/pexels-photo-5055816.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
  },
  {
    src:"https://images.pexels.com/photos/5055816/pexels-photo-5055816.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
  },
  {
    src:"https://images.pexels.com/photos/5055816/pexels-photo-5055816.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
  },
  {
    src:"https://images.pexels.com/photos/5055816/pexels-photo-5055816.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
  },
  {
    src:"https://images.pexels.com/photos/5055816/pexels-photo-5055816.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
  },
  {
    src:"https://images.pexels.com/photos/5055816/pexels-photo-5055816.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
  },
  
]

const Hotel = () => {
  return (
    <div>
      <NavBar/>
      <Header type="list"/>
      <div className='hotelContainer'>
        <div className="slider">
          
        </div>
        <div className='hotelWrapper'>
          <button className='bookNow'>Reserve or Book Now</button>
          <h1 className='hotelTitle'>Eka Hotel</h1>
          <div className='hotelAddress'>
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Rupa mall 7514 Eldoret</span>
          </div>
          <span className='hotelDistance'>
            Excelllent location - 500m from Daima Towers
          </span>
          <span className='hotelPriceHighLight'>
            Book a stay over 15000 at this property and get a free airport Taxi
          </span>
          <div className='hotelImages'>
            {
              photos.map(photo =>(
                <div className='hotelImgWrapper'><img src={photo.src} alt="" className='hotelImg' />
                  
                </div>
              ))
            }
          </div>
          <div className="hotelDetails">
            <div className="hetelDetailsText">
              <h1 className="hotelTitle"> Stay in the heart of krakow</h1>
              <p className='hotelDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nemo amet dicta voluptatibus sit soluta quisquam et blanditiis impedit placeat. Omnis aut repellat fugit 
                tenetur sequi repudiandae perferendis atque inventore distinctio?
              </p>

            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                It is Located in Eldoret 500m away from 
              </span>
              <h2>$1000 <b>9 nights</b></h2>
              <button>Reserve or Book Now</button>

            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>

    </div>
  )
}

export default Hotel