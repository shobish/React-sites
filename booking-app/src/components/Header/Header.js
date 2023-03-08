import React from 'react'
import {useState} from 'react'
import './Header.css'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {DateRange} from 'react-date-range'
import {format} from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed,faPlane,faCar,faRestroom, faCalendar, faPerson, faWalking } from '@fortawesome/free-solid-svg-icons'

function Header() {
    const [openDate, setopenDate] = useState(false)
    const [openoption, setopenoption] = useState(false)
    
    const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
    const [option, setoption] = useState({
        adult:1,
        children:0,
        room:1,
    });
    const handleOption=(name, oparation)=>{
        setoption((prv)=>{
            return{
                ...prv,
                [name]:oparation==="i" ? option[name]+1 : option[name]-1,  
            };
        })
    }

  return (
    <div className='header'>
        <div className="headerContainer">

            <div className="headerList">
                <div className="headerItems active">
                    <FontAwesomeIcon icon={faBed }/>
                    <span>Stay</span>
                </div>
                <div className="headerItems">
                <FontAwesomeIcon icon={ faPlane} />
                    <span>Flight</span>
                </div>
                <div className="headerItems">
                    <FontAwesomeIcon icon={faCar }/>
                    <span>Car</span>
                </div>
                <div className="headerItems">
                    <FontAwesomeIcon icon={faRestroom }/>
                    <span>Room</span>
                </div>
                
            </div>

            <h1 className="headerTitle">Where does it come from?</h1>
            <p className="headerPara">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,</p>
            <button className="headerbtn">signin/register</button>

            <div className="headerSearch">
                <div className="headerSearchItems">
                 <FontAwesomeIcon icon={faWalking } className="headerIcons"/>
                 <input type="text" placeholder='where are you going ' className="headerSearchInput" />   
                </div>     
                <div className="headerSearchItems">
                 <FontAwesomeIcon icon={faCalendar } className="headerIcons"/>
                 
                 <span onClick={()=>setopenDate(!openDate)}className="headerSearchText">{`${format
                    (date[0].startDate,"dd/MM/yyyy")} to
                    ${format(date[0].endDate,"dd/MM/yyyy")}`}
                </span>
                 {openDate && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="HeaderSearchDate"
                    />}
                 </div> 

                <div className="headerSearchItems">
                 <FontAwesomeIcon icon={faPerson } className="headerIcons"/>
                 <span className="headerSearchText" onClick={()=>setopenoption(!openoption)}>{
                    `${option.adult} adult -${option.children} children-${option.room} room `
                 }
                 </span>

                 {openoption && <div className="optionList" >
                    <div className="optionListItems">
                        <span className="optiontext">Adult</span>
                        <div className="optionCounterBox">
                            <button className="optioncounter" disabled={option.adult<=0} onClick={()=>handleOption("adult" ,"d")}>-</button>
                            <span className="optionCounterNumber">{option.adult}</span>
                            <button className="optioncounter" onClick={()=>handleOption("adult" ,"i")}>+</button>
                        </div>                    
                    </div> 
                    <div className="optionListItems">
                        <span className="optiontext">Children</span>
                        <div className="optionCounterBox">
                            <button className="optioncounter" disabled={option.children<=0}onClick={()=>handleOption("children" ,"d")}>-</button>
                            <span className="optionCounterNumber">{option.children}</span>
                            <button className="optioncounter" onClick={()=>handleOption("children" ,"i")}>+</button>
                        </div>                    
                    </div>      
                    <div className="optionListItems">
                        <span className="optiontext">room</span>
                        <div className="optionCounterBox">
                            <button className="optioncounter" disabled={option.room<=1} onClick={()=>handleOption("room" ,"d")}>-</button>
                            <span className="optionCounterNumber">{option.room}</span>
                            <button className="optioncounter" onClick={()=>handleOption("room" ,"i")}>+</button>
                        </div>                    
                    </div>                      
                 </div>}
                </div>    
                <div className="headerSearchItems">
                <button className="headerSearchBtn">Search</button>
                </div>        
            </div>
        </div>      
    </div>
  )
}

export default Header
