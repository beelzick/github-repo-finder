import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface InitialState {
    loading: boolean
}

const initialState: InitialState = {
    loading: false
}

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        }
    }
})

export const { setLoading } = loadingSlice.actions

export const selectLoading = (state: RootState) => state.loading.loading

export default loadingSlice.reducer