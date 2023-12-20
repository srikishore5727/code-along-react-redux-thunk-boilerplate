import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { dataFetching, fetchDataFunction } from './redux/Action'

function App(){
  const data = useSelector((store) => store.data)
  console.log(data)

  const dispatch = useDispatch();

  const getData = () => {
    // axios.get("https://jsonplaceholder.typicode.com/users")
    // .then((res)=>(console.log(res.data),dispatch(fetchDataFunction(res.data))))
    dispatch(dataFetching())
  }


  return (
    <>
      {data.map((el) => {
        return <div key={el.id}>
          <p>{el.name}</p>
          <p>{el.email}</p>
          <hr />
        </div>
      })}
      <button onClick={getData}>GetData</button>
    </>
  )
}

export default App
