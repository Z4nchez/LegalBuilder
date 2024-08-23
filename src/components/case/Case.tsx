import { Button } from '../../app/globalComponents/Button';
import { ButtonB } from '../../app/globalComponents/ButtonB';
import { useState, useContext, useEffect } from 'react';
import Context from '../../context/Context';
import CaseSummary from '../caseSummary/CaseSummary';
import CaseActivities from '../caseActivities/CaseActivities';
import CaseDocumentation from '../caseDocumentation/CaseDocumentation';
import lN from '../../../listNotes.json'
import lA from '../../../listTasks.json'
import {motion} from 'framer-motion'

interface noteInter{
  title:string,
  note:string,
  date:string,
  case: string
}
interface taskInter {
  idT: number;
  titleT: String;
  bodyT: String;
  statusT: number;
  case: string
}
interface caseInter{
  id: number,
  nExp: string,
  category: string,
  state: string
}
interface casePanelInter extends React.HTMLAttributes<HTMLDivElement>{
  aCase : caseInter
}

function Case(props:casePanelInter) {
  const {setPanelMenu, navCase, setNavCase} = useContext(Context);
  const [lNotes, setLNotes] = useState<noteInter[]>(lN);
  const [lActi, setLActi] = useState<taskInter[]>(lA)
  const [listNotes, setListNotes] = useState<noteInter[]>(lNotes.filter((n) => n.case === props.aCase.nExp))
  const [listTasks, setListTasks] = useState<taskInter[]>(lActi.filter((act) => act.case === props.aCase.nExp))

  useEffect(() => {setListNotes(lNotes.filter((n) => n.case === props.aCase.nExp))}, [lNotes])
  useEffect(() => {setListTasks(lActi.filter((act) => act.case === props.aCase.nExp))}, [lActi])
  
  return (
    <motion.div className="w-full h-full flex flex-col justify-end items-center" initial={{opacity: 0.7, scale:0.95}} animate={{opacity: 1, scale:1}} transition={{ ease: "easeOut", duration: 0.3 }}>
      <div className="w-[calc(100%-10vh)] h-[calc(100%-10vh)] flex flex-col justify-between items-center">
        <div className="w-full h-[10%] flex justify-start items-center gap-4">
          <Button onClick={() => setNavCase(0)}>Summary</Button>
          <Button onClick={() => setNavCase(1)}>Activities</Button>
          <Button onClick={() => setNavCase(2)}>Documentation</Button>
          <ButtonB onClick={() => {setNavCase(0); setPanelMenu(0)}}>Close</ButtonB>
        </div>
        {navCase === 0 && <CaseSummary listNotes={listNotes} lAN={lNotes}></CaseSummary>}
        {navCase === 1 && <CaseActivities lA={listTasks} lAA={lActi}></CaseActivities>}
        {navCase === 2 && <CaseDocumentation></CaseDocumentation>}
      </div>
      <div className='w-full h-[5vh] flex justify-center items-center font-bold text-yellow-500'>{props.aCase.nExp}</div>
    </motion.div>
  );
}

export default Case;
