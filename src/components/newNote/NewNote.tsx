import { Button } from '../../app/globalComponents/Button';
import { ButtonB } from '../../app/globalComponents/ButtonB';
import React, {useState, useContext} from 'react'
import Context from '../../context/Context'
import {motion} from 'framer-motion'

interface noteInter{
    title:string,
    note:string,
    date:string,
    case: string
  }
interface propInter extends React.HTMLAttributes<HTMLDivElement>{
    allNotes: noteInter[],
    setActSummary: (m: number) => void,
    caseID: string
}

function NewNote(props: propInter) {

  const {setPanelMenu} = useContext(Context);
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("")

  const options:Object = { 
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  async function createNote (){
    let newN = {
        title: title,
        note: body,
        date: new Date().toLocaleDateString("es-ES", options),
        case: props.caseID
    }
    props.allNotes.push(newN);
    props.setActSummary(0);
    await setPanelMenu(0);
    await setPanelMenu(3); 
  }

  return (
    <motion.div className="w-full h-[84%] flex items-center justify-center overflow-y-auto scrollbar-thin scrollbar-webkit" initial={{opacity: 0.7, scale:0.95}} animate={{opacity: 1, scale:1}} transition={{ ease: "easeOut", duration: 0.3 }}>
        <div className='max-w-[800px] min-w-[200px] w-1/2 h-[80%] min-h-[300px] bg-[rgba(255,255,255,0.3)] flex flex-col items-center justify-center gap-8 rounded-[6px]'>
            <div className='w-[80%] h-auto flex justify-center items-center font-bold text-xl'>New Note</div>
            <div className='w-[80%] h-[10%] flex flex-col justify-center items-center gap-2'>
                <label className='w-full h-auto flex justify-start items-center font-bold' htmlFor='tl'>Title:</label>
                <input type="text" className='w-full h-[60%] rounded-[4px] px-2' placeholder='Enter a title' id='tl' onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className='w-[80%] h-[30%] flex flex-col justify-center items-center gap-2'>
                <label className='w-full h-auto flex justify-start items-center font-bold' htmlFor='bd'>Body:</label>
                <textarea className='w-full h-[60%] resize-none rounded-[4px] px-2' placeholder='Enter a description' id='bd' onChange={(e) => setBody(e.target.value)}></textarea>
            </div>
            <div className='w-[80%] h-[10%] flex justify-center items-center gap-2'>
                <Button onClick={() => props.setActSummary(0)}>Close</Button>
                <ButtonB onClick={() => createNote()}>Create</ButtonB>
            </div>
        </div>
    </motion.div>
  )
}

export default NewNote