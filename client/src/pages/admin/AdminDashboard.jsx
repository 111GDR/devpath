import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/admin/users', { credentials: 'include' });
        const data = await res.json();
        setUsers(data.users || []);
      } catch (err) {
        console.error('Fetch users error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="page" style={{ padding: 0 }}>
      <div className="dashboard-layout">
        <header className="dashboard-header animate-fade-in">
          <h2>Student Overview</h2>
          <div className="dashboard-header-meta">
            <span>Manage and monitor cohort progress</span>
          </div>
        </header>

        <div className="stats-grid animate-fade-in delay-1" style={{ marginBottom: 'var(--space-md)' }}>
          <div className="stat-card">
            <div className="stat-label">Active Students</div>
            <div className="stat-value" style={{ color: 'var(--accent-blue)' }}>{users.length}</div>
          </div>
        </div>

        {users.length === 0 ? (
          <div className="empty-state animate-fade-in">
            <h3>No students yet</h3>
            <p>Students will appear here after they register.</p>
          </div>
        ) : (
          <div className="table-container animate-slide-up">
            <table className="table table-clickable">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phase / Week</th>
                  <th>Current Task</th>
                  <th>Progress</th>
                  <th>Streak</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user._id} className="table-row-hover" tabIndex={0} aria-label={`View ${user.name}'s roadmap`} onClick={() => navigate(`/admin/users/${user._id}`)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); navigate(`/admin/users/${user._id}`); } }}>
                    <td data-label="Name" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{user.name}</td>
                    <td data-label="Email" style={{ fontFamily: 'JetBrains Mono', fontSize: '0.85rem' }}>{user.email}</td>
                    <td data-label="Phase / Week">
                      {user.currentPhase ? (
                        <>
                          <span className="badge badge-phase">Phase {user.currentPhase}</span>
                          <span style={{ marginLeft: 'var(--space-sm)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Wk {user.currentWeek}</span>
                        </>
                      ) : '—'}
                    </td>
                    <td data-label="Current task" style={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: '0.9rem' }}>
                      {user.currentTaskTitle}
                    </td>
                    <td data-label="Progress">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div className="progress-bar-container" style={{ width: 80, height: 6 }}>
                          <div className="progress-bar-fill" style={{ width: `${user.percentage}%` }} />
                        </div>
                        <span style={{ fontSize: '0.8rem', fontFamily: 'JetBrains Mono', color: 'var(--accent-blue)', fontWeight: 600 }}>{user.percentage}%</span>
                      </div>
                    </td>
                    <td data-label="Streak">
                      <span style={{ color: 'var(--warning-orange)', fontWeight: 600 }}>{user.streak} days</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
