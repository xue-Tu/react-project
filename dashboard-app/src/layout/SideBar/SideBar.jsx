import "./SideBar.css";
import { personsImgs } from "../../utils/images";
import { navigationLinks } from "../../data/data";
import { useState, useContext, useEffect } from "react";
import { SidebarContext } from "../../context/sidebarContext";

function SideBar() {
  const [activeLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass("");
    } else {
      setSidebarClass("sidebar-change");
    }
  }, [isSidebarOpen]);

  return (
    <aside className={`sidebar ${sidebarClass}`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={personsImgs.person_two} alt="profile image" />
        </div>
        <span className="info-name">alice-doe</span>
      </div>

      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((navigationLink) => (
            <li className="nav-item" key={navigationLink.id}>
              <a
                href="#"
                className={`nav-link ${
                  activeLinkIdx === navigationLink.id ? "active" : null
                }`}
              >
                <img
                  src={navigationLink.image}
                  alt={navigationLink.title}
                  className="nav-link-icon"
                />
                <span className="nav-link-text">{navigationLink.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;
