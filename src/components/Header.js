import React from "react";
import logo from "../img/cuvette.svg";
const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoSection}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </div>
      <div style={styles.contactSection}>
        <span style={{ fontSize: "20px" }}>Contact</span>
        <div style={styles.user}>
          <div style={styles.userCircle}></div>
          <select style={styles.dropdown}>
            <option>Your Name</option>
          </select>
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    height: "80px", // Adjusted to match the image
    backgroundColor: "#ffff",
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #C5C5C5",
  },
  logoSection: {
    display: "flex",
    alignItems: "center",
    width: "165px",
    height: "43px",
  },
  logo: {
    height: "100%",
    marginRight: "10px",
  },

  contactSection: {
    display: "flex",
    alignItems: "center",
  },
  user: {
    display: "flex",
    alignItems: "center",
    marginLeft: "20px",
    border: "1px solid #ccc", // Light border as seen in the image
    padding: "5px 10px", // Adjusted padding for tighter alignment
    borderRadius: "8px",
  },
  userCircle: {
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    backgroundColor: "#ccc",
    marginRight: "10px",
  },
  dropdown: {
    padding: "5px",
    fontSize: "14px",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    outline: "none",
  },
};

export default Header;
