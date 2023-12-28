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
				if (!response.ok) {
					// case for 'fetch' to handle '400th' & '500th' errors!
					setIsError(true)
					setIsFetching(false)
					return
				}
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
	const { avatar_url, name, company, bio } = user // destructuring must be after any condition, if it before, destructured obj will be undefined!
	return (
		<div>
			<h2>My Solution of Fetch Data</h2>
			<div>
				<img
					src={avatar_url}
					alt='user'
					style={{ width: '150px', borderRadius: '30px' }}
				/>
			</div>
			<h2>{name}</h2>
			<h4>Works at {company}</h4>
			<p>{bio}</p>
		</div>
	)
}
export default MultipleReturnsFetchData
