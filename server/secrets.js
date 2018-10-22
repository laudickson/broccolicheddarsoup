require('dotenv').config()

const secrets = {
  dbUri: process.env.DB_URI,
  local_api_port: process.env.API_PORT
  firebase_key: process.env.FIREBASE_API_KEY
};

export const getSecret = key => secrets[key];
