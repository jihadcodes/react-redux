

import { useSelector } from 'react-redux'

const Header = () => {
    const count = useSelector((state) => state.counter.value)
    console.log(count);
    
  return (
    <div>
      <h1>Header Component</h1>
      <h3>Count : {count}</h3>
    </div>
  )
}

export default Header
