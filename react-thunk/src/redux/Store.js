import {applyMiddleware, createStore} from 'redux'
import { reducer } from './Reducer'
import {thunk} from "redux-thunk"
export const Store = createStore(reducer,applyMiddleware(thunk))