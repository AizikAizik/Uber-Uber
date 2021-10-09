import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';

export interface NavState {
  origin: any;
  destination: any;
  travelTimeInformation: any;
}

const initialState: NavState = {
  origin: null,
  destination: null,
  travelTimeInformation: null
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action: PayloadAction<any>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.origin = action.payload;
    },
    setDestination: (state, action: PayloadAction<any>) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action: PayloadAction<number>) => {
      state.travelTimeInformation = action.payload;
    },
  },
})

// selectors for getting values from the data store
export const selectOrigin = (state: RootState) => state.nav.origin;
export const selectDestination = (state: RootState) => state.nav.destination;
export const selectTravelTimeInformation = (state: RootState) => state.nav.travelTimeInformation;

// Action creators are generated for each case reducer function
export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;

export default navSlice.reducer;