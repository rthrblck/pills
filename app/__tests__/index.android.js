import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import React from 'react';

import { it } from 'jest';

import Index from '../index.android.js';

it('renders correctly on android', () => {
  const tree = renderer.create(<Index />);
});
