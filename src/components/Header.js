import React from "react";
import logo from "../img/cuvette.svg";
const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoSection}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </div>
      <div style={styles.contactSection}>
        <span
          style={{
            margin: "0px",
            fontSize: "28px",
            fontFamily: "DM Sans, sans-serif",
            color: "#576474",
            fontWeight: "500",
          }}
        >
          Contact
        </span>
        <div style={styles.user}>
          <div style={styles.userCircle}></div>
          <select style={styles.dropdown}>
            <option value="your-name" style={styles.option}>
              Your Name
            </option>
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
    height: "43px",
    width: "165px",
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
    border: "1.24px solid #576474",
    padding: "7px 12px",
    borderRadius: "8px",
  },
  userCircle: {
    width: "31px",
    height: "31px",
    borderRadius: "50%",
    backgroundColor: "#A8A8A8",
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
  option: {
    fontSize: "19.9px", // Adjusted as per the requirement
    fontFamily: "DM Sans, sans-serif",
    fontWeight: 400,
    lineHeight: "25.91px",
    textAlign: "left",
    color: "#6A6A6A",
  },
};

export default Header;
