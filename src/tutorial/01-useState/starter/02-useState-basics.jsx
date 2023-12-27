import { useState } from "react";

const UseStateBasics = () => {
// console.log(useState())
// const value = useState('React')[0]
// const func = useState('React')[1]
// console.log(value)
// console.log(func)

const [count, setCount] = useState(0)

const handleClick = () => {
  setCount(count + 1)
}

  return (
		<div>
			<h4>you clicked {count} times</h4>
			<button className='btn' type="button" onClick={handleClick}>
				click me
			</button>
		</div>
	) 
};

export default UseStateBasics;
