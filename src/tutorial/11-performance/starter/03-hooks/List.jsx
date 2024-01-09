import Item from './Person'
import { memo, useMemo } from 'react'

const List = ({ people, removePerson }) => {
	return (
		<div>
			{people.map(person => {
				return (
					<Item
						key={person.id}
						{...person}
						removePerson={removePerson}
						id={person.id}
					/>
				)
			})}
		</div>
	)
}
export default memo(List)
