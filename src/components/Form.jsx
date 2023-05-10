import React from 'react'
import { useGlobalContext } from '../context'

const Form = () => {
    const {handleChange, createNewItem, isCreating, updateItem, itemId} = useGlobalContext()
  return (
    isCreating ? 
    <form className='w-full' onSubmit={createNewItem}>
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-2xl mb-3'>Submit a todo list </h2>
            <input type="text" placeholder='Title' name='title' className='p-2 rounded my-3 w-[340px] text-gray-900' onChange={handleChange}/>
            <textarea name="description" placeholder='Description' className='p-2 rounded w-[340px] h-[200px] text-gray-900' onChange={handleChange}></textarea>
            <button className='mt-3 bg-[#E06469] text-[#fff] px-4 py-2 rounded'>Create</button>
        </div>
    </form>
    :
    <form className='w-full' onSubmit={() => updateItem(itemId)}>
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-2xl mb-3'>Submit a todo list </h2>
            <input type="text" placeholder='Title' name='title' className='p-2 rounded my-3 w-[340px] text-gray-900' onChange={handleChange}/>
            <textarea name="description" placeholder='Description' className='p-2 rounded w-[340px] h-[200px] text-gray-900' onChange={handleChange}></textarea>
            <button className='mt-3 bg-[#E06469] text-[#fff] px-4 py-2 rounded'>Update</button>
        </div>
    </form>

  )
}

export default Form