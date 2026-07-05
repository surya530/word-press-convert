import { combineReducers, createStore } from 'redux'
import { languageReducer } from './language'

const rootReducer = combineReducers({
  language: languageReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

export type AppDispatch = typeof store.dispatch
