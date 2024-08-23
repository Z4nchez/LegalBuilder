import { Button } from '../../app/globalComponents/Button';
import { InputText } from '../../app/globalComponents/InputText';
import { ItemIcon } from '../../app/globalComponents/ItemIcon';
import { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import styles from './login.module.css'
import { motion } from 'framer-motion'

function Login() {
  const { setMenuApp, setOnUser } = useContext(Context);
  const [email, setEmail] = useState<String>("")
  const [password, setPassword] = useState<String>("")

  function getUserData () {
    /*axiosInterceptor.post("/login", {email, password}, {
      headers:{
        
      }
    })
    .then(res => console.log(res.data));

    axiosInterceptor.post("/allsesions", {email})
    .then(res => console.log(res.data));*/
  }

  return (
    <motion.div className="bg-lightPurple flex justify-center items-center w-full h-[70%] min-h-[260px] md:w-1/2" initial={{opacity: 0.7, scale:0.95}} animate={{opacity: 1, scale:1}} transition={{ ease: "easeOut", duration: 0.3 }}>
      <div className={styles.barModule1}>
        <div className={styles.barCont}>
          <img src="barra2.svg" alt="" className={styles.bar}/>
        </div>
      </div>
      <motion.div className="flex flex-col justify-center w-4/5 h-full" initial={{opacity: 0.5, marginLeft: "40px"}} animate={{opacity: 1, marginLeft: "0px"}} transition={{ease: "easeOut", duration: 0.3}}>
        <div className="flex justify-center items-center h-[10%] w-full">
          <h2 className="text-yellow font-marce text-base sm:text-2xl">
            Login
          </h2>
        </div>
        <div className="flex flex-col justify-start items-center h-[70%] w-full">
          <div className="flex justify-center gap-4 items-center h-1/6 w-[95%]">
            <label htmlFor="lEmail">
              <ItemIcon src="gm.svg"></ItemIcon>
            </label>
            <div className='w-[60%] h-auto'>
              <InputText placeholder="Email" onChange={(e) => setEmail(e.target.value)} id='lEmail'></InputText>
            </div>
          </div>
          <div className="flex justify-center gap-4 items-center h-1/6 w-[95%]">
            <label htmlFor="lPass">
              <ItemIcon src="pass.svg"></ItemIcon>
            </label>
            <div className='w-[60%] h-auto'>
              <InputText placeholder="Password" onChange={(e) => setPassword(e.target.value)} type='password' id='lPass'></InputText>
            </div> 
          </div>
        </div>
        <div className="flex justify-center items-center w-full h-[10%]">
          <div className="flex justify-center items-center gap-4 w-full h-full sm:justify-end sm:w-auto">
            <Button onClick={() => setMenuApp(0)}>Cancel</Button>
            <Button
              onClick={() => {
                setMenuApp(0);
                setOnUser(true);
                getUserData();
              }}
            >
              Enter
            </Button>
          </div>
        </div>
      </motion.div>
      <div className={styles.barModule2}>
        <div className={styles.barCont}>
          <img src="barra2.svg" alt="" className={styles.bar}/>
        </div>
      </div>
    </motion.div>
  );
}

export default Login;
