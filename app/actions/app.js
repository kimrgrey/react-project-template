import { createTypes } from 'redux-compose-reducer';

const TYPES = createTypes('app', [
  'openSideBar',
  'closeSideBar'
]);

export const openSideBar = () => ({
  type: TYPES.openSideBar
});

export const closeSideBar = () => ({
  type: TYPES.closeSideBar
});
