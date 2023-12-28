import { useState } from 'react'

const ShortCircuitOverview = () => {
	const [falsy, setFalsy] = useState('')
	const [truthy, setTruthy] = useState('truthy')

  const codeExample = falsy || 'Hello!'

    return (
			<div>
				<h4>Falsy OR: {falsy || 'Hello!'}</h4>
				<h4>Falsy AND: {falsy && 'Hello!'}</h4>
				<h4>Truthy OR: {truthy || 'Hello!'}</h4>
				<h4>Truthy OR: {truthy && 'Hello!'}</h4>
        {codeExample}
			</div>
		)

}
export default ShortCircuitOverview
