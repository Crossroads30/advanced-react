import React, { useReducer } from 'react'
import { data } from '../../../data'

const defaultState = {
	people: data,
}

const CLEAR_LIST = 'CLEAR_LIST'
const RESET_LIST = 'RESET_LIST'
const REMOVE_ITEM = 'REMOVE_ITEM'

const reducer = (state, action) => {
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

const ReducerBasics = () => {
	const [state, dispatch] = useReducer(reducer, defaultState)

	const removeItem = id => {
		dispatch({ type: REMOVE_ITEM, payload: { id } })
	}

	const resetItem = () => {
		dispatch({ type: RESET_LIST })
	}

	const clearPeople = () => {
		dispatch({ type: CLEAR_LIST })
	}

	return (
		<div>
			{state.people.map(person => {
				const { id, name } = person
				return (
					<div key={id} className='item'>
						<h4>{name}</h4>
						<button onClick={() => removeItem(id)}>remove</button>
					</div>
				)
			})}
			{state.people.length < 1 ? (
				<button
					className='btn'
					style={{ marginTop: '2rem' }}
					onClick={resetItem}
				>
					reset items
				</button>
			) : (
				<button
					className='btn'
					style={{ marginTop: '2rem' }}
					onClick={clearPeople}
				>
					clear items
				</button>
			)}
		</div>
	)
}

export default ReducerBasics
