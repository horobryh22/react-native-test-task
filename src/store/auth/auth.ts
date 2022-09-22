import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type AuthStateType = {
    isUserLogged: boolean;
    error: string | null;
}

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isUserLogged: false,
        error: null
    } as AuthStateType,
    reducers: {
        setIsUserLogged: (state, action:PayloadAction<boolean>) => {
            state.isUserLogged = action.payload
        },
        setAuthError: (state, action:PayloadAction<null | string>) => {
            state.error = action.payload
        }
    },
    extraReducers: {}
})

export const {setIsUserLogged, setAuthError} = authSlice.actions;
export const auth = authSlice.reducer;