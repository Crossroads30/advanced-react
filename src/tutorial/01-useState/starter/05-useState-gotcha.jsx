import { useState } from 'react'

const UseStateGotcha = () => {
	const [value, setValue] = useState(0)

	// const increment = () => {
	// 	setValue(currentState => {
	// 		const newState = currentState + 1
	// 		return newState
	// 	})
  //   console.log(value)
	// }
	const increment = () => {
    setTimeout(() => {
      setValue((prev) => prev + 1) //we pass the previous state as the papam to the func inside 'setWhatever' of useState function & then return this new state(if this not in one line, we must use 'return' keyword!!!)
    }, 3000)
	}
	console.log(value)


	return (
		<>
			<h1>{value}</h1>
			<button onClick={increment} type='button' className='btn'>
				increase
			</button>
		</>
	)
}

export default UseStateGotcha
