import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
import companyReducer from './features/companyReducer'
import companyByIdReducer from './features/CompanyByIdReducer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    company: companyReducer,
    companyById: companyByIdReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
