import { useEffect, useState } from 'react'

const CleanupFunction = () => {
	const [value, setValue] = useState(true)

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
		console.log('hello!')
	}, [])
	return <h2>Second</h2>
}

export default CleanupFunction
