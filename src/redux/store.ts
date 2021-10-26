import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import dialogOpenReducer from './dialogOpenSlice'
import loadingReducer from './loadingSlice'

export const store = configureStore({
    reducer: {
        dialogOpen: dialogOpenReducer,
        loading: loadingReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()