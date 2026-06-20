import { useAuth } from '../context/AuthContext';

function Profile() {
  const { user } = useAuth();

  const formatDate = (dateStr) => {
    if (!dateStr) return 'N/A';
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="page" style={{ padding: 0 }}>
      <div className="dashboard-layout">
        <header className="dashboard-header animate-fade-in">
          <h2>Profile</h2>
          <div className="dashboard-header-meta">
            <span>Account Details</span>
          </div>
        </header>

        <div className="card profile-card animate-slide-up" style={{ width: '100%' }}>
          <div className="profile-avatar">
            {user?.name?.charAt(0)?.toUpperCase() || '?'}
          </div>

          <div className="profile-detail">
            <span className="label">Name</span>
            <span className="value">{user?.name}</span>
          </div>

          <div className="profile-detail">
            <span className="label">Email</span>
            <span className="value">{user?.email}</span>
          </div>

          <div className="profile-detail">
            <span className="label">Role</span>
            <span className="value" style={{ textTransform: 'capitalize' }}>{user?.role}</span>
          </div>

          {user?.role === 'student' && (
            <>
              <div className="profile-detail">
                <span className="label">Current Task</span>
                <span className="value">#{(user?.currentTaskIndex || 0) + 1}</span>
              </div>

              <div className="profile-detail">
                <span className="label">Streak</span>
                <span className="value" style={{ color: 'var(--warning-orange)', fontWeight: 600 }}>🔥 {user?.streak || 0} days</span>
              </div>
            </>
          )}

          <div className="profile-detail">
            <span className="label">Member since</span>
            <span className="value">{formatDate(user?.createdAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
