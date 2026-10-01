import { useState } from "react";
import "./AuthModal.css";
import useLoginForm from "../hooks/useLoginForm"

export default function LoginModal({ onClose, onSwitch, onSubmit }) {
  
  const {email, setEmail, password, setPassword} = useLoginForm(); 

  const canSubmit = email.trim() !== "" && password !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (canSubmit) onSubmit?.({ email, password });
  };

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div
        className="auth-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="auth-header">
          <div>
            <h2 id="login-title" className="auth-title">Log in</h2>
            <p className="auth-subtitle">Welcome back to Kino XII</p>
          </div>
          <button type="button" className="auth-close" aria-label="Close" onClick={onClose}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M2 2l12 12M14 2L2 14" />
            </svg>
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="auth-field">
            <label className="auth-label" htmlFor="login-email">Email</label>
            <input
              id="login-email"
              className="auth-input"
              type="email"
              autoComplete="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="auth-field">
            <label className="auth-label" htmlFor="login-password">Password</label>
            <input
              id="login-password"
              className="auth-input"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="auth-submit" disabled={!canSubmit}>
            Log in
          </button>
        </form>

        <p className="auth-switch">
          Don&apos;t have an account?
          <button type="button" className="auth-switch__link" onClick={onSwitch}>
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
