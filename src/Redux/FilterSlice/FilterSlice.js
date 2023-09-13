import { createSlice } from "@reduxjs/toolkit";
import { InitialFilterState } from './InitialFilterState';


const FilterSlice = createSlice({
    name: 'filter',
    initialState: InitialFilterState,
    reducers: {
        filterChange(state, action) {
            state.value = action.payload;
        },
    },
});

export const FilterReduser = FilterSlice.reducer;
export const { filterChange } = FilterSlice.actions;