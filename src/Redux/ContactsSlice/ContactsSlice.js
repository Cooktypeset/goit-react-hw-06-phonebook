import { createSlice } from "@reduxjs/toolkit";
import { InitialContactsState } from "./InitialContactsState";
import { nanoid } from "nanoid";

const ContactsSlice = createSlice({
    name: 'contact',
    initialState: InitialContactsState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contacts.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name: name,
                        number: number,
                    },
                };
            },
        },
        deleteContact(state, action) {
            const index = state.contacts.findIndex(
                contact => contact.id === action.payload
            );
            state.contacts.splice(index, 1);
        },
    },
});

export const ContactsSliceReduser = ContactsSlice.reducer;
export const { addContact, deleteContact } = ContactsSlice.actions;