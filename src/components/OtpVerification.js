import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SignupHeader from "./SignupHeader"; // Import the Header component

const OtpVerification = () => {
  const [emailOtp, setEmailOtp] = useState("");
  const [mobileOtp, setMobileOtp] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const [mobileVerified, setMobileVerified] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (emailVerified && mobileVerified) {
      navigate("/dashboard");
    }
  }, [emailVerified, mobileVerified, navigate]);

  const handleEmailVerify = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5000/email/verify-otp",
        { otp: emailOtp, medium: "email" },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response?.data?.message === "Email verified successfully") {
        setEmailVerified(true);
      }
    } catch (error) {
      console.log("Error verifying email OTP:", error);
    }
  };

  const handleMobileVerify = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5000/email/verify-otp",
        { otp: mobileOtp, medium: "phone" },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response?.data?.message === "Phone number verified successfully") {
        setMobileVerified(true);
      }
    } catch (error) {
      console.log("Error verifying mobile OTP:", error);
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
            ever since the 1500s.
          </p>
        </div>

        <div style={styles.formContainer}>
          <form style={styles.form}>
            <h2 style={{ margin: "0 0 10px 0" }}>Verify OTP</h2>
            <p style={{ margin: "0 0 10px 0" }}>
              Please enter the OTP sent to your email and phone.
            </p>

            {/* Email OTP Input */}
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
              {emailVerified && (
                <i className="fa-solid fa-check" style={styles.successIcon}></i>
              )}
            </div>

            {!emailVerified && (
              <button onClick={handleEmailVerify} style={styles.button}>
                Verify Email OTP
              </button>
            )}

            {/* Mobile OTP Input */}
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
              {mobileVerified && (
                <i className="fa-solid fa-check" style={styles.successIcon}></i>
              )}
            </div>

            {!mobileVerified && (
              <button onClick={handleMobileVerify} style={styles.button}>
                Verify Mobile OTP
              </button>
            )}
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
    paddingLeft: "40px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px",
    backgroundColor: "rgb(238 238 238)",
    width: "88%",
  },
  button: {
    margin: "10px 0",
    padding: "10px",
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
    pointerEvents: "none",
    fontSize: "18px",
    color: "#666",
  },
  successIcon: {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "18px",
    color: "white",
    backgroundColor: "green",
    borderRadius: "50%",
    padding: "5px",
  },
  inputWrapper: {
    position: "relative",
    marginBottom: "10px",
    width: "100%",
  },
};

export default OtpVerification;
