import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { CreateJob, deleteJob, GetAllJob, updateJob } from "../Api/jobsApi"

const initialState = {
  jobs: [],
  selectedJob: null,
}

export const getAllJobs = createAsyncThunk(
  "get/getAllJobs",
  async (data, { rejectWithValue }) => {
    try {
      const response = await GetAllJob()

      if (response.error) {
        return rejectWithValue(response.error)
      }
      return response.data
    } catch (error) {
      console.error("Error in getData thunk:", error)
    }
  }
)

export const postJobs = createAsyncThunk(
  "post/getAllJobs",
  async (data, { rejectWithValue }) => {
    try {
      const response = await CreateJob(data)

      if (response.error) {
        return rejectWithValue(response.error)
      }
      return response.data
    } catch (error) {
      console.error("Error in getData thunk:", error)
    }
  }
)

export const putJobs = createAsyncThunk(
  "put/getAllJobs",
  async (data, { rejectWithValue }) => {
    try {
      console.log(data)
      const response = await updateJob(data);

      if (response.error) {
        return rejectWithValue(response.error)
      }
      return response.data
    } catch (error) {
      console.error("Error in getData thunk:", error)
    }
  }
)
export const deleteJobs = createAsyncThunk(
  "delete/getAllJobs",
  async (data, { rejectWithValue }) => {
    try {
      console.log(data)
      const response = await deleteJob(data)

      if (response.error) {
        return rejectWithValue(response.error)
      }
      return response.data
    } catch (error) {
      console.error("Error in getData thunk:", error)
    }
  }
)



const jobsSlice = createSlice({
  name: "responsive",
  initialState,
  reducers: {
    chageSelectedJob: (state, actions) => {
      // value parameter
      const data = actions.payload
      // console.log(data)
      state.selectedJob = data;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllJobs.pending, (state) => {
      console.log("loading job")
    })
    builder.addCase(getAllJobs.fulfilled, (state, action) => {
      state.jobs = action.payload
    })
    builder.addCase(getAllJobs.rejected, (state, action) => {
      console.log("gagal ambil job")
    })

    //POST DATA JOB
    builder.addCase(postJobs.pending, (state) => {
      console.log("loading post")
    })
    builder.addCase(postJobs.fulfilled, (state, action) => {
      // console.log("done post",action.payload)
      const jobs = [...state.jobs]
      // console.log(jobs)

      jobs.push(action.payload);
      state.jobs = jobs;
      console.log(state.jobs)

    })
    builder.addCase(postJobs.rejected, (state, action) => {
      console.log("gagal post job")
    })


    //put
    builder.addCase(putJobs.pending, (state) => {
      console.log("loading put")
    })

    builder.addCase(putJobs.fulfilled, (state, action) => {
      console.log("done put", action.payload)
      // console.log(jobs)

      // jobs.push(action.payload);

      let index = 0;


      for (let i = 0; i < state.jobs.length; i++) {
        const e = state.jobs[i];
        if (e.id == action.payload.id) {
          index = i;
          break;
        }

      }


      if (index !== -1) {

        state.jobs[index] = action.payload;
        console.log(state.jobs)
      }

      console.log(index)


    })

    //DELETE DATA JOB
    builder.addCase(deleteJobs.pending, (state) => {
      console.log("loading post")
    })
    builder.addCase(deleteJobs.fulfilled, (state, action) => {
      // console.log("done post",action.payload)
      const id = action.payload[0].id;

      let index = 0
      for (let i = 0; i < state.jobs.length; i++) {
        const e = state.jobs[i];
        // console.log(e.id == id)
        if (e.id == id) {
          index = i;
          break;
        }

      }

      // console.log(index)
      state.jobs.splice(index, 1);
      console.log("berhasil hapus job")



    })
    builder.addCase(deleteJobs.rejected, (state, action) => {
      console.log("gagal post job")
    })

    builder.addCase(putJobs.rejected, (state, action) => {
      console.log("gagal put job")
    })

  },



})


export const actions = {
  ...jobsSlice.actions,
  getAllJobs,
  postJobs,
  putJobs,
  deleteJobs,
}

export const { chageSelectedJob } = jobsSlice.actions

export default jobsSlice.reducer
