export const configuration = () => ({
    environment: process.env.NODE_ENV,
    api_port: parseInt(process.env.API_PORT),
  });
  