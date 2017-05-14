/**
 * This file shouldn't be used
 * http://facebook.github.io/react-native/releases/0.44/docs/platform-specific-code.html#platform-specific-extensions
 *
 * Put in place to make the linter happy
 * also as a demonstration of Platform specific code
 *
 */
import { Platform } from 'react-native';
import ProgressBarAndroid from './ProgressBar.android';
import ProgressBarIos from './ProgressBar.ios';

export default Platform.select({
  ios: ProgressBarIos,
  android: ProgressBarAndroid,
})();
