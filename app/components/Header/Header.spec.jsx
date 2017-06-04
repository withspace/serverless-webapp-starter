import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from './Header';
import { User } from '../../services/auth';

it('renders correctly for signed in user', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <Header user={User.signedIn('jsparrow@pearl.org')} />
    </MemoryRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly for signed out user', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <Header user={User.signedOut(null)} />
    </MemoryRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
