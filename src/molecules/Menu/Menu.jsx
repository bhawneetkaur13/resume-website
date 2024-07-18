import React from "react";
import { menuItems } from "../../utils/menuItems";
import "./menu.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Menu({closeMenu}) {
  return (
    <nav>
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-items">
            <Link className="menu-item-link" to={item.link} onClick={closeMenu}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.string),
};

export default Menu;
