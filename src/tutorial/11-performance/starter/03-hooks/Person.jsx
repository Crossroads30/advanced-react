const Person = ({ name, removePerson, id, handleClick }) => {
	return (
		<div>
			<h4>{name}</h4>
			<button onClick={() => removePerson(id)} type='button'>
				remove
			</button>
			<button onClick={() => handleClick(id)} type='button'>
				remove with useCallback
			</button>
		</div>
	)
}
export default Person
