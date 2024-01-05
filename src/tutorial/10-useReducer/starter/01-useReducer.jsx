import React from 'react'
import { data } from '../../../data'
const ReducerBasics = () => {
	const [people, setPeople] = React.useState(data)
	const [isPeople, setIsPeople] = React.useState(true)

	const removeItem = id => {
		let newPeople = people.filter(person => person.id !== id)
		setPeople(newPeople)
	}

	const resetItem = () => {
		setPeople(data)
	}

	const clearPeople = () => {
		setIsPeople(false)
		setPeople([])
	}

	return (
		<div>
			{people.map(person => {
				const { id, name } = person
				return (
					<div key={id} className='item'>
						<h4>{name}</h4>
						<button onClick={() => removeItem(id)}>remove</button>
					</div>
				)
			})}
			{!isPeople && (
				<button
					className='btn'
					style={{ marginTop: '2rem' }}
					onClick={resetItem}
				>
					reset items
				</button>
			)}
			{isPeople && (
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
