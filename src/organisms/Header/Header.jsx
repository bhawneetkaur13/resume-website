import React, { Suspense, useState, memo } from "react";
import * as labels from "../../utils/labels";
import "./header.css";
import Button from '../../atoms/Button/Button';
import Menu from '../../molecules/Menu/Menu';
import MenuIcon from '../../assets/MenuIcon';
import CloseIcon from '../../assets/CloseIcon';

const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="header-section">
      <section className="author-info-section">
        <h2 className="author-name-heading">{labels.AUTHOR_NAME}</h2>
        <h3 className="author-designation-heading">
          {labels.AUTHOR_DESIGNATION}
        </h3>
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <Button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          className="menu-toggle-button"
          label={
            isMenuOpen ? (
              <CloseIcon className="menu-icon" />
            ) : (
              <MenuIcon className="menu-icon" />
            )
          }
        />
        <section className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}>
          <Menu closeMenu={toggleMenu} />
        </section>
      </Suspense>
    </header>
  );
});

export default Header;
