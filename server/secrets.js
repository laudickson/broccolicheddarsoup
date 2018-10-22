const secrets = {
  dbUri: process.env.DB_URI,
  local_api_port: process.env.API_PORT
};

export const getSecret = key => secrets[key];
