import { createSlice } from "@reduxjs/toolkit";
import {fetchContacts, addContact, deleteContact, changeContact} from "./operations"

const handlePanding = state => {
    state.isLoading = true;
}

const handleRejected = (state, action) => {
    state.isLoading = false; 
    state.error = action.payload;
}


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchContacts.pending]: handlePanding,
        [addContact.pending]: handlePanding,
        [deleteContact.pending]: handlePanding,
        [changeContact.pending]: handlePanding,
        [fetchContacts.rejected]: handleRejected,
        [addContact.rejected]: handleRejected,
        [deleteContact.rejected]: handleRejected,
        [changeContact.rejected]: handleRejected,
        [fetchContacts.fulfilled](state, action) {state.isLoading = false; state.error = null; state.items = action.payload;},
        [addContact.fulfilled](state, action) {state.isLoading = false; state.error = null; state.items.push(action.payload)},
        [deleteContact.fulfilled](state, action) {state.isLoading = false; state.error = null; 
            const index = state.items.findIndex(
                contact => contact.id === action.payload.id);
              state.items.splice(index, 1);},
        [changeContact.fulfilled](state, action) {state.isLoading = false; state.error = null;
           const index = state.items.findIndex(
             contact => contact.id === action.payload.id);
             state.items.splice(index, 1, action.payload)
        }
    }

})

export const {fetchingInProgress, fetchingSuccess, fetchingError} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;