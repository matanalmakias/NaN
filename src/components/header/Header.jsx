import React from "react";

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.row}>
          <h1 style={styles.logo}>Company Name</h1>
          <nav className="d-flex gap-3" style={styles.nav}>
            <ul className="gap-2" style={styles.linkList}>
              <li cal>
                <a className="btn btn-light" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="btn btn-light" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="btn btn-light" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="btn btn-light" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <button className="p-2" style={styles.button}>
              Sign Up
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "70px",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: 0,
  },
  nav: {
    display: "flex",
    alignItems: "center",
  },
  linkList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
  },
  button: {
    backgroundColor: "#3F51B5",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    padding: "10px 20px",
    marginLeft: "20px",
    cursor: "pointer",
  },
};

export default Header;
