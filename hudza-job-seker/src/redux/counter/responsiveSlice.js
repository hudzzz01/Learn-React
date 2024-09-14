import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    resolution: {
        width : 0,
        height : 0,
    },
  }


  const responsiveSlice = createSlice({
    name: "responsive",
    initialState,
    reducers: {
        chageWidth : (state, actions) => {
            // value parameter
            const data = actions.payload
            // console.log(data)
            state.resolution.width = data;
            // const copyState = {...state};
            // copyState.width = data;
            // state = copyState;
        },

    },
  })

  export const {chageWidth} = responsiveSlice.actions
  export default responsiveSlice.reducer