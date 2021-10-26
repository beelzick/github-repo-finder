import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface InitialState {
    dialogOpen: boolean
}

const initialState: InitialState = {
    dialogOpen: false
}

const dialogOpenSlice = createSlice({
    name: 'dialogOpen',
    initialState,
    reducers: {
        setDialogOpen: (state, action: PayloadAction<boolean>) => {
            state.dialogOpen = action.payload
        }
    }
})

export const { setDialogOpen } = dialogOpenSlice.actions

export const selectDialogOpen = (state: RootState) => state.dialogOpen.dialogOpen

export default dialogOpenSlice.reducer