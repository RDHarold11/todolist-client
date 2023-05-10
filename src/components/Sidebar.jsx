import React from 'react'
import Form from './Form'
import { useGlobalContext } from '../context'
import {AiOutlineCloseCircle} from "react-icons/ai"

const Sidebar = () => {
  const {toggleSidebar, closeSidebar} = useGlobalContext()
  return (
    <aside className={toggleSidebar ? ' bg-[#408E91] text-white fixed top-0 right-0 md:w-[400px] w-full h-screen flex items-center justify-center transition-all duration-100 ease-in' : "w-[0]"}>
      {
      toggleSidebar && 
      <div className='flex flex-col'>
          <button className='place-self-end mb-10' onClick={closeSidebar}><AiOutlineCloseCircle size={30}></AiOutlineCloseCircle></button>
          <Form></Form>   
      </div>
      }
    </aside>
  )
}

export default Sidebar