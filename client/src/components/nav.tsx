import { NavLink, Outlet } from "react-router";
import "./nav.css";
function Nav() {
  return (
    <>
      <div id="navtab">
        <NavLink to="/" end>
          <a className="navitem">Home</a>
        </NavLink>
        <NavLink to="gallery" end>
          <a className="navitem">Gallery</a>
        </NavLink>
        <NavLink to="about" end>
          <a className="navitem">About</a>
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default Nav;
