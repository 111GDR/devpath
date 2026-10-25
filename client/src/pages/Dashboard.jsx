import { useState, useEffect, useMemo } from 'react';
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
    <div className="card" style={{ marginTop: 'var(--space-md)' }}>
      <div style={{ marginBottom: 'var(--space-lg)' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>Daily Activity Checklist</h3>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Track your consistency and completion checklist for this week.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 'var(--space-md)' }}>
        {weekDays.map((day, i) => (
          <div
            key={i}
            className="glass-panel"
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
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: 'var(--space-sm)' }}>
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
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: 'var(--space-sm)' }}>
              {day.isToday ? 'Today' : day.active ? 'Completed' : day.isFuture ? 'Upcoming' : 'Missed'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function getYouTubeEmbedUrl(url) {
  if (!url) return '';
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
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
              <p style={{ fontSize: '0.65rem', fontFamily: 'JetBrains Mono', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Resource Review</p>
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
      <div className="section-eyebrow"><span className="section-eyebrow-dot" /> Today's assignment</div>
      {/* Top bar details */}
      <div className="task-card-meta">
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono', fontSize: '0.75rem' }}>
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
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-lg)', marginTop: 'auto' }}>
        {/* Left Column: Resources */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
          <h4 style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-xs)' }}>Resources</h4>
          
          {task.videos?.map((video, i) => (
            <button
              key={i}
              onClick={() => onPlayVideo(video)}
              style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', padding: 'var(--space-sm)', borderRadius: 'var(--radius-md)', background: 'var(--bg-card-hover)', border: '1px solid transparent', textAlign: 'left', transition: 'border-color 0.2s', width: '100%' }}
              className="resource-item-hover task-resource"
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(76, 215, 246, 0.3)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
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
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(221, 183, 255, 0.3)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
            >
              <span className="material-symbols-outlined" style={{ color: 'var(--accent-purple)' }}>article</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 500 }}>{doc.title}</span>
            </a>
          ))}
        </div>

        {/* Right Column: Deliverable & Action */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          <div className="task-deliverable">
            <h4 style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-xs)' }}>Deliverable</h4>
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

  // Calculate percentage for progress circle
  const percentage = progress?.percentage || 0;

  return (
    <div className="page" style={{ padding: 0 }}>
      <div className="dashboard-layout">
        {/* Header Section */}
        <header className="dashboard-header animate-fade-in">
          <span className="page-eyebrow">Your workspace / Today</span>
          <h2>{getGreeting()}, <span className="heading-accent">{user?.name || 'Developer'}</span>.</h2>
          <p className="page-intro">A little progress today adds up. Your next step is ready.</p>
          {progress && (
            <div className="dashboard-header-meta">
              <span style={{ padding: '0.25rem 0.5rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                {allCompleted 
                  ? "Capstones Completed" 
                  : doneMessage
                    ? `Phase ${doneMessage.nextTask?.phase || '?'}: ${PHASE_NAMES[doneMessage.nextTask?.phase || 1]}`
                    : `Phase ${task?.phase || '?'}: ${PHASE_NAMES[task?.phase || 1]}`
                }
              </span>
              <span style={{ color: 'var(--text-muted)' }}>•</span>
              <span>{allCompleted ? 'Completed' : doneMessage ? `Week ${doneMessage.nextTask?.week || '?'}` : `Week ${task?.week || '?'}`}</span>
              <span style={{ color: 'var(--text-muted)' }}>•</span>
              <span style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>{percentage}% Complete</span>
            </div>
          )}
        </header>

        {/* Bento Grid layout */}
        <div className="bento-grid">
          {/* Stats Column - Takes 4 grid columns on desktop */}
          <div className="bento-col-4 bento-stack animate-fade-in delay-1">
            
            {/* Progress Wheel Card */}
            <div className="glass-panel progress-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '128px', height: '128px', background: 'rgba(221, 183, 255, 0.05)', borderRadius: '50%', filter: 'blur(40px)' }}></div>
              <h3 style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', width: '100%', textAlign: 'left', marginBottom: 'var(--space-md)' }}>Phase Progress</h3>
              
              <div style={{ position: 'relative', width: '160px', height: '160px' }}>
                <svg className="circular-chart" viewBox="0 0 36 36" style={{ transform: 'rotate(-90deg)' }}>
                  <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="var(--accent-purple)"></stop>
                      <stop offset="100%" stopColor="var(--accent-blue)"></stop>
                    </linearGradient>
                  </defs>
                  <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                  <path className="circle" strokeDasharray={`${percentage}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                </svg>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                  <span style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)' }}>{percentage}%</span>
                </div>
              </div>
            </div>

            {/* Streak & Completes Horizontal row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-lg)' }}>
              
              {/* Streak Card */}
              <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 'var(--space-md)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: 'var(--space-sm)' }}>
                  <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Streak</span>
                  <span className="material-symbols-outlined streak-fire" style={{ fontVariationSettings: "'FILL' 1", fontSize: '1.5rem' }}>local_fire_department</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1 }}>{streak?.streak || 0}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Days</span>
                </div>
              </div>

              {/* Tasks Completes Card */}
              <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 'var(--space-md)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: 'var(--space-sm)' }}>
                  <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Completed</span>
                  <span className="material-symbols-outlined" style={{ color: 'var(--text-muted)', fontSize: '1.5rem' }}>check_circle</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1 }}>{progress?.currentTaskIndex || 0}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>/ {progress?.totalTasks || 0}</span>
                </div>
              </div>

            </div>

          </div>

          {/* Today's Task column - Takes 8 grid columns on desktop */}
          <div className="bento-col-8 animate-fade-in delay-2">
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
                      <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Next up:</span>
                      <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginTop: '4px' }}>{doneMessage.nextTask.title}</p>
                    </div>
                  )}
                </div>
              </div>
            ) : task ? (
              <TaskCard task={task} onComplete={handleComplete} completing={completing} onPlayVideo={setActiveVideo} />
            ) : null}
          </div>
        </div>

        {/* Calendar Heatmap Section - Spans Full Width */}
        <section className="animate-fade-in delay-3">
          <DailyChecklist loginDates={calendar} />
        </section>
      </div>

      {activeVideo && (
        <VideoPlayerModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </div>
  );
}

export default Dashboard;
