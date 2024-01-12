import { configureStore, combineReducers } from '@reduxjs/toolkit';
import historyReducer from '../history-slice';
import { RootState } from './schema';

 // Load initial state from localStorage
const preloadedState = loadState();

const rootReducer = combineReducers({
  history: historyReducer,
});

function loadState() {
  try {
    const serializedState = localStorage.getItem('reduxState');

    if (serializedState === null) return undefined;

    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading state from localStorage:', err);

    return undefined;
  }
}

function saveState(state: RootState) {
  try {
    const serializedState = JSON.stringify(state);

    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    console.error('Error saving state to localStorage:', err);
  }
}

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

// Subscribe to store updates and save the state to localStorage
store.subscribe(() => saveState(store.getState()));

export default store;