import { combineReducers, configureStore } from "@reduxjs/toolkit"
import responsiveSlice from "./counter/responsiveSlice"
import jobsSlice from "./counter/jobsSlice"

const combineReducer = combineReducers({
    responsiveSlice,
    jobsSlice,
})

export const store = configureStore(
    {
        reducer:{
            counter:combineReducer,
        },
        
    }
)