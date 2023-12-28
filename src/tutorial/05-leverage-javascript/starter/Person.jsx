import React from 'react'
import avatar from '../../../assets/default-avatar.svg'

export function Person({name, nickName='no nickname', images}) {

  // const img = images && images[0] && images[0].small.url

  // const img = images?.[0]?.small?.url || avatar //optional chaining
  
  const img = images?.[0]?.small?.url ?? avatar //optional chaining with nullish coalescing operator

	return (
		<li>
			<h3>{name}</h3>
			<p>Nickname: {nickName}</p>
			<img src={img} alt={name} style={{ width: '100px' }} />
		</li>
	)
}
 