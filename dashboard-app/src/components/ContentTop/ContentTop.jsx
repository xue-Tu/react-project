import { useContext } from "react";
import "./ContentTop.css";
import { SidebarContext } from "../../context/sidebarContext";
import { iconsImgs } from "../../utils/images";

function ContentTop() {
  const { toggleSidebar } = useContext(SidebarContext);

  return (
    <div className="content-main-top">
      <div className="content-top-left">
        <button
          className="sidebar-toggler"
          type="button"
          onClick={() => toggleSidebar()}
        >
          <img src={iconsImgs.menu} alt="" />
        </button>
        <h3 className="content-top-title">Home</h3>
      </div>
      <div className="content-top-btns">
        <button className="search-btn content-top-btn" type="button">
          <img src={iconsImgs.search} alt="" />
        </button>
        <button className="notification-btn content-top-btn" type="button">
          <img src={iconsImgs.bell} alt="" />
          <span className="notification-btn-dot"></span>
        </button>
      </div>
    </div>
  );
}

export default ContentTop;
