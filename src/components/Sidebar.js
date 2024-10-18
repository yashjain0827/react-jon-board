import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.sidebar}>
      <ul style={styles.menu}>
        <li onClick={() => navigate("/dashboard")} style={styles.menuItem}>
          <i className="fa-solid fa-house" style={styles.icon}></i>
        </li>
      </ul>
    </div>
  );
};

const styles = {
  sidebar: {
    backgroundColor: "#fff",
    padding: "20px",
    width: "60px", // Sidebar is narrower
    height: "100vh",
    boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
  },
  menu: {
    listStyleType: "none",
    padding: 0,
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center the menu items
  },
  menuItem: {
    marginBottom: "20px", // Space between items
  },
  icon: {
    width: "60px", // Adjust the size of the icons
    height: "60px",
  },
};

export default Sidebar;
