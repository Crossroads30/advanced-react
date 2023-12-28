import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const[isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  if(isLoading) {
    return <h3>Loading...</h3>
  }
  return <h2>Multiple Returns Basics</h2>;
};
export default MultipleReturnsBasics;
