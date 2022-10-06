import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const getPetById = createAsyncThunk('pets/', async (id) => {
    try {
        return await axios.get(`${API_ROUTE}/pets/${id}`)
    } catch (err) {
        console.log(err)
    }
})

export const extraGetPetById = {
    [getPetById.pending]: (state) => {
        state.statusPets = 'loading'
        state.openModal = true
    },
    [getPetById.fulfilled]: (state, action) => {
        state.statusPets = 'success'
        state.petDetail = action.payload.data.pet
    },
    [getPetById.rejected]: (state) => {
        state.statusPets = 'failed'
    },
}
