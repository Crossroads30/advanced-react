const ErrorExample = () => {

  let count = 0
  const handlerClick = () => {
      count += 1
      console.log(count)
  }

  return (
		<>
			<h2>useState error example</h2>
			<button className='btn' onClick={handlerClick}>
				{count}
			</button>
		</>
	) 
};

export default ErrorExample;
