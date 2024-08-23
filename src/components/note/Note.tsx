import React from 'react'

interface noteInter extends React.HTMLAttributes<HTMLDivElement>{
    title: string,
    note: string,
    date: string,
}

function Note(props:noteInter) {
  return (
    <div className='w-full h-[50%] bg-aura rounded-md flex flex-col justify-between items-center'>
        <div className='w-[calc(100%-5vw)] h-[20%] flex justify-start items-center border-b border-aura text-darkPurple font-black'>{props.title}</div>
        <div className='w-[calc(100%-5vw)] h-[50%] flex justify-start items-start overflow-y-auto text-darkPurple font-medium'>{props.note}</div>
        <div className='w-[calc(100%-5vw)] h-[20%] flex justify-end items-center border-t border-aura text-black text-[0.8rem] font-semibold'>{props.date}</div>
    </div>
  )
}

export default Note