import { useState } from 'react'

const UserChallenge = () => {
	const [user, setUser] = useState(null)

	const login = () => {
		setUser({
			name: 'James',
		})
	}
	const logout = () => {
		setUser(null)
	}
	return (
		<div>
			<h2>user challenge</h2>
			{user ? (
				<div>
					<h4>hello there user {user.name}</h4>
          <button onClick={logout} className='btn'>logout</button>
				</div>
			) : (
				<div>
					<h4>Please login</h4>
          <button onClick={login} className='btn'>login</button>
				</div>
			)}
		</div>
	) 
}

export default UserChallenge
