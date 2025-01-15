import React from 'react'

export const SingleProducts = () => {
  const examplePizza = {
    "id": 4,
    "name": "Baconos",
    "img_url": "https://i.ibb.co/Px966Tj/pexels-kei-photo-2741457.jpg"
  }
  const sizes = {
    "msg": [
      {
        "id": 4,
        "product_id": 4,
        "size": "22",
        "price": "1250"
      },
      {
        "id": 5,
        "product_id": 4,
        "size": "30",
        "price": "1550"
      },
      {
        "id": 6,
        "product_id": 4,
        "size": "45",
        "price": "2950"
      }
    ]
  }

  return (
    <div>
      <button popovertarget="mypopover">More Info</button>
      <div className='bg-slate-700 text-white' id="mypopover" popover="true">
        <img src={examplePizza.img_url} alt={examplePizza.name} />
        <h3>{examplePizza.name}</h3>
        <ul>
          <li>meret: {sizes.msg[0].size} - ar:{sizes.msg[0].price}Ft</li>
          <li>meret: {sizes.msg[1].size} - ar:{sizes.msg[1].price}Ft</li>
          <li>meret: {sizes.msg[2].size} - ar:{sizes.msg[2].price}Ft</li>
        </ul>
      </div>
    </div>
  )
}


