import { useContext, useState } from "react"
import Context from "../../context/Context"
import CasesPanel from "../casesPanel/CasesPanel";
import NewCasePanel from "../newCasePanel/NewCasePanel";
import TeamPanel from "../teamPanel/TeamPanel";
import Case from "../case/Case";
import { motion } from 'framer-motion'

function UserPanel() {

  interface caseInter{
    id: number,
    nExp: string,
    category: string,
    state: string
  }

  const {setOnUser, panelMenu} = useContext(Context);

  const [actualCase, setActualCase] = useState<caseInter>({id:-1, nExp:"", category:"", state:""})

  return (
    <motion.div className="flex flex-col items-center text-center w-full h-[80vh] justify-center" initial={{opacity: 0.7, scale:0.95}} animate={{opacity: 1, scale:1}} transition={{ ease: "easeOut", duration: 0.3 }}>
        {panelMenu === 0 && <CasesPanel setACase={setActualCase}></CasesPanel>}
        {panelMenu === 1 && <NewCasePanel></NewCasePanel>}
        {panelMenu === 2 && <TeamPanel></TeamPanel>}
        {panelMenu === 3 && <Case aCase={actualCase}></Case>}
    </motion.div>
  )
}

export default UserPanel