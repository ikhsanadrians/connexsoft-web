import React , { ReactNode } from 'react'

interface CardProps {
   children: ReactNode;
}

const cards : React.FC<CardProps> = ({ children }) => {
  return (
    <div className="cards bg-[#161b21] relative border-[1.5px] border-[#2d3139] mt-6 rounded-md w-full h-full p-8 shadow-slate-600/50 shadow-2xl hover:scale-105 duration-200">
      {children}
    </div> 
  )
}

export default cards
