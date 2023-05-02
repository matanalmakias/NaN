import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.row}>
          <div style={styles.column}>
            <h3>Company Name</h3>
            <p>Address: 123 Main St, City, State Zip</p>
            <p>Phone: (555) 555-5555</p>
            <p>Email: info@company.com</p>
          </div>
          <div style={styles.column}>
            <h3>Quick Links</h3>
            <ul style={styles.linkList}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div style={styles.column}>
            <h3>Connect With Us</h3>
            <ul style={styles.socialList}>
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div style={styles.row}>
          <p style={styles.copy}>
            &copy; {new Date().getFullYear()} Company Name. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    paddingTop: "40px",
    paddingBottom: "40px",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  column: {
    flex: "0 0 calc(33.33% - 20px)",
    marginBottom: "20px",
  },
  linkList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  socialList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
  },
  copy: {
    fontSize: "14px",
    textAlign: "center",
    margin: 0,
  },
};

export default Footer;
