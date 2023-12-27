import { useState } from 'react'

const UseStateObject = () => {
	const [person, setPerson] = useState({
		name: 'Peter',
		age: 27,
		joy: 'Computers',
	})
	// const [name, setName] = useState('Peter')
	// const [age, setAge] = useState(27)
	// const [joy, setJoy] = useState('Computers')

	// const obj = {
	// 	name: 'John',
	// 	age: 23,
	// 	joy: 'Cars',
	// }
	// const changeUser = () => {
	// 	setName(obj.name)
	// 	setAge(obj.age)
	// 	setJoy(obj.joy)
	// }
	const changeUser = () => {
		// setPerson({
		// 	name: 'John',
		// 	age: 23,
		// 	joy: 'Cars',
		// })
    setPerson({...person, name: 'Robert'})// we have changed only the name!
	}

	return (
		<>
			<h2>useState object example</h2>
			<h4>{person.name}</h4>
			<h4>{person.age}</h4>
			<h4>{person.joy}</h4>
			<button onClick={changeUser} className='btn' type='button'>
				Change person
			</button>
		</>
	)
}

export default UseStateObject
