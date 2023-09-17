import React , { ReactNode } from 'react'

interface CardProps {
   children: ReactNode;
   width?: number | null;
}

const cards : React.FC<CardProps> = ({ children,width }) => {
  return (
    <div className={`cards bg-[#161b21] relative border-[1.5px] z-99  border-[#2d3139] mt-6 rounded-md ${width === null ? "w-full" : "w-[" + width?.toString() + "px"  + "]"} h-full p-8 shadow-slate-600/50 shadow-2xl hover:scale-105 duration-200 flex flex-col items-center justify-center`}>
      {children}
    </div> 
  )
}

export default cards
