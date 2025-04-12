import React, {useRef, useState } from 'react'
import { useDrag, useDrop } from 'react-dnd';
import { MdDelete } from 'react-icons/md';

const Card = ({name,profession,image,friends,index,handleDelete,moveCard}) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: 'users',
    hover(item) {
      if (item.index === index) return;
      moveCard(item.index, index);
      item.index = index;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'users',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  const [friend,setFriend] = useState(friends);
 

  return (
    <div ref={ref} onClick={()=>{
      handleCard()
    }} className='relative w-80 lg:w-52 bg-gray-100 rounded-md overflow-hidden'> 
    
      
    <div className='w-full h-36 bg-sky-200 overflow-hidden'>
        <img className='object-cover object-center h-full w-full' src={image} alt="" />
    </div>
    <button className='absolute top-1 right-2 text-xl text-red-600' onClick={()=>{
      handleDelete(index)
    }}><MdDelete/></button>
   
    <div className='w-full p-3'>
        <h3 className='name text-lg font-semibold'>{name}</h3>
        <h5 className='text-xs font-bold'>{profession}</h5>
        <button onClick={()=>{
          setFriend((prev)=>!prev)
         
          }} className={`mt-4 px-3 py-1 text-xs text-white ${friend?'bg-green-500':'bg-blue-500'} font-semibold rounded-md`}>{friend?'Friends':'Add Friend'}</button>
        <button className={`mt-4 ${friend?'bg-red-500':'bg-red-200'} ml-6 px-3 py-1 text-xs text-white font-semibold rounded-md`} onClick={()=>{
          friend&&setFriend((prev)=>!prev)
        }}>UnFriend</button>
    </div>
</div>
  )
}

export default Card
