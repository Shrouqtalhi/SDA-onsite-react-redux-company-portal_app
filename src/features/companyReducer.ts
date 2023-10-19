import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Company } from '../CompanyType'

type InitialState = {
  companysList: Company[]
  loading: boolean
  error: null | string
}

const initialState: InitialState = {
  companysList: [],
  loading: true,
  error: null
}

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    getData: (state, action: PayloadAction<Company[]>) => {
      console.log(action.payload)
      state.companysList = action.payload
      state.loading = false
    },
    handleError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    }
  }
})

const companyReducer = companySlice.reducer
export default companyReducer

export const companyAction = companySlice.actions
