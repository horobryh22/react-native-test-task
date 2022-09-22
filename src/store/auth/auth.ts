import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type AuthStateType = {
    isUserLogged: boolean;
}

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isUserLogged: false
    } as AuthStateType,
    reducers: {
        setIsUserLogged: (state, action:PayloadAction<boolean>) => {
            state.isUserLogged = action.payload
        }
    },
    extraReducers: {}
})

export const auth = authSlice.reducer;