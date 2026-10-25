import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PHASE_NAMES = {
  1: 'Foundations',
  2: 'Core Stack',
  3: 'Performance & Security',
  4: 'Real Projects',
  5: 'Professional Practices'
};

function DailyChecklist({ loginDates = [] }) {
  const weekDays = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Helper to get local YYYY-MM-DD string
    const getLocalYYYYMMDD = (d) => {
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    // Calculate current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const currentDay = today.getDay();
    // Shift week start to Monday (if Sunday, go back 6 days, otherwise start at Monday)
    const dayDiff = currentDay === 0 ? -6 : 1 - currentDay;

    const monday = new Date(today);
    monday.setDate(today.getDate() + dayDiff);
    monday.setHours(0, 0, 0, 0);

    // Parse the completed dates in the user's local timezone
    const dateSet = new Set(loginDates.map(d => getLocalYYYYMMDD(new Date(d))));
    const result = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      const dateStr = getLocalYYYYMMDD(date);
      const isToday = date.toDateString() === today.toDateString();

      result.push({
        name: date.toLocaleDateString('default', { weekday: 'long' }),
        shortName: date.toLocaleDateString('default', { weekday: 'short' }),
        dateStr,
        active: dateSet.has(dateStr),
        isToday,
        isFuture: date > today
      });
    }

    return result;
  }, [loginDates]);

  return (
    <div className="card daily-checklist">
      <div style={{ marginBottom: 'var(--space-lg)' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>Daily Activity Checklist</h3>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Your activity this week.</p>
      </div>
      <div className="daily-checklist-grid">
        {weekDays.map((day, i) => (
          <div
            key={i}
            className={`glass-panel daily-checklist-day${day.isToday ? ' is-today' : ''}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 'var(--space-md)',
              border: day.isToday ? '1px solid var(--accent-blue)' : '1px solid var(--border-color)',
              background: day.isToday ? 'rgba(76, 215, 246, 0.05)' : 'var(--bg-card)',
              opacity: day.isFuture ? 0.5 : 1,
              transition: 'all var(--transition-fast)'
            }}
          >
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: 'var(--space-sm)' }}>
              {day.shortName}
            </span>
            {day.active ? (
              <span className="material-symbols-outlined" style={{ color: 'var(--success-green)', fontSize: '2rem', fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
            ) : day.isFuture ? (
              <span className="material-symbols-outlined" style={{ color: 'var(--text-muted)', fontSize: '2rem' }}>
                schedule
              </span>
            ) : (
              <span className="material-symbols-outlined" style={{ color: 'var(--danger-red)', fontSize: '2rem' }}>
                cancel
              </span>
            )}
            <span className="activity-status-full" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: 'var(--space-sm)' }}>
              {day.isToday ? 'Today' : day.active ? 'Completed' : day.isFuture ? 'Upcoming' : 'Missed'}
            </span>
            <span className="activity-status-short">{day.isToday ? 'Today' : day.active ? 'Done' : day.isFuture ? 'Next' : 'Missed'}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

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

function TaskCard({ task, onComplete, completing, onPlayVideo }) {
  return (
    <div className="task-card animate-slide-up daily-task-card">
      <div className="task-label">Today's assignment</div>
      {/* Top bar details */}
      <div className="task-card-meta">
        <div className="task-position">
          <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>calendar_today</span>
          <span>Phase {task.phase} / Wk {task.week} / Day {task.day}</span>
        </div>
        <span className={`badge badge-${task.difficulty.toLowerCase()}`}>
          {task.difficulty}
        </span>
      </div>

      <h2 className="daily-task-title">{task.title}</h2>
      
      <div className="task-description">
        <p>{task.description}</p>
      </div>

      {/* Concept tags */}
      {task.concepts?.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)', marginBottom: 'var(--space-lg)' }}>
          {task.concepts.map((concept, i) => (
            <span key={i} className="concept-tag">
              {concept}
            </span>
          ))}
        </div>
      )}

      {/* Resources & Actions Grid */}
      <div className="task-details-grid">
        {/* Left Column: Resources */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
          <h4 className="task-section-heading">Resources</h4>
          
          {task.videos?.map((video, i) => (
            <button
              key={i}
              onClick={() => onPlayVideo(video)}
              style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', padding: 'var(--space-sm)', borderRadius: 'var(--radius-md)', background: 'var(--bg-card-hover)', border: '1px solid transparent', textAlign: 'left', transition: 'border-color 0.2s', width: '100%' }}
              className="resource-item-hover task-resource"
            >
              <span className="material-symbols-outlined" style={{ color: 'var(--accent-blue)' }}>play_circle</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 500 }}>{video.title}</span>
            </button>
          ))}

          {task.docs?.map((doc, i) => (
            <a
              key={i}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="task-resource"
              style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', padding: 'var(--space-sm)', borderRadius: 'var(--radius-md)', background: 'var(--bg-card-hover)', border: '1px solid transparent', textDecoration: 'none', transition: 'border-color 0.2s' }}
            >
              <span className="material-symbols-outlined" style={{ color: 'var(--accent-purple)' }}>article</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 500 }}>{doc.title}</span>
            </a>
          ))}
        </div>

        {/* Right Column: Deliverable & Action */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          <div className="task-deliverable">
            <h4 className="task-section-heading">Deliverable</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>{task.deliverable}</p>
          </div>

          <button
            className="btn btn-primary btn-lg"
            style={{ width: '100%', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-sm)' }}
            onClick={onComplete}
            disabled={completing}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>check</span>
            <span>{completing ? 'Marking complete...' : 'Mark as Complete'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  const { user } = useAuth();
  const [task, setTask] = useState(null);
  const [progress, setProgress] = useState(null);
  const [streak, setStreak] = useState(null);
  const [calendar, setCalendar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [completing, setCompleting] = useState(false);
  const [doneMessage, setDoneMessage] = useState(null);
  const [allCompleted, setAllCompleted] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const fetchDashboard = async () => {
    try {
      const [taskRes, progressRes, streakRes, calendarRes] = await Promise.all([
        fetch('/api/tasks/today', { credentials: 'include' }),
        fetch('/api/user/progress', { credentials: 'include' }),
        fetch('/api/user/streak', { credentials: 'include' }),
        fetch('/api/user/calendar', { credentials: 'include' })
      ]);

      const taskData = await taskRes.json();
      const progressData = await progressRes.json();
      const streakData = await streakRes.json();
      const calendarData = await calendarRes.json();

      setProgress(progressData);
      setStreak(streakData);
      setCalendar(calendarData.loginDates || []);

      if (taskData.completed) {
        setAllCompleted(true);
      } else if (taskData.alreadyDone) {
        setDoneMessage(taskData);
      } else {
        setTask(taskData.task);
      }
    } catch (err) {
      console.error('Dashboard fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  const handleComplete = async () => {
    setCompleting(true);
    try {
      const res = await fetch('/api/tasks/complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
      });

      if (res.ok) {
        setTask(null);
        setLoading(true);
        await fetchDashboard();
      }
    } catch (err) {
      console.error('Complete error:', err);
    } finally {
      setCompleting(false);
    }
  };

  // Get time-based greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  // Progress is shared by the summary and roadmap link.
  const percentage = progress?.percentage || 0;
  const currentTask = doneMessage?.nextTask || task;

  return (
    <div className="page" style={{ padding: 0 }}>
      <div className="dashboard-layout">
        <header className="dashboard-header workspace-heading">
          <h1>{getGreeting()}, {user?.name || 'Developer'}.</h1>
          <p className="page-intro">{allCompleted ? 'Your roadmap is complete.' : doneMessage ? 'Today’s work is done. Keep your momentum for tomorrow.' : 'Your next assignment is ready.'}</p>
        </header>

        <div className="dashboard-metrics" aria-label="Your learning snapshot">
          <div className="dashboard-metric"><span>Current phase</span><strong>{allCompleted ? 'Complete' : PHASE_NAMES[currentTask?.phase] || '—'}</strong></div>
          <div className="dashboard-metric"><span>Current week</span><strong>{allCompleted ? '—' : currentTask?.week || '—'}</strong></div>
          <div className="dashboard-metric"><span>Assignments done</span><strong>{progress?.currentTaskIndex || 0}</strong></div>
          <div className="dashboard-metric"><span>Day streak</span><strong>{streak?.streak || 0}</strong></div>
        </div>

        {/* Bento Grid layout */}
        <div className="bento-grid">
          {/* Primary assignment */}
          <div className="bento-col-8 dashboard-primary animate-fade-in delay-1">
            {allCompleted ? (
              <div className="task-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '350px' }}>
                <div className="task-done-message" style={{ textAlign: 'center' }}>
                  <span className="material-symbols-outlined done-icon" aria-hidden="true" style={{ fontSize: '3rem', marginBottom: 'var(--space-md)', color: 'var(--accent-blue)' }}>school</span>
                  <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)' }}>You completed the entire roadmap!</h2>
                  <p style={{ color: 'var(--text-secondary)' }}>Incredible dedication. You've grown from foundation concepts to professional-level skills.</p>
                </div>
              </div>
            ) : doneMessage ? (
              <div className="task-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '350px' }}>
                <div className="task-done-message" style={{ textAlign: 'center' }}>
                  <span className="material-symbols-outlined done-icon" aria-hidden="true" style={{ fontSize: '3rem', color: 'var(--success-green)', marginBottom: 'var(--space-md)' }}>check_circle</span>
                  <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)' }}>You're done for today!</h2>
                  <p style={{ color: 'var(--text-secondary)' }}>Come back tomorrow for your next assignment.</p>
                  {doneMessage.nextTask && (
                    <div style={{ marginTop: 'var(--space-xl)', padding: 'var(--space-md)', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', display: 'inline-block', border: '1px solid var(--border-color)' }}>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Next up:</span>
                      <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginTop: '4px' }}>{doneMessage.nextTask.title}</p>
                    </div>
                  )}
                </div>
              </div>
            ) : task ? (
              <TaskCard task={task} onComplete={handleComplete} completing={completing} onPlayVideo={setActiveVideo} />
            ) : null}
          </div>
          <div className="bento-col-4 dashboard-insights">
            <section className="progress-panel" aria-labelledby="roadmap-progress-title">
              <div className="progress-panel-heading"><h2 id="roadmap-progress-title">Roadmap progress</h2><strong>{percentage}%</strong></div>
              <div className="progress-bar-container" role="progressbar" aria-label="Roadmap completion" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100"><div className="progress-bar-fill" style={{ width: `${percentage}%` }} /></div>
              <p className="progress-caption">{progress?.currentTaskIndex || 0} of {progress?.totalTasks || 0} assignments completed</p>
              <Link to="/progress" className="progress-link">View the full roadmap <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span></Link>
            </section>
            <DailyChecklist loginDates={calendar} />
          </div>

        </div>
      </div>

      {activeVideo && (
        <VideoPlayerModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </div>
  );
}

export default Dashboard;
