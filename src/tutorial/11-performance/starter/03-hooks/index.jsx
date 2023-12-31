import { useState, useCallback, useMemo } from 'react'
import { data } from '../../../../data'
import List from './List'
import slowFunction from './slowFunction'
const LowerState = () => {
	const [people, setPeople] = useState(data)
	const [count, setCount] = useState(0)

	const value = useMemo(() => slowFunction(), [])
	
	console.log(value)

	// const removePerson = id => {
	// 	const newPeople = people.filter(person => person.id !== id)
	// 	setPeople(newPeople)
  //   // without useCallback hook, this function will be created from scratch & call rerender every time when it be invoke!!!!
	// }

   const handleClick = useCallback(
			id => {
				const newPeople = people.filter(person => person.id !== id)
				setPeople(newPeople)
			},
			[people]
		)

	return (
		<section>
			<button
				className='btn'
				onClick={() => setCount(count + 1)}
				style={{ marginBottom: '1rem' }}
			>
				count {count}
			</button>
			<List
				people={people}
				// removePerson={removePerson}
				handleClick={handleClick}
			/>
		</section>
	)
}
export default LowerState
