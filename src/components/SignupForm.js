import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SignupHeader from "./SignupHeader"; // Import the Header component

const SignupForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      companyName: "",
      email: "",
      employeeSize: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Invalid phone number")
        .required("Phone is required"),
      companyName: Yup.string().required("Company name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      employeeSize: Yup.number().required("Employee size is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post("/api/register", values);
        alert("Registration successful! Please verify your email and phone.");
        navigate("/verify-otp");
      } catch (error) {
        console.error("Registration failed:", error);
        alert("Registration failed. Please try again.");
      }
    },
  });

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
          <form onSubmit={formik.handleSubmit} style={styles.form}>
            <h2 style={{ margin: "10px" }}>Sign Up</h2>
            <p style={{ margin: "10px" }}>Lorem ipsum is simply dummy text</p>

            {/* Name Input with Icon */}
            <div style={styles.inputWrapper}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={formik.handleChange}
                value={formik.values.name}
                style={{ ...styles.input, paddingLeft: "40px" }}
              />
              <i className="fa-regular fa-user" style={styles.icon}></i>
            </div>
            {formik.errors.name && (
              <div style={styles.error}>{formik.errors.name}</div>
            )}

            {/* Phone Input with Icon */}
            <div style={styles.inputWrapper}>
              <input
                type="text"
                name="phone"
                placeholder="Phone no."
                onChange={formik.handleChange}
                value={formik.values.phone}
                style={{ ...styles.input, paddingLeft: "40px" }}
              />
              <i className="fa-solid fa-phone" style={styles.icon}></i>
            </div>
            {formik.errors.phone && (
              <div style={styles.error}>{formik.errors.phone}</div>
            )}

            {/* Company Name Input with Icon */}
            <div style={styles.inputWrapper}>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                onChange={formik.handleChange}
                value={formik.values.companyName}
                style={{ ...styles.input, paddingLeft: "40px" }}
              />
              <i className="fa-solid fa-building" style={styles.icon}></i>
            </div>
            {formik.errors.companyName && (
              <div style={styles.error}>{formik.errors.companyName}</div>
            )}

            {/* Company Email Input with Icon */}
            <div style={styles.inputWrapper}>
              <input
                type="email"
                name="email"
                placeholder="Company Email"
                onChange={formik.handleChange}
                value={formik.values.email}
                style={{ ...styles.input, paddingLeft: "40px" }}
              />
              <i className="fa-regular fa-envelope" style={styles.icon}></i>
            </div>
            {formik.errors.email && (
              <div style={styles.error}>{formik.errors.email}</div>
            )}

            {/* Employee Size Input with Icon */}
            <div style={styles.inputWrapper}>
              <input
                type="number"
                name="employeeSize"
                placeholder="Employee Size"
                onChange={formik.handleChange}
                value={formik.values.employeeSize}
                style={{ ...styles.input, paddingLeft: "40px" }}
              />
              <i className="fa-solid fa-users" style={styles.icon}></i>
            </div>
            {formik.errors.employeeSize && (
              <div style={styles.error}>{formik.errors.employeeSize}</div>
            )}

            <p style={{ marginTop: "10px" }}>
              By clicking on the proceed you will accept our{" "}
            </p>
            <p style={{ margin: "0px" }}>
              <a href="#" style={{ textDecoration: "none" }}>
                Terms
              </a>{" "}
              &{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                Conditions
              </a>
            </p>

            <button type="submit" style={styles.button}>
              Proceed
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
