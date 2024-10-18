import React from "react";
import logo from "../img/cuvette.svg";
const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoSection}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </div>
      <div style={styles.contactSection}>
        <span style={{ fontSize: "30px" }}>Contact</span>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#ffff",
    padding: "10px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "50px",
  },
  logoSection: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  logo: {
    height: "100%",
    marginRight: "10px",
  },

  contactSection: {
    display: "flex",
    alignItems: "center",
  },
};

export default Header;
