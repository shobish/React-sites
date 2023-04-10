import "./Detail.css";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";

function List() {
  return (
    <div>
      <NavBar />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsitem">
              <label htmlFor="" className="destination">
                Destination
              </label>
              <input type="text" className="destiInput" />
            </div>
            <div className="lsitem">
              <label htmlFor="" className="date">
                Check-In-Date
              </label>
              <input type="text" className="destiInput" />
            </div>
            <div className="lsitem">
              <label htmlFor="" className="destination">
                Destination
              </label>
              <input type="text" className="destiInput" />
            </div>
          </div>

          <div className="lsResult"></div>
        </div>
      </div>
    </div>
  );
}

export default List;
