import React from 'react';
import { DefaultRoute } from '../../components/routes';
import Home from './Home';

export default function HomeRoutes() {
  return <DefaultRoute exact path="/" component={Home} />;
}

