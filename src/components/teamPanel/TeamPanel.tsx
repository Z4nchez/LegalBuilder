import Profile from '../profile/Profile';
import lProfiles from "../../../listProfiles.json"
import {motion} from 'framer-motion'

interface profilesInter{
  name : string,
  surename : string,
  category : string,
  nCases : Number,
  active : Boolean,
  address : string,
  email : string,
  phone : string
}

function TeamPanel() {

  return (
    <motion.div className="w-[calc(100%-10vh)] h-[calc(100%-10vh)] flex justify-center items-center bg-lightPurple rounded-lg" initial={{opacity: 0.7, scale:0.95}} animate={{opacity: 1, scale:1}} transition={{ ease: "easeOut", duration: 0.3 }}>
      <div className='w-[calc(100%-5vh)] h-[calc(100%-5vh)] overflow-y-auto overflow-x-hidden flex flex-col justify-start items-center scrollbar-thin scrollbar-webkit gap-[10vh]'>
        {lProfiles.map((profile) => <Profile key={lProfiles.indexOf(profile)} pr={profile}></Profile>)}
      </div>
    </motion.div>
  );
}

export default TeamPanel;
