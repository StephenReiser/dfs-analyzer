require('./env.js')

module.exports = {
  // Public, build-time env vars.
  // https://nextjs.org/docs#build-time-configuration
  env: {
    FIREBASE_APIKEY: process.env.FIREBASE_APIKEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    PRIVATE_PROJECT_ID: process.env.PRIVATE_PROJECT_ID,
    PRIVATE_KEY_ID: process.env.PRIVATE_KEY_ID,
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    PRIVATE_CLIENT_ID: process.env.PRIVATE_CLIENT_ID
  },
}

