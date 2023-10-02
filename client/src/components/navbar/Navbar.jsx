import { useEffect, useState } from 'react';
import './navbar.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authReq } from '../../requestMethod';


const Navbar = () => {

    const [active, setActive] = useState(false);
    const [showOptions, setShowOptions] = useState(false);

    const { pathname } = useLocation();

    const navigate = useNavigate();

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener("scroll", isActive);
        }
    }, []);

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const handleLogout = async () => {
      try {
        await authReq.post("/auth/logout");
        localStorage.setItem("currentUser", null);
        navigate("/");
      } catch (err) {
        console.log(err.response.data);  
      }
    };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className={active || pathname !== "/" ? "logo active" : "logo"}>
          <Link to="/" className="link">
            <span
              className={active || pathname !== "/" ? "text active" : "text"}
            >
              HOreelance
            </span>
            <span className="dot">.</span>
          </Link>
        </div>
        <div className="linksWrapper">
          <div className="links">
            <span>HOreelance Business</span>
            <span>Develope</span>
            <span>English</span>
            <span><Link to='/register' className='link'>Sign In</Link></span>
            {!currentUser?.isSeller && <span>Become A Expert</span>}
            {!currentUser && <button onClick={() => navigate("/login")}>JOIN US</button>}
            {currentUser && (
              <div
                className="user"
                onClick={() => setShowOptions(!showOptions)}
              >
                <img
                  src={
                    currentUser.img ||
                    "https://i.namu.wiki/i/WcDUgu8Q1y4DQVIWby96wxA3jqFDJK-QgRQalkHo9uy4695p0AdfiwqZbOdoFbqVStW1ItVURItKoFToUSCEk5L9ddDDGeH0ehYu9HAXGg-4aR2RYfT5TKncOg5noNj-FQdr4MOnOkutO_SNPvUeGQ.webp"
                  }
                  alt=""
                />
                <span id="username">{currentUser?.username}</span>
                {showOptions && (
                  <div className="options">
                    {currentUser?.isSeller && (
                      <>
                        <Link to="/mygigs" className="link">
                          <span>Gigs</span>
                        </Link>
                        <Link to="/add" className="link">
                          <span>Add New Gig</span>
                        </Link>
                      </>
                    )}
                    <Link to="/orders" className="link">
                      <span>Orders</span>
                    </Link>
                    <Link to="/messages" className="link">
                      <span>Messages</span>
                    </Link>
                    <Link onClick={handleLogout} className="link">
                      <span>Logout</span>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar
