import { data } from '../../../data'

const UseStateArray = () => {
	return (
		<div>
			<ul className='users'>
				{data.map(item => {
					return (
						<li className='user-container' key={item.id}>
							<h5>{item.name}</h5>
							<button className='btn'>remove user</button>
						</li>
					)
				})}
			</ul>
			<button className='btn'>Clear list</button>
		</div>
	)
}

export default UseStateArray
