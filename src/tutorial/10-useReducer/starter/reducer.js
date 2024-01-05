import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions'
import { data } from '../../../data'

export const reducer = (state, action) => {
	if (action.type === CLEAR_LIST) {
		return { ...state, people: [] }
	}
	if (action.type === RESET_LIST) {
		return { ...state, people: data }
	}
	if (action.type === REMOVE_ITEM) {
		let newPeople = state.people.filter(
			person => person.id !== action.payload.id // this id goes from action!!!
		)
		return {
			...state,
			people: newPeople,
		}
	}
	// return state // (if there is some error, instead of returning default state, we can show in what type of action something goes wrong)
	throw new Error(`No matching "${action.type}" - action type`)
}
