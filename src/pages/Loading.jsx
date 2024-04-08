import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
const Loading = () => {
  const history = useHistory();
    useEffect(() => {
      const timeout = setTimeout(() => {
        history.push('/home'); // Assuming '/home' is the path to your home page
      }, 10000); // 20 seconds in milliseconds
  
      // Cleanup function to clear the timeout in case the component unmounts before the timeout
      return () => clearTimeout(timeout);
    }, [history]);
  return (
    <div className="wrap">
  <div className="loading">
    <div className="bounceball"></div>
    <div className="text">NOW LOADING</div>
  </div>
</div>
  )
}

export default Loading