import express from 'express';
import cors from 'cors';
import httpStatus from 'http-status';
import passport from 'passport';
import ApiError from './utils/ApiError';
import routes from './routes/v1';
import { errorConverter, errorHandler } from './middlewares/error';
import { jwtStrategy } from './config/passport';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.options('*', cors());

app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

app.use('/api/v1', routes);

app.use((_, __, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

app.use(errorConverter);
app.use(errorHandler);

export default app;
