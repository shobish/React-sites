import "./Properties.css";

function Properties() {
  return (
    <div className="pListItems">
      <div className="pList">
        <img src="image/15.jpg" alt="" className="pImage" />
        <div className="pTitile">
          <span className="pTitleName">Apsara</span>
          <span className="pTitleCity">india</span>
          <span className="pTitlePrice">starting from $120</span>
          <div className="pTitleRate">
            <button className="pTitleRatebtn">8.9</button>
            <span className="good">Exellent</span>
          </div>
        </div>
      </div>
      <div className="pList">
        <img src="image/18.jpg" alt="" className="pImage" />
        <div className="pTitile">
          <span className="pTitleName">Oila</span>
          <span className="pTitleCity">india</span>
          <span className="pTitlePrice">starting from $120</span>
          <div className="pTitleRate">
            <button className="pTitleRatebtn">8.9</button>
            <span className="good">Good</span>
          </div>
        </div>
      </div>
      <div className="pList">
        <img src="image/19.jpeg" alt="" className="pImage" />
        <div className="pTitile">
          <span className="pTitleName">Wilton</span>
          <span className="pTitleCity">india</span>
          <span className="pTitlePrice">starting from $120</span>
          <div className="pTitleRate">
            <button className="pTitleRatebtn">8.9</button>
            <span className="good">Exellent</span>
          </div>
        </div>
      </div>
      <div className="pList">
        <img src="image/20.jpg" alt="" className="pImage" />
        <div className="pTitile">
          <span className="pTitleName">Urav</span>
          <span className="pTitleCity">india</span>
          <span className="pTitlePrice">starting from $120</span>
          <div className="pTitleRate">
            <button className="pTitleRatebtn">8.9</button>
            <span className="good">Very Good</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Properties;
