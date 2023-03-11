import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import routes from "../constants/routes";

export default forwardRef(function Navbar() {
  return (
    <header className="header axil-header header-style-4">
      <div className="axil-mainmenu">
        <div className="container">
          <div className="header-navbar">
            <div className="header-logo">
              <Link to={routes.home}>
                <img className="light-version-logo" src="/img/logo-white.svg" alt="logo" />
                <img className="dark-version-logo" src="/img/logo-dark.svg" alt="logo" />
                <img className="sticky-logo" src="/img/logo-white.svg" alt="logo" />
              </Link>
            </div>
            <div className="header-main-nav">
              <nav className="mainmenu-nav">
                <ul className="mainmenu">
                  <li className="menu-item-has-children">
                    <a href="/">
                      Services
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 320 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                      </svg>
                    </a>

                    <ul className="axil-submenu">
                      <li>
                        <a href="/">FALCON 9</a>
                      </li>
                      <li>
                        <a href="/">FALCON HEAVY</a>
                      </li>
                      <li>
                        <a href="/">DRAGON</a>
                      </li>
                      <li>
                        <a href="/">STARSHIP</a>
                      </li>
                      <li>
                        <a href="/">HUMAN SPACEFLIGHT</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/">Our Company</a>
                  </li>
                  <li>
                    <a href="/">Contact Us</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-action">
              <ul className="list-unstyled">
                <li className="header-btn">
                  <a className="axil-btn btn-fill-white" href="#footer">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="orange"
                      strokeWidth="3"
                    >
                      <path d="M8 52V18.58A6.59 6.59 0 0 1 14.58 12h34.84A6.59 6.59 0 0 1 56 18.58v22.84A6.59 6.59 0 0 1 49.42 48H16z" />
                      <line x1="16" y1="24" x2="48" y2="24" />
                      <line x1="16" y1="36" x2="48" y2="36" />
                    </svg>
                    Let's Talk
                  </a>
                </li>
                <li className="mobile-menu-btn sidemenu-btn d-lg-none d-block">
                  <button title="d" type="button" className="btn-wrap">
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mobilemenu-popup">
        <div className="mobilemenu-inner">
          <div className="mobilemenu-header">
            <div className="mobile-nav-logo">
              <a href="/">
                <img className="light-mode" src="/img/logo-white.svg" alt="Site Logo" />
                <img className="dark-mode" src="/img/logo-white.svg" alt="Site Logo" />
              </a>
            </div>
            <button title="Mobile Nav" type="button" className="mobile-menu-close">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 352 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
});
