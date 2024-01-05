import React, { useReducer } from 'react'
import { data } from '../../../data'
import { reducer } from './reducer'
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions'

const defaultState = {
	people: data,
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
