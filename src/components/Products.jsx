import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const Products = () => {
  
  // const {data,isLoading,isError,error}=useQuery({queryKey:["pizzas"],queryFn:products})
  const data = [
    {
      name: "hello",
      img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1hZxkl7aLUy170veFH3FI9uDbkqoSBjMY2A&s",
      id: 1,
    },
    {
      name: "there",
      img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1hZxkl7aLUy170veFH3FI9uDbkqoSBjMY2A&s",
      id: 2,
    }
  ]
  return (
    <div className='flex gap-10 flex-wrap m-5'>
      {data.map((pizza) => (
        <div className='rounded-lg shadow-md p-3 flex flex-col gap-5' key={pizza.id}>
          <img src={pizza.img_url} alt={pizza.name} />
          <div>
            <h3 className='text-xl my-3 font-semibold font-mono'>{pizza.name}</h3>
            <NavLink className="bg-sky-500 p-2 rounded-lg cursor-pointer font-mono text-lg" to={`/product/${pizza.id}`}>Details</NavLink>
          </div>
        </div>
      ))}
    </div>
  )
}


