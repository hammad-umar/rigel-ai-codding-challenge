import { Server } from 'http';
import app from './app';
import prisma from './client';
import config from './config/config';
import logger from './config/logger';

let server: Server;

prisma.$connect().then(() => {
  logger.info('Connected to PostgreSQL Database');
  server = app.listen(config.port, () => {
    logger.info(`Server is up on port:${config.port}`);
  });
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error: unknown) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
