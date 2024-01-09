import { startTransition, useState, useTransition, Suspense, lazy } from 'react'
const SlowComponent = lazy(() => import('./SlowComponent')) // it will not render until we call something to display it

const LatestReact = () => {
	const [text, setText] = useState('')
	const [items, setItems] = useState([])
	const [isPending, startTransition] = useTransition()
	const [show, setShow] = useState(false)

	const handleChange = e => {
		setText(e.target.value)
		// slow down CPU
		startTransition(() => {
			const newItems = Array.from({ length: 5000 }, (_, index) => {
				return (
					<div key={index}>
						<img src='/vite.svg' alt='' />
					</div>
				)
			})
			setItems(newItems)
		})
	}
	return (
		<section>
			<form className='form'>
				<input
					type='text'
					className='form-input'
					value={text}
					onChange={handleChange}
				/>
			</form>
			<h4>Items Below</h4>
			{isPending ? (
				<h4>Loading...</h4>
			) : (
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr 1fr',
						marginTop: '2rem',
					}}
				>
					{items}
				</div>
			)}
			<button onClick={() => setShow(true)} type='button' className='btn'>
				show
			</button>
			{/* while it be pending, 'loading...' displays */}
			{show && (
				<Suspense fallback={<h4>Loading...</h4>}>
					<SlowComponent />
				</Suspense>
			)}
		</section>
	)
}
export default LatestReact
