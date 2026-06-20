/**
 * requireAdmin middleware
 * Must be used AFTER auth middleware
 * Checks that the authenticated user has role === "admin"
 * Returns 403 if not admin
 */
const requireAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ error: 'Authentication required.' });
  }

  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied. Admin privileges required.' });
  }

  next();
};

module.exports = requireAdmin;
