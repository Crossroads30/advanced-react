import Item from './Person'
import { memo } from 'react'// not the useMemo!!!

const List = ({ people, removePerson, handleClick }) => {
	return (
		<div>
			{people.map(person => {
				return (
					<Item
						key={person.id}
						{...person}
						removePerson={removePerson}
						handleClick={handleClick}
						id={person.id}
					/>
				)
			})}
		</div>
	)
}
export default memo(List)// not the useMemo!!!
