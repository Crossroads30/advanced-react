import { useState } from 'react'
import { data } from '../../../data'

const UserChallenge = () => {
	const [nameValue, setNameValue] = useState('')
	const [users, setUsers] = useState(data)

	const handleSubmit = e => {
		e.preventDefault()
		// console.log(nameValue)
		if (!nameValue) {
			alert('Please Enter the Name!')
			return
		}
		const newUser = { id: users.length + 1, name: nameValue }
		setUsers([...users, newUser])
		setNameValue('')
	}

  const removeUser = (id) => {
  const filteredUsers = users.filter(user => user.id !== id)
  setUsers(filteredUsers)
  }

	// console.log(users)

	return (
		<div>
			<form className='form' onSubmit={handleSubmit}>
				<h4>Add User</h4>
				<div className='form-row'>
					<label htmlFor='name' className='form-label'>
						name
					</label>
					<input
						type='text'
						className='form-input'
						id='name'
						value={nameValue}
						onChange={e => setNameValue(e.target.value)}
					/>
				</div>

				<button type='submit' className='btn btn-block'>
					submit
				</button>
			</form>
			{/* render users below */}
			<div>
				<h2>Users</h2>
				<ul className='users' style={{ display: 'block', width: '37rem' }}>
					{users.map(user => {
						const { id, name } = user
						return (
							<li
								key={id}
								style={{ marginBottom: '1rem', justifyContent: 'center' }}
							>
								<h3>{name}</h3>
                <button onClick={()=>removeUser(user.id)} className='btn' style={{marginLeft: '2rem'}}>remove user</button>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}
export default UserChallenge
