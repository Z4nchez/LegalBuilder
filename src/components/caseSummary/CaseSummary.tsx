import { ButtonB } from '../../app/globalComponents/ButtonB';
import { useState } from 'react'
import Note from '../note/Note';
import NewNote from '../newNote/NewNote';
import {motion} from 'framer-motion'

interface noteInter{
  title:string,
  note:string,
  date:string,
  case: string
}
interface propInter extends React.HTMLAttributes<HTMLDivElement>{
  listNotes: noteInter[],
  lAN: noteInter[]
}

function CaseSummary(props:propInter) {

  const [summaryAction, setSummaryAction] = useState<number>(0)
  
  return (
    <motion.div className="w-full h-[90%] bg-grey rounded-lg text-darkPurple" initial={{opacity: 0.7, scale:0.95}} animate={{opacity: 1, scale:1}} transition={{ ease: "easeOut", duration: 0.3 }}>
      <div className="w-full h-[6%] bg-aura flex justify-center items-center font-bold">Summary</div>
      {summaryAction === 0 && <div className="w-full h-[84%] flex justify-center items-center">
        <div className='w-[calc(100%-5vh)] h-[calc(100%-5vh)] flex justify-start items-start flex-wrap gap-5 overflow-y-auto scrollbar-thin scrollbar-webkit'>
          {props.listNotes.map((item) => <Note title={item.title} note={item.note} date={item.date} key={props.listNotes.indexOf(item)}></Note>)}
        </div>
      </div>}
      {summaryAction === 1 && <NewNote allNotes={props.lAN} setActSummary={setSummaryAction} caseID={props.listNotes[0].case}></NewNote>}
      <div className="w-full h-[10%] bg-aura flex justify-end items-center">
        {summaryAction === 0 && <ButtonB style={{ marginRight: '12px' }} onClick={() => setSummaryAction(1)}>New Note</ButtonB>}
      </div>
    </motion.div>
  );
}

export default CaseSummary;
