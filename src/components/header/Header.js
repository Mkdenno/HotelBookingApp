import React, { useState } from 'react'
import './header.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBed, faPlane, faCar, faTaxi ,faPerson, faCalendarDays} from "@fortawesome/free-solid-svg-icons"
import {DateRange} from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns"

const Header = ({type}) => {
    const [openOptions, setOpenOptions]=useState(false)
    const[options, setOptions]=useState({
        adult:1,
        children:3,
        room:1

    })
    const [openDate, setOpenDate]=useState(false)
 const [date, setDate]=useState([
    {
        startDate: new Date(),
        endDate: new Date(), 
        key:'selection'
    }
 ])
 const handleOption=(name, operation) => {
    setOptions((prev)=>{
        return{
            ...prev, [name]: operation==="i" ? options[name] + 1 : options[name] - 1,
        }
    })
 }

  return (
    <div className='header'>
        <div className={type==="list" ? "headerContainer listMode" : "headerContainer"}>
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
            {  type !=="list" && <> 

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
                   <span onClick={(e)=>setOpenDate(!openDate)} className='headerSeachText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
                       { openDate && <DateRange
                    editableDateInput={true}
                    onChange={item=>setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                   />}
                </div>

                <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faPerson}  className="headerIcon"/>
                <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult . ${options.children} children . ${options.room} room `}</span>
           {      openOptions &&   <div className='options'>
                    <div className='optionItem'>
                        <span className='optionText'>Adult</span>
                        <div className='optionCounter'>
                        <button className='optioncounterButton' onClick={()=>handleOption("adult", "d")}disabled={options.adult <=1}>-</button>
                        <span className='optionCounterNumber'>{options.adult}</span>
                        <button className='optioncounterButton' onClick={()=>handleOption("adult", "i")}>+</button>

                        </div>
                        </div>

                    <div className='optionItem'>
                        <span className='optionText'>Children</span>
                        <div className='optionCounter'>
                        <button className='optioncounterButton' onClick={()=>handleOption("children", "d")} disabled={options.children <=1}>-</button>
                        <span className='optionCounterNumber'>{options.children}</span>
                        <button className='optioncounterButton' onClick={()=>handleOption("children", "i")}>+</button>

                        </div>

                    </div>

                    <div className='optionItem'>
                        <span className='optionText'>Rooms</span>
                        <div className='optionCounter'>
                        <button className='optioncounterButton' onClick={()=>handleOption("room", "d")} disabled={options.room <=1}>-</button>
                        <span className='optionCounterNumber' >{options.room}</span>
                        <button className='optioncounterButton' onClick={()=>handleOption("room", "i")}>+</button>

                        </div>
                        </div>

                </div>}

                </div>

                <div className='headerSearchItem'>
                    <button className='headerBtn' >Search</button>
                </div>

            </div>
            </> }
            </div>
        
    </div>
  )
}

export default Header