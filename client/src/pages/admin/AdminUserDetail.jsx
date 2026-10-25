import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PHASE_NAMES = {
  1: 'Foundations',
  2: 'Core Stack',
  3: 'Performance & Security',
  4: 'Real Projects',
  5: 'Professional Practices'
};

const STATUS_ICONS = {
  completed: <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>,
  current: <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>,
  locked: <span className="material-symbols-outlined">lock</span>
};

function getYouTubeEmbedUrl(url) {
  if (!url) return '';
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length === 11) {
    return `https://www.youtube.com/embed/${match[2]}?autoplay=1`;
  }
  return url;
}

function VideoPlayerModal({ video, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!video) return null;

  return (
    <div className="video-modal-backdrop" onClick={onClose}>
      <div className="video-modal" onClick={(e) => e.stopPropagation()}>
        <div className="video-modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: 'var(--radius-sm)', background: 'var(--accent-blue-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="material-symbols-outlined text-primary" style={{ color: 'var(--accent-blue)', fontSize: '1.25rem' }}>smart_display</span>
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>{video.title}</h3>
              <p style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Resource Review</p>
            </div>
          </div>
          <button className="video-modal-close" onClick={onClose} aria-label="Close video player" style={{ border: 'none', background: 'transparent', display: 'flex', alignItems: 'center' }}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="video-iframe-container">
          <iframe
            src={getYouTubeEmbedUrl(video.url)}
            title={video.title}
            className="video-iframe"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <a href={video.url} target="_blank" rel="noopener noreferrer" className="video-external-link">
          Video not playing? Watch on YouTube
        </a>
      </div>
    </div>
  );
}

