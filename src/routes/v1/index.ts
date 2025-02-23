import express from 'express';
import userRoutes from './user.route';
import authRoutes from './auth.route';
import taskRoutes from './task.route';
import docsRoute from './docs.route';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/docs',
    route: docsRoute,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/tasks',
    route: taskRoutes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
