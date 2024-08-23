import { Button } from '../../app/globalComponents/Button';
import { ButtonB } from '../../app/globalComponents/ButtonB';
import React, { useState } from 'react'
import {motion} from 'framer-motion'

interface taskInter{
    idT : number,
    titleT : String,
    bodyT : String,
    statusT : number,
    case: string
  }

interface tAInter extends React.HTMLAttributes<HTMLDivElement>{
    idTask: number,
    setLTasks : (m : taskInter[]) => void,
    lTasks : taskInter[],
    setActTasks : (m: number) => void
  }

function UpdateActivitie(props: tAInter) {

  const [title, setTitle] = useState<String>("")
  const [body, setBody] = useState<String>("")

  function updateTask () {
    props.setLTasks(props.lTasks.map((t) => t.idT === props.idTask ? {...t, titleT : title, bodyT : body} : t));
    props.setActTasks(0);
  }
  return (
    <motion.div className="w-full h-[84%] flex items-center justify-center overflow-y-auto scrollbar-thin scrollbar-webkit" initial={{opacity: 0.7, scale:0.95}} animate={{opacity: 1, scale:1}} transition={{ ease: "easeOut", duration: 0.3 }}>
        <div className='max-w-[800px] min-w-[200px] w-1/2 h-[80%] min-h-[300px] bg-[rgba(0,0,0,0.3)] flex flex-col items-center justify-center gap-8 rounded-[6px]'>
            <div className='w-[80%] h-auto flex justify-center items-center text-white font-bold text-xl'>Update Task</div>
            <div className='w-[80%] h-[10%] flex flex-col justify-center items-center gap-2'>
                <label className='w-full h-auto flex justify-start items-center text-white font-bold' htmlFor='tl'>Title:</label>
                <input type="text" className='w-full h-[60%] rounded-[4px] px-2' placeholder='Enter a title' id='tl' onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className='w-[80%] h-[30%] flex flex-col justify-center items-center gap-2'>
                <label className='w-full h-auto flex justify-start items-center text-white font-bold' htmlFor='bd'>Body:</label>
                <textarea className='w-full h-[60%] resize-none rounded-[4px] px-2' placeholder='Enter a description' id='bd' onChange={(e) => setBody(e.target.value)}></textarea>
            </div>
            <div className='w-[80%] h-[10%] flex justify-center items-center gap-2'>
                <Button onClick={() => props.setActTasks(0)}>Close</Button>
                <ButtonB onClick={() => updateTask()}>Update</ButtonB>
            </div>
        </div>
    </motion.div>
  )
}

export default UpdateActivitie