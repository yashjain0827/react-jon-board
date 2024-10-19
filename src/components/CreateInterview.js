import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header"; // Common Header Component
import Sidebar from "../components/Sidebar"; // Common Sidebar Component

const CreateInterview = () => {
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      jobTitle,
      jobDescription,
      experienceLevel,
      candidateEmail,
      endDate,
    });
  };

  return (
    <div style={styles.page}>
      <Header /> {/* Common Header */}
      <div style={styles.contentContainer}>
        <Sidebar /> {/* Common Sidebar */}
        <main style={styles.main}>
          <div style={styles.formContainer}>
            <form style={styles.form} onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Job Title</label>
                <input
                  style={styles.input}
                  type="text"
                  placeholder="Enter Job Title"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Job Description</label>
                <textarea
                  style={styles.textarea}
                  placeholder="Enter Job Description"
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Experience Level</label>
                <select
                  style={styles.select}
                  value={experienceLevel}
                  onChange={(e) => setExperienceLevel(e.target.value)}
                >
                  <option value="">Select Experience Level</option>
                  <option value="junior">Junior</option>
                  <option value="mid">Mid</option>
                  <option value="senior">Senior</option>
                </select>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Add Candidate</label>
                <input
                  style={styles.input}
                  type="email"
                  placeholder="xyz@gmail.com"
                  value={candidateEmail}
                  onChange={(e) => setCandidateEmail(e.target.value)}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>End Date</label>
                <input
                  style={styles.input}
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>

              <button type="submit" style={styles.submitButton}>
                Send
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

const styles = {
  page: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  contentContainer: {
    display: "flex",
    flex: 1,
    backgroundColor: "#ffff",
  },
  main: {
    flex: 1,
    display: "flex",
    alignItems: "flex-start", // Align content to the top
  },
  formContainer: {
    backgroundColor: "#fff",
    padding: "20px 30px", // Modified padding for form container
    width: "70%", // Modified width for larger form size
    borderRadius: "8px", // Rounded corners for form container
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "20px",
    display: "flex",
    justifyContent: "space-between", // Ensures label and input are spaced
    alignItems: "center", // Align label and input on the same line
  },
  label: {
    fontSize: "16px",
    color: "#333",
    width: "25%", // Adjusted to give space to the label
    textAlign: "right", // Align label text to the right
    paddingRight: "10px",
  },
  input: {
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
    width: "70%", // Adjusted input width to match the layout
  },
  textarea: {
    width: "70%", // Same width as input for consistency
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
    minHeight: "80px",
  },
  select: {
    width: "73%", // Same width for select input
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
    backgroundColor: "#ffff",
  },
  submitButton: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "20px", // Adjusted margin for better spacing
    width: "150px", // Set a fixed width for button
    alignSelf: "center", // Center the button within the form
  },
};

export default CreateInterview;
