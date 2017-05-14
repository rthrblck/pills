import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import React from 'react';

import { it } from 'jest';

import Index from '../index.ios.js';

it('renders correctly on ios', () => {
  const tree = renderer.create(<Index />);
});
