import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {auth} from './auth/auth';
import {root} from './root/root';

export const rootReducer = combineReducers({
    auth: auth,
    root: root
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

