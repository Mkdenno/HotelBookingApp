import React, { useState } from 'react'
import './list.css'
import Header from '../../components/header/Header'
import NavBar from '../../components/navbar/NavBar'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'

const List = () => {
  const location=useLocation()
  console.log(location)
  const [destination, setDestination]=useState(location.state.destination)
  const [date, setDate]=useState(location.state.date)
  const [openDate, setOpenDate]=useState(false)
  const [options, setOptions]=useState(location.state.options)
  return (
    <div>
        <NavBar/>
        <Header type="list"/>

        <div className='listContainer'>
          <div className='listWrapper'>
          <div className='listSearch'>
            <h1  className='lsTitle'>Search</h1>
            <div className='listItem'>
              <label>Destination</label>
              <input type='text' placeholder={destination} />
            </div>
            <div className='listItem'>
              <label>Check-In-Date:  </label><br />
              <span  onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
                  { openDate && (<DateRange
                    editableDateInput={true}
                    onChange={(item)=>setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    minDate={new Date()}
                    ranges={date}
                   />)}
            </div>
            <div className='listItem'>
              <label>Option</label>
              <div className='listOptions'>
              <div className='lsOptionItem'>
                <span className='lsOptionText'>
                  Min price <small>per night</small>
                </span>
                <input type='text' className='listOptionInput' />
              </div>

              <div className='lsOptionItem'>
                <span className='lsOptionText'>
                  max price <small>per night</small>
                </span>
                <input type='text' className='listOptionInput' />
              </div>

              <div className='lsOptionItem'>
                <span className='lsOptionText'>
                  Adult
                </span>
                <input type='number' min={1} className='listOptionInput'  placeholder={options.adult} />
              </div>

              <div className='lsOptionItem'>
                <span className='lsOptionText'>
                  Children
                </span>
                <input type='number' min={0} className='listOptionInput'  placeholder={options.children} />
              </div>

              <div className='lsOptionItem'>
                <span className='lsOptionText'>
                  Rooms
                </span>
                <input type='number' min={1} className='listOptionInput'  placeholder={options.room} />
              </div>
              </div>
              </div>
              <button >Search</button>
          </div>
          <div className='listResult'></div>
          </div>
        </div>
    </div>
  )
}

export default List