function AdminUserDetail() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [skipping, setSkipping] = useState(null);
  const [expandedTaskIndex, setExpandedTaskIndex] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);

  const fetchUserDetail = async () => {
    try {
      const res = await fetch(`/api/admin/users/${userId}`, { credentials: 'include' });
      if (!res.ok) {
        navigate('/admin');
        return;
      }
      const data = await res.json();
      setUserData(data.user);
      setTasks(data.tasks || []);
    } catch (err) {
      console.error('Fetch user detail error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserDetail();
  }, [userId]);

  const handleSkip = async (targetTaskIndex) => {
    if (!window.confirm(`Skip this student to task #${targetTaskIndex + 1}?`)) return;
    
    setSkipping(targetTaskIndex);
    try {
      const res = await fetch(`/api/admin/users/${userId}/skip`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ targetTaskIndex })
      });

      if (res.ok) {
        setLoading(true);
        await fetchUserDetail();
      }
    } catch (err) {
      console.error('Skip error:', err);
    } finally {
      setSkipping(null);
    }
  };

  const toggleExpandTask = (taskIndex) => {
    setExpandedTaskIndex(prev => prev === taskIndex ? null : taskIndex);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  // Group tasks by phase and week
  const phases = {};
  tasks.forEach(task => {
    if (!phases[task.phase]) phases[task.phase] = {};
    if (!phases[task.phase][task.week]) phases[task.phase][task.week] = [];
    phases[task.phase][task.week].push(task);
  });

  return (
    <div className="page" style={{ padding: 0 }}>
      <div className="dashboard-layout">
        {/* Header navigation */}
        <header className="dashboard-header animate-fade-in">
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => navigate('/admin')}
            style={{ marginBottom: 'var(--space-md)', display: 'inline-flex', alignItems: 'center', gap: 'var(--space-xs)' }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_back</span>
            <span>Back to Users</span>
          </button>
          
          <h1>{userData?.name || 'Student detail'}</h1>
          <p className="page-intro">Review this learner’s roadmap and move them forward when needed.</p>
        </header>

        <div className="card learner-summary">
          <div><span>Email</span><strong>{userData?.email}</strong></div>
          <div><span>Current task</span><strong>#{(userData?.currentTaskIndex || 0) + 1}</strong></div>
          <div><span>Day streak</span><strong>{userData?.streak || 0}</strong></div>
        </div>

        {/* Roadmap listing */}
        <div className="roadmap-tree animate-fade-in delay-1">
          {Object.entries(phases).map(([phase, weeks]) => (
            <div key={phase} className="roadmap-phase">
              <h2 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', margin: 'var(--space-lg) 0' }}>
                <span className="badge badge-phase">Phase {phase}</span>
                <span style={{ color: 'var(--text-primary)' }}>{PHASE_NAMES[phase]}</span>
              </h2>

              {Object.entries(weeks).map(([week, weekTasks]) => (
                <div key={week} className="roadmap-week" style={{ paddingLeft: 'var(--space-md)' }}>
                  <h3 style={{ fontSize: '0.9rem', color: 'var(--accent-purple)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-md)' }}>
                    Week {week}
                  </h3>

                  {weekTasks.map(task => {
                    const isExpanded = expandedTaskIndex === task.index;
                    return (
                      <div 
                        key={task.index} 
                        className={`roadmap-task ${task.status} ${isExpanded ? 'expanded' : ''}`}
                        onClick={() => toggleExpandTask(task.index)}
                      >
                        {/* Timeline Node Icon */}
                        <div className="roadmap-node-indicator">
                          {STATUS_ICONS[task.status]}
                        </div>

                        {/* Task main header summary */}
                        <div style={{ flex: 1 }}>
                          <div className="roadmap-task-header">
                            <div className="roadmap-task-title-group">
                              <span className="roadmap-task-title" style={{ color: isExpanded ? 'var(--accent-blue)' : 'var(--text-primary)' }}>
                                {task.title}
                              </span>
                            </div>
                            <div style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'center' }} onClick={(e) => e.stopPropagation()}>
                              <span className={`badge badge-${task.difficulty.toLowerCase()}`}>
                                {task.difficulty}
                              </span>
                              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                {task.estimatedTime}
                              </span>
                              <button className="roadmap-expand-btn" aria-expanded={isExpanded} aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${task.title}`} onClick={(event) => { event.stopPropagation(); toggleExpandTask(task.index); }}><span className="material-symbols-outlined" aria-hidden="true">{isExpanded ? 'expand_less' : 'expand_more'}</span></button>
                              
                              {/* Override Skip Button */}
                              {task.status !== 'completed' && (
                                <button
                                  className="admin-skip-btn"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleSkip(task.index);
                                  }}
                                  disabled={skipping === task.index}
                                  style={{ padding: '0.25rem 0.5rem', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '2px' }}
                                >
                                  <span className="material-symbols-outlined" style={{ fontSize: '0.8rem' }}>fast_forward</span>
                                  <span>{skipping === task.index ? 'Skipping...' : 'Skip to Task'}</span>
                                </button>
                              )}
                            </div>
                          </div>

                          {/* Expanded content details */}
                          {isExpanded && (
                            <div className="roadmap-task-details" onClick={(e) => e.stopPropagation()}>
                              <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                                {task.description}
                              </p>

                              {task.concepts && task.concepts.length > 0 && (
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
                                  {task.concepts.map((concept, idx) => (
                                    <span key={idx} className="concept-tag" style={{ background: 'var(--bg-card-hover)', color: 'var(--accent-purple)', border: '1px solid rgba(221, 183, 255, 0.2)', padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-full)', fontSize: '0.7rem', fontWeight: 600 }}>
                                      [{concept.toUpperCase()}]
                                    </span>
                                  ))}
                                </div>
                              )}

                              {/* Resources lists */}
                              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-md)', marginTop: 'var(--space-md)' }}>
                                {task.videos && task.videos.length > 0 && (
                                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                                    <h4 className="task-section-heading">Videos</h4>
                                    {task.videos.map((video, idx) => (
                                      <button 
                                        key={idx}
                                        onClick={() => setActiveVideo(video)}
                                        style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', padding: 'var(--space-xs) 0', color: 'var(--accent-blue)', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                                        className="resource-item-hover"
                                      >
                                        <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>play_circle</span>
                                        <span style={{ fontSize: '0.85rem' }}>{video.title}</span>
                                      </button>
                                    ))}
                                  </div>
                                )}

                                {task.docs && task.docs.length > 0 && (
                                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                                    <h4 className="task-section-heading">Documentation</h4>
                                    {task.docs.map((doc, idx) => (
                                      <a 
                                        key={idx}
                                        href={doc.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', padding: 'var(--space-xs) 0', color: 'var(--accent-purple)', textDecoration: 'none' }}
                                      >
                                        <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>article</span>
                                        <span style={{ fontSize: '0.85rem' }}>{doc.title}</span>
                                      </a>
                                    ))}
                                  </div>
                                )}
                              </div>

                              {task.deliverable && (
                                <div style={{ background: 'rgba(76, 215, 246, 0.05)', border: '1px solid rgba(76, 215, 246, 0.15)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', marginTop: 'var(--space-md)' }}>
                                  <h4 style={{ fontSize: '0.7rem', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-xs)' }}>Deliverable</h4>
                                  <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>{task.deliverable}</p>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {activeVideo && (
        <VideoPlayerModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </div>
  );
}

export default AdminUserDetail;
