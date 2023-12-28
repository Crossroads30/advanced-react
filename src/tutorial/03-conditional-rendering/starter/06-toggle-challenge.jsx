import { useState } from 'react'

const ToggleChallenge = () => {
	const [content, setContent] = useState(true)
  
  // First:
	// const contentToggle = () => {
	// 	if (content) {
	// 		setContent(false)
	// 		return
	// 	}
	// 	setContent(true)
	// } 

  //Second:
	// const contentToggle = () => {
	// 	content ? setContent(false) : setContent(true)
	// }

	return (
		<div>
			<h2>toggle challenge</h2>
			{content ? <h2>Old Content</h2> : <Content />}
			{/* <button onClick={contentToggle} className='btn'> */}
			<button onClick={() => setContent(!content)} className='btn'> {/*Third*/}
				click to change
			</button>
		</div>
	)
}

const Content = () => {
	return (
		<div>
			<h2>New Content</h2>
		</div>
	)
}

export default ToggleChallenge
