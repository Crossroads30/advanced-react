import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturnsFetchData = () => {
	const [user, setUser] = useState(null)
	const [isFetching, setIsFetching] = useState(true)
	const [isError, setIsError] = useState(false)

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await fetch(url)
				const user = await response.json()
				// console.log(user)
				setUser(user)
			} catch (error) {
				console.log(error)
				setIsError(true)
			}
			setIsFetching(false)
		}
		setTimeout(() => {
			fetchUser()
		}, 4000)
	}, [])

	if (isFetching) {
		return <h3>fetching...</h3>
	}
	if (isError) {
		return <h3>There was an error!</h3>
	}
	return (
		<div>
			<h2>My Solution of Fetch Data</h2>
			<div>
				<img
					src={user.avatar_url}
					alt='user'
					style={{ width: '150px', borderRadius: '30px' }}
				/>
			</div>
			<h2>{user.name}</h2>
			<h4>Works at {user.company}</h4>
			<p>{user.bio}</p>
		</div>
	)
}
export default MultipleReturnsFetchData
