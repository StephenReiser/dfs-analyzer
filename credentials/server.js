module.exports = {
  // paste your firebase config here:
  
    "type": "service_account",
    "project_id": process.env.PRIVATE_PROJECT_ID,
    "private_key_id": process.env.PRIVATE_KEY_ID,
    "private_key": process.env.PRIVATE_KEY,
    "client_email": "firebase-adminsdk-3lh0z@dfs-analyzer-a6cf9.iam.gserviceaccount.com",
    "client_id": process.env.PRIVATE_CLIENT_ID,
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-3lh0z%40dfs-analyzer-a6cf9.iam.gserviceaccount.com"
  
}