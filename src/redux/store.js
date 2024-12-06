import { configureStore } from '@reduxjs/toolkit'
import { usersReducer } from './features/userSlice'
import { toysApi } from './features/toysApi'

export const store = configureStore({
   reducer: {
      usersReducer,
      [toysApi.reducerPath]: toysApi.reducer,
   },

   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(toysApi.middleware),
})