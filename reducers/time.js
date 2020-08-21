import { CITIES_LIST, SAVE_TIME } from '../const'

const INITIAL_STATE = {
	cities: null,
	value: null
}

const timeReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CITIES_LIST:
			return { ...state, cities: action.cities }
		case SAVE_TIME:
			return { ...state, value: action.value }
		default:
			return { ...state }
	}
}

export default timeReducer
