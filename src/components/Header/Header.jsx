
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../../features/counterSlice'

const Header = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    
  return (
    <>
    <div className='p-20'>
      <h1>Header Component</h1>
      <h3>Count : {count}</h3>
      <button className='mr-4 py-2 px-3 rounded-3xl bg-amber-700 text-white' onClick={() => dispatch(increment())}>Increment</button>
      <button className='mr-4 py-2 px-3 rounded-3xl bg-amber-700 text-white'  onClick={() => dispatch(decrement())}>Decrement</button>
      <button className='mr-4 py-2 px-3 rounded-3xl bg-amber-700 text-white'  onClick={() => dispatch(reset())}>Reset</button>
      
    </div>
    </>
  )
}

export default Header
