import { composeReducer } from 'redux-compose-reducer';

const initialState = {
  open: false
};

const openSideBar = (state) => ({
  ...state,
  open: true
});

const closeSideBar = (state) => ({
  ...state,
  open: false
});

const locationChange = (state, action) => {
  return {
    ...state,
    open: false
  }
};

const routerReducer = composeReducer("@@router", {
  'LOCATION_CHANGE': locationChange
});

export default composeReducer('app', {
  openSideBar,
  closeSideBar
}, initialState, routerReducer);
