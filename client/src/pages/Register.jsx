import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Register() {
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Frontend validation
    if (name.trim().length < 2) {
      return setError('Name must be at least 2 characters.');
    }
    if (password.length < 6) {
      return setError('Password must be at least 6 characters.');
    }
    if (password !== confirmPassword) {
      return setError('Passwords do not match.');
    }

    setLoading(true);
    try {
      await register(name.trim(), email, password);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <aside className="auth-showcase" aria-label="DevPath learning journey">
        <div className="auth-showcase-top"><span className="brand-mark" aria-hidden="true">D<span>/</span></span><span>DEVPATH / LEARNING OS</span></div>
        <div className="auth-showcase-copy">
          <span className="auth-eyebrow">Build with purpose</span>
          <h2>One focused step.<br /><em>Every day.</em></h2>
          <p>A structured path from your first line of code to confident, production-ready work.</p>
          <div className="auth-journey"><span>01 &nbsp; Learn</span><span>02 &nbsp; Build</span><span>03 &nbsp; Ship</span></div>
        </div>
        <div className="auth-showcase-bottom"><span>42-week roadmap</span><span>Made for consistent progress</span></div>
      </aside>
      <div className="auth-container">
        <div className="auth-header">
          <span className="auth-eyebrow">Start your journey</span>
          <h1>Make progress a habit.</h1>
          <p>Create your account to begin your first assignment.</p>
        </div>

        <div className="auth-card">
          {error && <div className="auth-error" role="alert">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="register-name">Full Name</label>
              <div className="input-with-icon">
                <span className="material-symbols-outlined">person</span>
                <input
                  id="register-name"
                  className="form-input"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoComplete="name"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="register-email">Email Address</label>
              <div className="input-with-icon">
                <span className="material-symbols-outlined">mail</span>
                <input
                  id="register-email"
                  className="form-input"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="register-password">Password</label>
              <div className="input-with-icon">
                <span className="material-symbols-outlined">lock</span>
                <input
                  id="register-password"
                  className="form-input"
                  type="password"
                  placeholder="Min. 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  autoComplete="new-password"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="register-confirm">Confirm Password</label>
              <div className="input-with-icon">
                <span className="material-symbols-outlined">lock</span>
                <input
                  id="register-confirm"
                  className="form-input"
                  type="password"
                  placeholder="Re-enter password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  autoComplete="new-password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-lg"
              style={{ width: '100%', marginTop: 'var(--space-md)' }}
              disabled={loading}
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>
        </div>

        <div className="auth-footer">
          Already have an account? <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
