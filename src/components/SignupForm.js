import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SignupHeader from "./SignupHeader";

const SignupForm = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    companyName: "",
    email: "",
    employeeSize: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (formData.name.length < 4) {
      newErrors.name = "Name should have at least 4 characters";
    }
    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be a valid 10-digit Indian number starting with 6, 7, 8, or 9";
    }
    if (!formData.companyName) {
      newErrors.companyName = "Company name is required";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (formData.employeeSize < 1 || formData.employeeSize > 10000) {
      newErrors.employeeSize = "Employee size must be between 1 and 10,000";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validate()) {
      try {
        const signupResponse = await axios.post("http://localhost:5000/auth/signup", formData);
        console.log("🚀 ~ handleSubmit ~ signupResponse:", signupResponse)
        
        if (signupResponse.data) {
          //OTP to email
          try {
            const emailOtpResponse = await axios.post("http://localhost:5000/email/send-otp", {
              medium: "email",
            });
  
            if (emailOtpResponse.data) {
              console.log("OTP sent to email successfully.");
            } else {
              console.log("Failed to send OTP to email.");
              return; 
            }
          } catch (emailOtpError) {
            console.log("Email OTP sending failed:", emailOtpError);
            return; 
          }
  
          //OTP to phone
          try {
            const phoneOtpResponse = await axios.post("http://localhost:5000/email/send-otp", {
              medium: "phone",
            });
  
            if (phoneOtpResponse.data) {
              console.log("OTP sent to phone successfully.");
            } else {
              console.log("Failed to send OTP to phone.");
              return; 
            }
          } catch (phoneOtpError) {
            console.log("Phone OTP sending failed:", phoneOtpError);
            return;
          }
  
          alert("Registration successful! OTPs have been sent to both your email and phone.");
          navigate("/verify-otp");
  
        }
      } catch (signupError) {
        if (signupError.response && signupError.response.data && signupError.response.data.message) {
          console.error("Registration failed:", signupError.response.data.message);
          alert(`Registration failed: ${signupError.response.data.message}`);
        } else {
          console.error("Registration failed:", signupError);
          alert("Registration failed. Please try again.");
        }
      }
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
          <form onSubmit={handleSubmit} style={styles.form}>
            <h2 style={{ margin: "10px" }}>Sign Up</h2>
            <p style={{ margin: "10px" }}>Lorem ipsum is simply dummy text</p>

            {/* Name Input with Icon */}
            <div style={styles.inputWrapper}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={formData.name}
                style={{ ...styles.input, paddingLeft: "40px" }}
              />
              <i className="fa-regular fa-user" style={styles.icon}></i>
            </div>
            {errors.name && <div style={styles.error}>{errors.name}</div>}

            {/* Phone Input with Icon */}
            <div style={styles.inputWrapper}>
              <input
                type="text"
                name="phone"
                placeholder="Phone no."
                onChange={handleChange}
                value={formData.phone}
                style={{ ...styles.input, paddingLeft: "40px" }}
              />
              <i className="fa-solid fa-phone" style={styles.icon}></i>
            </div>
            {errors.phone && <div style={styles.error}>{errors.phone}</div>}

            {/* Company Name Input with Icon */}
            <div style={styles.inputWrapper}>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                onChange={handleChange}
                value={formData.companyName}
                style={{ ...styles.input, paddingLeft: "40px" }}
              />
              <i className="fa-solid fa-building" style={styles.icon}></i>
            </div>
            {errors.companyName && <div style={styles.error}>{errors.companyName}</div>}

            {/* Company Email Input with Icon */}
            <div style={styles.inputWrapper}>
              <input
                type="email"
                name="email"
                placeholder="Company Email"
                onChange={handleChange}
                value={formData.email}
                style={{ ...styles.input, paddingLeft: "40px" }}
              />
              <i className="fa-regular fa-envelope" style={styles.icon}></i>
            </div>
            {errors.email && <div style={styles.error}>{errors.email}</div>}

            {/* Employee Size Input with Icon */}
            <div style={styles.inputWrapper}>
              <input
                type="number"
                name="employeeSize"
                placeholder="Employee Size"
                onChange={handleChange}
                value={formData.employeeSize}
                style={{ ...styles.input, paddingLeft: "40px" }}
              />
              <i className="fa-solid fa-users" style={styles.icon}></i>
            </div>
            {errors.employeeSize && <div style={styles.error}>{errors.employeeSize}</div>}

            <p style={{ marginTop: "10px" }}>
              By clicking on the proceed you will accept our{" "}
            </p>
            <p style={{ margin: "0px" }}>
              <a href="#" style={{ textDecoration: "none" }}>Terms</a> &{" "}
              <a href="#" style={{ textDecoration: "none" }}>Conditions</a>
            </p>

            <button type="submit" style={styles.button}>Proceed</button>
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
    width: "90%",
  },
  error: {
    color: "red",
    fontSize: "12px",
  },
  button: {
    margin: "10px 0px",
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

export default SignupForm;
