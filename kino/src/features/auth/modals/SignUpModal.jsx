import "./AuthModal.css";
import useRegistrationForm from "../hooks/useRegistrationForm";
import { useAuth } from "../providers/Auth"
import { useState } from "react";

export default function SignupModal() {

  const {fileRef, avatar, setAvatar, preview, setPreview, username, setUsername, 
    email, setEmail, password, setPassword, password_confirmation, setConfirm} = useRegistrationForm(); 

  const { closeModal, openLogin, wrapRegister, activeModal } = useAuth();
  
  const [fileError, setFileError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [apiError, setApiError] = useState("");
    
  if (activeModal !== "register") {
    return null; 
  }

  const isValidEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  const canSubmit =
    username.trim().length >= 3 &&
    isValidEmail(email) &&
    password.length >= 3 &&
    password === password_confirmation;

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!validTypes.includes(file.type)) {
      setFileError("Only JPG, PNG, or WEBP file formats are supported.");
      setAvatar(null);
      setPreview(null);
      return;
    }
    setFileError("");
    setAvatar(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");
    setFieldErrors({});

    if (canSubmit) {
      try {
        await wrapRegister?.({payload:{ username, email, password, password_confirmation, avatar }});
      } catch (err) {
        if (err?.errors) {
          setFieldErrors(err.errors);
        } else {
          setApiError(err?.message || "Registration failed. Please try again.");
        }
      }
    }
  };

  return (
    <div className="auth-overlay" onClick={closeModal}>
      <div
        className="auth-modal auth-modal--wide"
        role="dialog"
        aria-modal="true"
        aria-labelledby="signup-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="auth-header">
          <div>
            <h2 id="signup-title" className="auth-title">Sign up</h2>
            <p className="auth-subtitle">Welcome to Kino XII</p>
          </div>
          <button type="button" className="auth-close" aria-label="Close" onClick={closeModal}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M2 2l12 12M14 2L2 14" />
            </svg>
          </button>
        </div>

        {apiError && (
          <div className="auth-error-banner" role="alert">
            {apiError}
          </div>
        )}

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="auth-avatar">
            <button
              type="button"
              className="auth-avatar__btn"
              aria-label="Upload avatar"
              onClick={() => fileRef.current?.click()}
            >
              {preview ? (
                <img className="auth-avatar__preview" src={preview} alt="" />
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 10.5V2.5M5 5l3-3 3 3M2.5 10v2.5a1 1 0 001 1h9a1 1 0 001-1V10" />
                </svg>
              )}
            </button>
            <input
              ref={fileRef}
              className="auth-avatar__file"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={handleFile}
            />
            <div>
              <p className="auth-avatar__title">Upload avatar (optional)</p>
              <p className="auth-avatar__hint">JPG, PNG or WEBP</p>
              {fileError && <p className="auth-field-error">{fileError}</p>}
            </div>
          </div>

          <div className="auth-field">
            <label className="auth-label" htmlFor="signup-username">Username</label>
            <input
              id="signup-username"
              className="auth-input"
              type="text"
              autoComplete="username"
              placeholder="User"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {username && username.trim().length < 3 && (
              <p className="auth-field-error">Username must be at least 3 characters.</p>
            )}
            {fieldErrors.username && (
              <p className="auth-field-error">{fieldErrors.username}</p>
            )}
          </div>

          <div className="auth-field">
            <label className="auth-label" htmlFor="signup-email">Email</label>
            <input
              id="signup-email"
              className="auth-input"
              type="email"
              autoComplete="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {email && !isValidEmail(email) && (
              <p className="auth-field-error">Please enter a valid email address.</p>
            )}
            {fieldErrors.email && (
              <p className="auth-field-error">{fieldErrors.email}</p>
            )}
          </div>

          <div className="auth-row">
            <div className="auth-field">
              <label className="auth-label" htmlFor="signup-password">Password</label>
              <input
                id="signup-password"
                className="auth-input"
                type="password"
                autoComplete="new-password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {password && password.length < 3 && (
                <p className="auth-field-error">At least 3 characters.</p>
              )}
            </div>
            <div className="auth-field">
              <label className="auth-label" htmlFor="signup-confirm">Confirm password</label>
              <input
                id="signup-confirm"
                className="auth-input"
                type="password"
                autoComplete="new-password"
                placeholder="••••••••"
                value={password_confirmation}
                onChange={(e) => setConfirm(e.target.value)}
              />
              {password_confirmation && password_confirmation !== password && (
                <p className="auth-field-error">Passwords do not match.</p>
              )}
            </div>
          </div>

          <button type="submit" className="auth-submit" disabled={!canSubmit}>
            Sign up
          </button>
        </form>

        <p className="auth-switch">
          Already have an account?
          <button type="button" className="auth-switch__link" onClick={openLogin}>
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}