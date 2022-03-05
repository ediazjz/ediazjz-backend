module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e0971f040f322de09f22a7d43706ed5a'),
  },
});
