import { Person } from './Person';
import { people } from "../../../data"

const List = () => {
  return (
		<div>
			<h1>List</h1>
      <ul>
        {people.map(person => {
          console.log(person)
          return (
            <Person key={person.id} {...person}/>
          )
        })}
      </ul>
		</div>
	)
}
export default List