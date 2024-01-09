import { useEffect, useState, useCallback } from 'react'

const url = 'https://api.github.com/users'

const FetchDataWithUseCallback = () => {
	const [users, setUsers] = useState([])

	const fetchUsers = useCallback(async () => {
		try {
			const response = await fetch(url)
			const users = await response.json()
			setUsers(users)
		} catch (error) {
			console.log(error)
		}
	}, [])

	useEffect(() => {
		fetchUsers()
	}, [fetchUsers])

	return (
		<section>
			<h3>fetch data example</h3>
			<ul className='users'>
				{users.map(user => {
					const { id, avatar_url, login, html_url } = user
					return (
						<li key={id}>
							<img src={avatar_url} alt={login} />
							<div>
								<h5>{login}</h5>
								<a href={html_url}>profile</a>
							</div>
						</li>
					)
				})}
			</ul>
		</section>
	)
}
export default FetchDataWithUseCallback
