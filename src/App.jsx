import React, { useEffect } from 'react'
import { useState } from 'react'
import Card from './Card'


const App = () => {
  const savedUsers = ()=>{
    const users = localStorage.getItem('users')
    return users?JSON.parse(users):
      [
        {
          name: "Alice Johnson",
          profession: "Frontend Developer",
          imgSrc: "https://images.unsplash.com/photo-1708024587407-73445142b5a8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         
        },
        {
          name: "Michael Smith",
          profession: "Backend Developer",
          imgSrc: "https://images.unsplash.com/photo-1696964337990-1a1540c3deb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXN0aGV0aWMlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
          
        },
        {
          name: "Emma Davis",
          profession: "UI/UX Designer",
          imgSrc: "https://images.unsplash.com/photo-1730725531458-ea41ef71db07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFzdGhldGljJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D",
     
        },
        {
          name: "James Wilson",
          profession: "Project Manager",
          imgSrc: "https://images.unsplash.com/photo-1633948760560-ba1da69844e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXN0aGV0aWMlMjB1c2VyfGVufDB8fDB8fHww",
        
        },
        {
          name: "Olivia Brown",
          profession: "QA Engineer",
          imgSrc: "https://images.unsplash.com/photo-1606364043209-04e5e605d5d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXN0aGV0aWMlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Liam Garcia",
          profession: "Mobile App Developer",
          imgSrc: "https://images.unsplash.com/photo-1493136289900-28660d718589?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhdyUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
          
        },
        {
          name: "Sophia Martinez",
          profession: "Data Analyst",
          imgSrc: "https://plus.unsplash.com/premium_photo-1661517614893-3729e3b6fd74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhdyUyMHBvcnRyYWl0fGVufDB8fDB8fHww",

        },
        {
          name: "Benjamin Lee",
          profession: "DevOps Engineer",
          imgSrc: "https://images.unsplash.com/photo-1553782376-b2e8256ab838?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhdyUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
     
        },
        {
          name: "Mia Anderson",
          profession: "Technical Writer",
          imgSrc: "https://images.unsplash.com/photo-1638264495209-c522601bf7de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhdyUyMHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fHww",
   
        },
        {
          name: "Noah Thomas",
          profession: "Security Specialist",
          imgSrc: "https://images.unsplash.com/photo-1672863512959-6f7b696006cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFuJTIwbW9kZWwlMjB1c2VyfGVufDB8fDB8fHww",

        },
        {
          name: "Charlotte Taylor",
          profession: "Machine Learning Engineer",
          imgSrc: "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmF3JTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    
        },
        {
          name: "Elijah Moore",
          profession: "Cloud Architect",
          imgSrc: "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmF3JTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",

        }
      ]
      
  }
  const moveCard = (fromIndex, toIndex) => {
    const updated = [...data];
    const [moved] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, moved);
    setData(updated);
  };

  const [data,setData] = useState(savedUsers) 
  const [addUserForm,setAddUserForm] = useState(false) 
  const [form,setForm] = useState({
    name:'',
    profession:'',
    imgSrc:''
  })
  useEffect(() => {
     localStorage.setItem('users',JSON.stringify(data))
  }, [data])
  const [query,setQuery] = useState('')
  const filterData = data.filter((e)=>{
    return e.name.toLowerCase().includes(query.toLowerCase())
  })

const handleDelete = (id) =>setData((prev)=>prev.filter((_,i)=>{
  return i!==id
}))

const clearAll = ()=>{
  setData([])
  localStorage.clear()

}


  return (
    <div className='overflow-hidden
'>   
      <div className='flex item-center justify-between '> 
        <div>  <button className="mt-4 ml-6 px-4 py-2 text-xs text-white bg-red-500 font-semibold rounded-md" onClick={clearAll}>Clear All</button>    
      <button className="mt-4 ml-6 px-4 py-2 text-xs text-white bg-blue-500 font-semibold rounded-md" onClick={()=>{
          setAddUserForm(!addUserForm)
      }}>Add User</button></div>
      
        <input className='m-6 px-3 py-1 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 border-1 border-blue-600 rounded-lg  ' placeholder=' 🔍 Search User ' type="text" onChange={(e)=>{
       setQuery(e.target.value)
    
      }}  value={query} /> 
      </div>
   
      {addUserForm&&<div>
        {addUserForm && (
  <div>
     
   <form
  onSubmit={(e) => {
    e.preventDefault();
    setData([...data, form]);
    setForm({ name: '', profession: '', imgSrc: '' }); 
    setAddUserForm(false)
  }}
  className="absolute z-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transparent p-6 rounded-2xl shadow-xl w-80 space-y-4"
>
<button className='absolute right-6 top-2' onClick={()=>{
  
      setAddUserForm(false)
     }}>❌</button>
  <h2 className=" text-xl font-semibold text-center">Add New User</h2>

  <input
    required

    type="text"
    placeholder="Name"
    value={form.name}
    onChange={(e) => {
      setForm({ ...form, name: e.target.value });
    }}
    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <input
    required

    type="text"
    placeholder="Profession"
    value={form.profession}
    onChange={(e) => {
      setForm({ ...form, profession: e.target.value });
    }}
    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <input
    type="text"
    required
    placeholder="Image URL"
    value={form.imgSrc}
    onChange={(e) => {
      setForm({ ...form, imgSrc: e.target.value });
    }}
    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
  >
    Add
  </button>
</form>

  </div>
)}

        </div>}
      <div className='flex'>

      <div>
        <h1 className='mt-10 ml-10 bungee-tint-regular  text-md font-bold '>USERS</h1>
       <h2 className='bungee-tint-regular ml-10'>{data.length}</h2>
      </div> 
      </div>
      
      
      
      <div className=' mt-10 ml-10 flex gap-5 flex-wrap'>
        
       {filterData.map((e,i)=>{
        return <Card description={e.description} moveCard={moveCard} handleDelete={handleDelete} index={i} key={i} name={e.name} profession={e.profession} image={e.imgSrc} friends={e.friends} />
       })}
    </div></div>
   
  )
}

export default App