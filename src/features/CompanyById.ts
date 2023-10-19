import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Company } from '../CompanyType'

type InitialState = {
  company: null | Company
  loading: boolean
  error: null | string
}

const initialState: InitialState = {
  company: null,
  loading: true,
  error: null
}

const companyByIdSlice = createSlice({
  name: 'companyById',
  initialState,
  reducers: {
    getData: (state, action: PayloadAction<Company>) => {
      console.log(action.payload)
      state.company = action.payload
      state.loading = false
    },
    handleError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    }
  }
})

const companyByIdReducer = companyByIdSlice.reducer
export default companyByIdReducer

export const companyAction = companyByIdSlice.actions
