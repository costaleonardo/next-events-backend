module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  cloudinary_name: env('CLOUDINARY_NAME', 'dhroaqswh'),
  cloudinary_key: env('CLOUDINARY_KEY', '858278631173778'),
  cloudinary_secret: env('CLOUDINARY_SECRET', 'tR_piWRfwYq9lFsZDCiAGYGJyeE')
});
