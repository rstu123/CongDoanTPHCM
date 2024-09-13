/* eslint-disable prettier/prettier */
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { authorizeAction } from './action/authorizeAction'
import { selfAction } from './action/selfAction'

const rootReducer = combineReducers({
  authorizeAction: authorizeAction.reducer,
  selfAction: selfAction.reducer,
})

export const store = configureStore({
  reducer: rootReducer
})
