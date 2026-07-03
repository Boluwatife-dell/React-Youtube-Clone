import randomPic from "./assets/random guy.jpg";

function Header() {
  return (
    <>
      <header className="header">
        <div>{/* <img src={randomPic} width="30" height="30" /> */}</div>

        <div className="search-container">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <button className="search-btn">
              <ion-icon
                className="search-icon"
                name="search-outline"
              ></ion-icon>
            </button>
          </div>

          <ion-icon className="mic-icon" name="mic-outline"></ion-icon>
        </div>

        <div className="header-icons">
          <span>
            <ion-icon name="videocam-outline"></ion-icon>
          </span>
          <span>
            <ion-icon class="app-icon" name="apps-outline"></ion-icon>
          </span>
          <span>
            <ion-icon name="notifications-outline"></ion-icon>
          </span>
          <span>
            <img
              src={randomPic}
              alt="picture of random guy"
              className="header-img"
            />
          </span>
        </div>
      </header>
    </>
  );
}
export default Header;
