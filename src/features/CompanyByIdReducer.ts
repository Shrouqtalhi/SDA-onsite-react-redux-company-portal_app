import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Company } from '../CompanyType'

type InitialState = {
  companyById: null | Company
  loading: boolean
  error: null | string
}

const initialState: InitialState = {
  companyById: null,
  loading: true,
  error: null
}

const companyByIdSlice = createSlice({
  name: 'companyById',
  initialState,
  reducers: {
    getData: (state, action: PayloadAction<Company>) => {
      console.log(action.payload)
      state.companyById = action.payload
      state.loading = false
    },
    handleError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    }
  }
})

const companyByIdReducer = companyByIdSlice.reducer
export default companyByIdReducer

export const companyByIdAction = companyByIdSlice.actions
