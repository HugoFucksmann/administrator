// src/pages/RecoverPassword.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/RecoverPassword.module.css";
import { useAuth } from "../../contexts/AuthContext";

const RecoverPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const { recoverAccount } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await recoverAccount(email);
      setMessage("Check your email for further instructions");
      setError("");
    } catch (error) {
      setError("Failed to send password reset email");
      setMessage("");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Recover Password</h2>
        {error && <p className={styles.error}>{error}</p>}
        {message && <p className={styles.message}>{message}</p>}
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Send Recovery Email
        </button>
        <div className={styles.links}>
          <Link to="/login" className={styles.link}>
            Back to Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RecoverPassword;
