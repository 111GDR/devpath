import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <>
      {/* Desktop Sidebar Navigation */}
      <nav className="sidebar">
        <div className="sidebar-logo">
          <span className="brand-mark" aria-hidden="true">D<span>/</span></span>
          <div>
            <div className="sidebar-logo-text">Dev<span>Path</span></div>
            <div className="sidebar-subtitle">{isAdmin ? 'Admin workspace' : 'Your learning workspace'}</div>
          </div>
        </div>

        <div className="sidebar-menu">
          <span className="sidebar-section-label">Workspace</span>
          {isAdmin ? (
            <NavLink to="/admin" className="sidebar-item">
              <span className="material-symbols-outlined">group</span>
              <span>Users</span>
            </NavLink>
          ) : (
            <>
              <NavLink to="/dashboard" className="sidebar-item">
                <span className="material-symbols-outlined">dashboard</span>
                <span>Dashboard</span>
              </NavLink>
              <NavLink to="/progress" className="sidebar-item">
                <span className="material-symbols-outlined">account_tree</span>
                <span>Roadmap</span>
              </NavLink>
            </>
          )}
          <NavLink to="/profile" className="sidebar-item">
            <span className="material-symbols-outlined">person</span>
            <span>Profile</span>
          </NavLink>
        </div>

        <div className="sidebar-footer">
          <div className="sidebar-user">
            <span className="sidebar-user-avatar" aria-hidden="true">{user?.name?.charAt(0)?.toUpperCase() || 'D'}</span>
            <span className="sidebar-user-details"><strong>{user?.name || 'Developer'}</strong><small>{isAdmin ? 'Administrator' : 'Developer in training'}</small></span>
          </div>
          <button onClick={handleLogout} className="sidebar-item" style={{ background: 'transparent', width: '100%', textAlign: 'left' }}>
            <span className="material-symbols-outlined">logout</span>
            <span>Logout</span>
          </button>
        </div>
      </nav>

      {/* Mobile Top Header */}
      <header className="mobile-header">
        <div className="mobile-header-brand"><span className="brand-mark" aria-hidden="true">D<span>/</span></span><div className="mobile-header-logo">Dev<span>Path</span></div></div>
        <div className="mobile-role-badge">
          {isAdmin ? 'ADMIN' : 'STUDENT'}
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="mobile-bottom-nav">
        {isAdmin ? (
          <NavLink to="/admin" className="mobile-bottom-item">
            <span className="material-symbols-outlined">group</span>
            <span>Users</span>
          </NavLink>
        ) : (
          <>
            <NavLink to="/dashboard" className="mobile-bottom-item">
              <span className="material-symbols-outlined">dashboard</span>
              <span>Dashboard</span>
            </NavLink>
            <NavLink to="/progress" className="mobile-bottom-item">
              <span className="material-symbols-outlined">account_tree</span>
              <span>Roadmap</span>
            </NavLink>
          </>
        )}
        <NavLink to="/profile" className="mobile-bottom-item">
          <span className="material-symbols-outlined">person</span>
          <span>Profile</span>
        </NavLink>
        <button onClick={handleLogout} className="mobile-bottom-item" style={{ background: 'transparent', border: 'none', padding: 0 }}>
          <span className="material-symbols-outlined">logout</span>
          <span>Logout</span>
        </button>
      </nav>
    </>
  );
}

export default Navbar;
