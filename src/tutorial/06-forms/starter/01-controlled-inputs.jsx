import { useState } from 'react'

const ControlledInputs = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')

	const handleChange = e => {
		setName(e.target.value)
		// console.log(e.target.value)
		// console.log(e.target.name)
	}

  const handleSubmit = (e) => {
    e.preventDefault()
    //do something
    console.log(name, email)
  }

	return (
		<form className='form' onSubmit={handleSubmit} >
			<h4>controlled inputs</h4>
			<div className='form-row'>
				<label htmlFor='name' className='form-label'>
					name
				</label>
				<input
					type='text'
					id='name'
					className='form-input'
					value={name}
					onChange={handleChange}
				/>
			</div>
			<div className='form-row'>
				<label htmlFor='email' className='form-label'>
					email
				</label>
				<input
					type='email'
					id='email'
					className='form-input'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<button type='submit' className='btn btn-block'>
				submit
			</button>
		</form>
	)
}
export default ControlledInputs
