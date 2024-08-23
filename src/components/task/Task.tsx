import React from 'react'
import { Draggable } from '@hello-pangea/dnd'
import {motion} from 'framer-motion'

interface taskInter{
  idT : number,
  titleT : String,
  bodyT : String,
  statusT : number,
  case: string
}

interface tInter extends React.HTMLAttributes<HTMLDivElement>{
  task: taskInter,
  index : number,
  lTasks : taskInter[],
  setTasks : (m: taskInter[]) => void,
  setActualID : (m: number) => void,
  setActTask : (m: number) => void
}

function Task(props: tInter) {

  async function updateTask (){
    props.setActualID(props.task.idT)
    props.setActTask(2);
  }

  return (
    <Draggable draggableId={(props.task.idT).toString()} index={props.index}>
      {(draggableProvider ) => <div {...draggableProvider.draggableProps} ref={draggableProvider.innerRef} {...draggableProvider.dragHandleProps} className='w-full h-[120px] flex flex-col justify-between bg-[rgba(255,255,255,0.3)] mb-[1vh] border-aura border rounded-[6px]'>
        <motion.div className='w-full h-[25%] border-b border-aura text-xs flex justify-center items-center font-bold px-1' initial={{opacity: 0.7, scale:0.95}} animate={{opacity: 1, scale:1}} transition={{ ease: "easeOut", duration: 0.3 }}>
          <div className='w-[10%] h-full flex justify-center items-center'>
            {props.task.statusT === 0 && <div className='w-[40%] h-auto aspect-square rounded-[50%] border-2 border-brown bg-lightBrown hover:bg-brown cursor-pointer transition-all ease-in-out duration-300' onClick={() => updateTask()}></div>}
            {props.task.statusT === 1 && <div className='w-[40%] h-auto aspect-square rounded-[50%] border-2 border-blue bg-lightBlue hover:bg-blue cursor-pointer transition-all ease-in-out duration-300' onClick={() => updateTask()}></div>}
            {props.task.statusT === 2 && <div className='w-[40%] h-auto aspect-square rounded-[50%] border-2 border-violet bg-lightViolet hover:bg-violet cursor-pointer transition-all ease-in-out duration-300' onClick={() => updateTask()}></div>}
            {props.task.statusT === 3 && <div className='w-[40%] h-auto aspect-square rounded-[50%] border-2 border-green bg-lightGreen hover:bg-green cursor-pointer transition-all ease-in-out duration-300' onClick={() => updateTask()}></div>}
          </div>
          <div className='w-[80%] h-full flex justify-center items-center'>{props.task.titleT}</div>
          <div className='w-[10%] h-full flex justify-center items-center'>
            <img src="delete.svg" alt="delete task" className='w-[40%] h-auto cursor-pointer hover:scale-[1.4] transition-all ease-in-out duration-300' onClick={() => props.setTasks(props.lTasks.filter((t) => props.task.idT !== t.idT))}/>
          </div>          
        </motion.div >
        <div className='w-full h-[75%] text-xs overflow-y-auto scrollbar-thin scrollbar-webkit p-1'>{props.task.bodyT}</div>
      </div>}
    </Draggable>
    
  )
}

export default Task