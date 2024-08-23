import { useState } from 'react';
import Form1 from '../Form/Form1';
import Form2 from '../Form/Form2';
import Form3 from '../Form/Form3';
import styles from './register.module.css'
import {motion} from 'framer-motion'

export default function Register() {
  const [steps, setSteps] = useState(1);
  const [data, setData] = useState({} as any);

  return (
    <motion.div className="card bg-lightPurple w-full h-[70%] min-h-[260px] lg:w-1/2 flex md:w-1/2" initial={{opacity: 0.7, scale:0.95}} animate={{opacity: 1, scale:1}} transition={{ ease: "easeOut", duration: 0.3 }}>
      
      <div className={styles.barModule1}>
        <div className={styles.barCont}>
          <img src="barra2.svg" alt="" className={styles.bar}/>
        </div>
      </div>

      <div className="w-[80%] h-full flex flex-col justify-center items-center">
        <h2 className="font-marce text-yellow text-2xl flex justify-center items-center w-full h-[10%]">
          Register
        </h2>

        {
          steps === 1 && <Form1 setSteps={setSteps} setData={setData} />
        }

        {
          steps === 2 && <Form2 setSteps={setSteps} setData={ setData } />
        }

        {
          steps === 3 && <Form3 setSteps={setSteps} setData={setData} data={ data} />
        
        }
      </div>

      <div className={styles.barModule2}>
        <div className={styles.barCont}>
          <img src="barra2.svg" alt="" className={styles.bar}/>
        </div>
      </div>
    </motion.div>
  );
}
