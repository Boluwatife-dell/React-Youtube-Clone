import youTubePic from "./assets/Youtube-logo.png";
import React, { useEffect, useState } from "react";

function Aside() {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 992);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 992);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function menuToggle() {
    if (window.innerWidth <= 992 && window.innerWidth <= 768) {
      return;
    }

    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <div className={`aside-nav ${isOpen ? "expanded" : "collapsed"}`}>
        <div className="aside">
          <ion-icon
            onClick={menuToggle}
            className="menu-icon"
            name="menu-outline"
          ></ion-icon>
          <img src={youTubePic} alt="Youtube Logo" className="logo" />
        </div>

        <div className="sidebar-items">
          <div className="sidebar-navigation">
            <ion-icon name="home-outline"></ion-icon>
            <p>Home</p>
          </div>
          <div className="sidebar-navigation">
            <ion-icon name="compass-outline"></ion-icon>
            <p>Explore</p>
          </div>
          <div className="sidebar-navigation">
            <ion-icon name="sparkles-outline"></ion-icon>
            <p>Shorts</p>
          </div>
          <div className="sidebar-navigation">
            <ion-icon name="tv-outline"></ion-icon>
            <p>Subscriptions</p>
          </div>
        </div>

        <div className="sidebar-history-navigation">
          <div className="sidebar-history">
            <ion-icon name="library-outline"></ion-icon>
            <p>Library</p>
          </div>
          <div className="sidebar-history">
            <ion-icon name="time-outline"></ion-icon>
            <p>History</p>
          </div>
          <div className="sidebar-history">
            <ion-icon name="play-circle-outline"></ion-icon>
            <p>Your videos</p>
          </div>
          <div className="sidebar-history">
            <ion-icon name="bookmark-outline"></ion-icon>
            <p>Watch Later</p>
          </div>
          <div className="sidebar-history">
            <ion-icon name="thumbs-up-outline"></ion-icon>
            <p>Liked videos</p>
          </div>
          <div className="sidebar-history">
            <ion-icon name="chevron-down-outline"></ion-icon>
            <p>Show more</p>
          </div>
        </div>

        <div className="subscription-bar">
          <h2>Subscriptions</h2>
          <li>
            <div></div>Riss & Quan
          </li>
          <li>
            <div></div>Shits & gigs
          </li>
          <li>
            <div></div>Nadir on the go
          </li>
          <li>
            <div></div>Coke Studio Bangla
          </li>
          <li>
            <div></div>MrBeast
          </li>
        </div>
      </div>
    </>
  );
}
export default Aside;
