import 'babel-polyfill';
import test from 'ava';
import getMeds, { medsMock } from './search_med';

test('api search_med (mock)', async t => {
  t.deepEqual(await getMeds(), medsMock);
});
