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
          </div>
          <div className="lsResult"></div>
        </div>
      </div>
    </div>
  );
}

export default List;
