module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f2a7e8f1a46a42f5d0593f062331c886'),
  },
});
