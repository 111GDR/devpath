import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <aside className="auth-showcase" aria-label="DevPath learning journey">
        <div className="auth-showcase-top"><span className="brand-mark" aria-hidden="true">D<span>/</span></span><span>DevPath · Developer training</span></div>
        <div className="auth-showcase-copy">
          <h2>One focused step.<br />Every day.</h2>
          <p>A structured path from your first line of code to confident, production-ready work.</p>
          <div className="auth-journey"><span>Learn the concepts</span><span>Build something real</span><span>Ship your work</span></div>
        </div>
        <div className="auth-showcase-bottom"><span>42-week roadmap</span><span>Made for consistent progress</span></div>
      </aside>
      <div className="auth-container">
        <div className="auth-header">
          <h1>Sign in to DevPath</h1>
          <p>Sign in to see today's assignment and your progress.</p>
        </div>

        <div className="auth-card">
          {error && <div className="auth-error" role="alert">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="login-email">Email Address</label>
              <div className="input-with-icon">
                <span className="material-symbols-outlined">mail</span>
                <input
                  id="login-email"
                  className="form-input"
                  type="email"
                  placeholder="user@devpath.io"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="login-password">Password</label>
              <div className="input-with-icon">
                <span className="material-symbols-outlined">lock</span>
                <input
                  id="login-password"
                  className="form-input"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-lg"
              style={{ width: '100%', marginTop: 'var(--space-md)' }}
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>

        <div className="auth-footer">
          New to DevPath? <Link to="/register">Create an account</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
