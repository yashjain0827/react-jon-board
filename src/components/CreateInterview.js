import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateInterview = () => {
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
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
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>Covette</div>
        <div style={styles.contact}>
          <span>Contact</span>
          <div style={styles.dropdown}>
            <button style={styles.contactButton}>Your Name</button>
          </div>
        </div>
      </header>

      {/* Sidebar and Main Content */}
      <div style={styles.contentContainer}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <div style={styles.sidebarItem}>
            <span style={styles.icon}>🏠</span>
          </div>
        </aside>

        {/* Main Form Area */}
        <main style={styles.main}>
          <div style={styles.formContainer}>
            <h2 style={styles.title}>Create Interview</h2>
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
            <button
              style={styles.backButton}
              onClick={() => navigate("/dashboard")}
            >
              Back to Dashboard
            </button>
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
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#f9f9f9",
    borderBottom: "1px solid #e0e0e0",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
  },
  contact: {
    display: "flex",
    alignItems: "center",
  },
  dropdown: {
    marginLeft: "10px",
  },
  contactButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  contentContainer: {
    display: "flex",
    flex: 1,
  },
  sidebar: {
    width: "80px",
    backgroundColor: "#fff",
    borderRight: "1px solid #e0e0e0",
    paddingTop: "20px",
  },
  sidebarItem: {
    display: "flex",
    justifyContent: "center",
    padding: "10px 0",
  },
  icon: {
    fontSize: "24px",
    color: "#007bff",
  },
  main: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  formContainer: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "500px",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    marginBottom: "8px",
    fontSize: "16px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
    minHeight: "80px",
  },
  select: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  submitButton: {
    padding: "12px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
  },
  backButton: {
    padding: "10px 20px",
    backgroundColor: "#6c757d",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    marginTop: "20px",
    display: "block",
    width: "100%",
    textAlign: "center",
  },
};

export default CreateInterview;
