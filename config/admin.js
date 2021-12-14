module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '328742f8a65d4d6ec66cb713c78a4793'),
  },
});
