import React from 'react'
import './header.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBed, faPlane, faCar, faTaxi ,faPerson, faCalendarDays} from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  return (
    <div className='header'>
        <div className='headerContainer'>
        <div className='headerList'>
            <div className='headerListItem active'>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>

            <div className='headerListItem'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
            </div>

            <div className='headerListItem'>
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
            </div>

            <div className='headerListItem'>
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
            </div>

            <div className='headerListItem'>
            <FontAwesomeIcon icon={faTaxi} />
            <span>AirPort Taxis</span>
            </div>
            


            </div>

            <h1 className='headerTitle'>Welcome to Eka Hotel - Your Home Away from Home</h1>
            <p className='headerDesc'>Welcome to Eka Hotel, your premier choice for comfortable and luxurious accommodations. </p>
            <button className='headerBtn'>Signin/Register</button>
            <div className='headerSearch'>
                <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faBed}  className="headerIcon"/>
                <input type='text' placeholder='Where are you going' className='headerSeachInput'/>

                </div>

                <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faCalendarDays}  className="headerIcon"/>
                   <span className='headerSeachText'>Date to date</span>
                </div>

                <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faPerson}  className="headerIcon"/>
                <span className='headerSearchText'>2 adults 2 children 1 room</span>

                </div>

                <div className='headerSearchItem'>
                    <button className='headerBtn' >Search</button>
                </div>

            </div>
            </div>
        
    </div>
  )
}

export default Header