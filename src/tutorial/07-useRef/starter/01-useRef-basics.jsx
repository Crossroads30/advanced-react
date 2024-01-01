import { useEffect, useRef, useState } from 'react'

const UseRefBasics = () => {
	const [value, setValue] = useState(0)
	const refContainer = useRef(null)
	const isMounted = useRef(false)
	// console.log(refContainer)

	useEffect(() => {
		// we can use useRef to focus the input
		refContainer.current.focus()
	})

	//to use this solution let avoid running functionality that inside with initial render
	useEffect(() => {
		if (!isMounted.current) {
			// we should check not 'isMounted'(this is the object), but isMounted.current!!!(this is the value!!!)
			isMounted.current = true
			return
		}
		console.log('rerender')
	}, [value])

	const handleSubmit = e => {
		e.preventDefault()
		const type = refContainer.current.value
		// console.log(type)
	}

	return (
		<div>
			<form className='form' onSubmit={handleSubmit}>
				<div className='form-row'>
					<label htmlFor='name' className='form-label'>
						Name
					</label>
					<input
						type='text'
						id='name'
						className='form-input'
						ref={refContainer}
					/>
				</div>
				<button type='submit' className='btn btn-block'>
					submit
				</button>
			</form>
			<h1>value : {value}</h1>
			<button onClick={() => setValue(value + 1)} className='btn'>
				increase
			</button>
		</div>
	)
}

export default UseRefBasics
