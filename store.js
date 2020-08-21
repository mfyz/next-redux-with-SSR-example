import { createStore, applyMiddleware } from 'redux'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './reducers'

const reducer = (state, action) => {
	if (action.type === HYDRATE) {
		return { ...state, ...action.data }
	}
	return rootReducer(state, action)
}

const initStore = (context) => createStore(reducer, applyMiddleware(
	thunkMiddleware // lets us dispatch() functions in action creators
))

export const wrapper = createWrapper(initStore, {
	// debug: true
})
