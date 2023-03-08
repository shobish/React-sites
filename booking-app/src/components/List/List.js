import React from 'react'
import './List.css'
function List() {
  return (
    <div>
      <div className="list">
        <div className="listItems">
            <img src="image/10.jpg" alt="listimage" className="listImage" />
            <div className="listTitle">
                <h2>Hotels</h2>
                <h3>100+</h3>
            </div>
        </div>
        <div className="listItems">
            <img src="image/11.jpg" alt="listimage" className="listImage" />
            <div className="listTitle">
                <h2>Villas</h2>
                <h3>50+</h3>
            </div>
        </div>
        <div className="listItems">
            <img src="image/12.jpg" alt="listimage" className="listImage" />
            <div className="listTitle">
                <h2>Resort</h2>
                <h3>500+</h3>
            </div>
        </div>
        <div className="listItems">
            <img src="image/13.jpg" alt="listimage" className="listImage" />
            <div className="listTitle">
                <h2>Apartments</h2>
                <h3>800+</h3>
            </div>
        </div>
        <div className="listItems">
            <img src="image/14.jpg" alt="listimage" className="listImage" />
            <div className="listTitle">
                <h2>cabins</h2>
                <h3>25+</h3>
            </div>
        </div>
      </div>
    </div>
  )
}

export default List

