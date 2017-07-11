import React from 'react';
import { DefaultRoute } from '../../components/routes';
import Tasks from './TasksView';

export default function TasksRoutes() {
  return <DefaultRoute path="/tasks" component={Tasks} />;
}

