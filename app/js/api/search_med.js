/**
 * Search medication via API
 *
 * Phases:
 * 1. mockup (async)
 * 2. clientside public API (whatever's available)
 * 3. client -> serverside - our own API - more featureful
 *
 */
export const medsMock = [
  { name: 'Asprin', type: 'oral_pill' },
  { name: 'Asprin', type: 'oral_gelcaps' },
  { name: 'Asprin', type: 'liquid' },
  { name: 'Niasin', type: 'oral_pull' },
  { name: 'Niasin', type: 'oral_gelcaps' },
  { name: 'Niquil', type: 'liquid' },
  { name: 'Niquil Night Time', type: 'liquid' },
  { name: 'Niquil Cold and Flu', type: 'liquid' },
];

export default () => new Promise((resolve, reject) => {
  setTimeout(() => resolve(medsMock), 3000);
});

