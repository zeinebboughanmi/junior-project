import React from "react";

const Navbar = ({ changeView, isLoggedIn, handleLogout, setSearchTerm }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">ZARA</div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <button className="nav-link" onClick={() => changeView("home")}>
            Home
          </button>
        </li>
        {isLoggedIn ? (
          <>
            <li className="nav-item">
              <button className="nav-link" onClick={() => changeView("add")}>
                Add Product
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <button className="nav-link" onClick={() => changeView("login")}>
                Login
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => changeView("signup")}>
                Signup
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;