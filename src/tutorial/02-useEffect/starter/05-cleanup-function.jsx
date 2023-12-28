import { useEffect, useState } from 'react'

const CleanupFunction = () => {
	const [value, setValue] = useState(false)

	console.log('render')
	const handleClick = () => {
		setValue(!value)
	}
	return (
		<div>
			<button onClick={handleClick} className='btn'>
				click me
			</button>
			{value && <SecondComponent />}
		</div>
	)
}

const SecondComponent = () => {
	useEffect(() => {
		// console.log('hello!')
		// const interval = setInterval(() => {
		//   console.log('interval')
		// }, 1000)
		const someFunc = () => {
			//some logic
		}
		window.addEventListener('scroll', someFunc)
		return () => window.addEventListener('scroll', someFunc)
		// return () => clearInterval(interval)
	}, [])
	return <h2>Second</h2>
}

export default CleanupFunction
