import React from 'react';
import renderer from 'react-test-renderer';
import Layout from './Layout';

test('renders Layout correctly', () => {
  const tree = renderer
    .create(<Layout><p>content</p></Layout>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
