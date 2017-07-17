import Login from '../src/components/login/';
import React from 'react';
import { mount } from 'enzyme';

test('Login renders correct text', () => {
  const login = { id: 1, done: false, name: 'Login Into See All Available Contingency Workers' };
  const wrapper = mount(
    <Login login={login} />
  );
  const h6 = wrapper.find('.theme__title___2J-aP');
  expect(h6.text()).toBe('Login Into See All Available Contingency Workers');
});