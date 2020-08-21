import axios from 'axios'

import { CITIES_LIST, SAVE_TIME } from '../const'

export const getCities = (dispatch) => () => new Promise((resolve, reject) => {
	// console.log('---> Getting cities in Europe')	
	axios.get(`https://worldtimeapi.org/api/timezone/Europe`)
		.then((res) => {
			if (dispatch) dispatch({
				type: CITIES_LIST,
				cities: res.data
			})
			resolve(res.data)
		})
		.catch(reject)
})

export const getTime = (dispatch) => (city) => new Promise((resolve, reject) => {
	// console.log('---> Getting time')	
	axios.get(`https://worldtimeapi.org/api/timezone/Europe/${city}`)
		.then((res) => {
			if (dispatch) dispatch({
				type: SAVE_TIME,
				value: res.data.datetime
			})
			resolve(res.data.datetime)
		})
		.catch(reject)
})