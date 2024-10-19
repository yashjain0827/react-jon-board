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
    width: "104px",
    height: "100vh",
    borderRight: "1px solid #C5C5C5",
  },
  menu: {
    listStyleType: "none",
    padding: 0,
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  menuItem: {
    marginBottom: "20px",
  },
  icon: {
    fontSize: "35.83px", // Controls icon size
    color: "#576474",
  },
};

export default Sidebar;
