// import React, { useContext } from 'react'
import { NavbarContext, useAppContext } from './Navbar'

export function UserContainer({ }) {
	// const {user, logout} = useContext(NavbarContext)
		const { user, logout } = useAppContext() // we use a custom hook instead of using useContext 

	return (
		<div className='user-container'>
			{user ? (
				<>
					<p>
						Hello, there, {user?.name?.toUpperCase() /* optional chaining */}
					</p>
					<button onClick={logout} className='btn'>
						logout
					</button>
				</>
			) : (
				<p>please login</p>
			)}
		</div>
	)
}

export default UserContainer
