import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SignupHeader from "./SignupHeader"; // Import the Header component

const OtpVerification = () => {
  const [emailOtp, setEmailOtp] = useState("");
  const [mobileOtp, setMobileOtp] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const [mobileVerified, setMobileVerified] = useState(false);
  const navigate = useNavigate();

  const handleEmailVerify = async () => {
    try {
      const response = await axios.post("/api/verify-email", { otp: emailOtp });
      if (response.data.success) {
        setEmailVerified(true);
        alert("Email verified successfully!");
      } else {
        alert("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying email OTP:", error);
    }
  };

  const handleMobileVerify = async () => {
    try {
      const response = await axios.post("/api/verify-mobile", {
        otp: mobileOtp,
      });
      if (response.data.success) {
        setMobileVerified(true);
        alert("Mobile verified successfully!");
        // Call login function if both OTPs are verified
        await loginUser();
      } else {
        alert("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying mobile OTP:", error);
    }
  };

  const loginUser = async () => {
    try {
      const response = await axios.post("/api/login", {
        email: "user@example.com",
      });
      localStorage.setItem("token", response.data.token); // Store JWT in localStorage
      alert("Login successful!");
      navigate("/dashboard"); // Redirect to the dashboard
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <SignupHeader />

      <div style={styles.pageContainer}>
        <div style={styles.textContainer}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </p>
        </div>

        <div style={styles.formContainer}>
          <form style={styles.form}>
            <h2 style={{ margin: "0px 0px 10px 0px  " }}>Sign Up</h2>
            <p style={{ margin: "0px 0px 10px 0px" }}>
              lorem ipsam is simply dummy text
            </p>
            <div style={styles.inputWrapper}>
              <input
                type="text"
                placeholder="Email OTP"
                value={emailOtp}
                onChange={(e) => setEmailOtp(e.target.value)}
                disabled={emailVerified}
                style={{ ...styles.input, paddingLeft: "40px" }}
              />
              <i className="fa-regular fa-user" style={styles.icon}></i>
            </div>

            <button
              onClick={handleEmailVerify}
              disabled={emailVerified}
              style={styles.button}
            >
              {emailVerified ? "Verified" : "Verify"}
            </button>
            <div style={styles.inputWrapper}>
              <input
                type="text"
                placeholder="Mobile OTP"
                value={mobileOtp}
                onChange={(e) => setMobileOtp(e.target.value)}
                disabled={mobileVerified}
                style={{ ...styles.input, paddingLeft: "40px" }}
              />
              <i className="fa-regular fa-user" style={styles.icon}></i>
            </div>

            <button
              onClick={handleMobileVerify}
              disabled={mobileVerified}
              style={styles.button}
            >
              {mobileVerified ? "Verified" : "Verify"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "row",
    height: "calc(100vh - 90px)",
    backgroundColor: "#ffff",
    width: "90%",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left",
    fontSize: "26px",
    color: "#333",
    width: "50%",
    margin: "auto",
  },
  formContainer: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffff",
  },
  form: {
    width: "100%",
    maxWidth: "450px",
    display: "flex",
    flexDirection: "column",
    padding: "20px 40px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid blue",
  },
  input: {
    padding: "10px",
    paddingLeft: "40px", // Extra padding for the icon
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px",
    backgroundColor: "rgb(238 238 238)",
    width: "88%",
  },
  error: {
    color: "red",
    fontSize: "12px",
  },
  button: {
    margin: "0px 0px 20px 0px ",
    padding: "10px 0px ",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    width: "100%",
  },
  icon: {
    position: "absolute",
    left: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    pointerEvents: "none", // Prevents icon from blocking input
    fontSize: "18px",
    color: "#666",
  },
  inputWrapper: {
    position: "relative",
    marginBottom: "10px",
    width: "100%",
  },
};

export default OtpVerification;
