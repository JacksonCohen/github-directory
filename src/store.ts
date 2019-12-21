import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';

const store = configureStore({
  reducer: rootReducer
});

if (process.env.NODE_ENV === 'development' && (module as any).hot) {
  (module as any).hot.accept('./reducers/rootReducer', () => {
    const newRootReducer = require('./reducers/userReducer').default;
    store.replaceReducer(newRootReducer);
  });
}

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
