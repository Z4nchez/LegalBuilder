import React from 'react';
import {motion} from 'framer-motion'

import styles from './MainContent.module.css'

const MainContent: React.FC = () => {
  return (
    <motion.div className="flex flex-col items-center justify-center text-center gap-4 h-[90%] w-auto" initial={{opacity: 0.7, scale:0.95}} animate={{opacity: 1, scale:1}} transition={{ ease: "easeOut", duration: 0.3 }}>
      <div className={styles.logoCont}>
        <img src="circulo.svg" alt="Legal Builder Logo" className={styles.circulo} />
        <img src="logo.webp" alt="Legal Builder Logo" className={styles.logo}></img>
      </div>
      <h2 className="text-4xl mb-2 font-marce text-yellow">Legal Builder</h2>
     

      <p className="text-xl text-grey font-marce w-[280px] md:w-[480px]">Builder and organizer for Law Firm</p>
    </motion.div>
  );
};

export default MainContent;

