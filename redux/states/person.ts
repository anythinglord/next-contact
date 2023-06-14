import { Person } from "@/models/person";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Person = {
    id: 0,
    name: '',
    category: '',
    phone: '',
    age: 0,
    company: ''
};

export const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        addPerson: (state, action) => {
            return action.payload;
        }
    }
})

export const { addPerson } = personSlice.actions;