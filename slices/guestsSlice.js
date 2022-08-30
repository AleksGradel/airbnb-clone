import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    adults: 0,
    children: 0,
    infants: 0, 
    total: 0,
}

export const guestsSlice = createSlice({
    name: 'guests',
    initialState,
    reducers: {
        addAdult: (state) => {
            state.adults++
            state.total++
        },
        removeAdult: (state) => {
            state.adults--
            state.total--
        },
        addChild: (state) => {
            state.children++
            state.total++
        },
        removeChild: (state) => {
            state.children--
            state.total--
        },
        addInfant: (state) => {
            state.infants++
        },
        removeInfant: (state) => {
            state.infants--
        },
        reset: () => initialState
    }
})

export const { addAdult, removeAdult, addChild, removeChild, addInfant, removeInfant, reset } = guestsSlice.actions
export default guestsSlice.reducer