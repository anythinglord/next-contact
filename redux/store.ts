import { Person } from "@/models/person";
import { configureStore } from "@reduxjs/toolkit";
import { peopleSlice } from "./states/people";
import { personSlice } from "./states/person";

export interface AppStore {
    people: Person[];
    person: Person;
}

export default configureStore<AppStore>({
    reducer: {
        people: peopleSlice.reducer, 
        person: personSlice.reducer
    }
});