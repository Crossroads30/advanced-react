import { useState } from 'react'
import { data } from '../../../../data'
import List from './List'
const LowerState = () => {
	const [people, setPeople] = useState(data)
	const [count, setCount] = useState(0)

	const removePerson = id => {
		const newPeople = people.filter(person => person.id !== id)
		setPeople(newPeople)
    // this function will be created from scratch & call rerender every time when it be invoke!!!!
	}

	return (
		<section>
			<button
				className='btn'
				onClick={() => setCount(count + 1)}
				style={{ marginBottom: '1rem' }}
			>
				count {count}
			</button>
			<List people={people} removePerson={removePerson} />
		</section>
	)
}
export default LowerState
