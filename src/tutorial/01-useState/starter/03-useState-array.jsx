import React, { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
	// const [users, setUsers] = React.useState(data)
	const [users, setUsers] = useState(data)

	const removeUsers = () => {
		setUsers([])
	}
	const removeUser = id => {
		// const newUsers = users.filter(user => user.id !== id)
		// setUsers(newUsers)
		setUsers(users.filter(user => user.id !== id))
	}

	return (
		<div>
			<ul className='users'>
				{users.map(user => {
					return (
						<li className='user-container' key={user.id}>
							<h5>{user.name}</h5>
							<button
								onClick={() => removeUser(user.id)}
								type='button'
								className='btn'
							>
								remove user
							</button>
						</li>
					)
				})}
			</ul>
			<button type='button' onClick={removeUsers} className='btn'>
				Clear list
			</button>
		</div>
	)
}

export default UseStateArray
