import React from 'react'
import { Outlet } from "react-router-dom";
import  { ComplexNavbar } from '../component/navbar';


export const LayoutHome = () => {
  return (
    <div className='pt-16 p-6'>
      <ComplexNavbar />
        <Outlet  />
    </div>
  )
}
