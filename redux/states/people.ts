import { Person } from "@/models/person";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Person[] = [];

export const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        addPeople: (state, action) => {
            return action.payload;
        }
    }
})

export const { addPeople } = peopleSlice.actions;