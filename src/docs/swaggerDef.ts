import { SwaggerDefinition } from 'swagger-jsdoc';
import { name, version } from '../../package.json';
import config from '../config/config';

const swaggerDef: SwaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: `${name} API documentation`,
    version,
    license: {
      name: 'MIT',
    },
  },
  servers: [
    {
      url: `http://localhost:${config.port}/api/v1`,
    },
  ],
};

export default swaggerDef;
