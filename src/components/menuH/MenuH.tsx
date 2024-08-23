import { useContext } from 'react';
import Context from '../../context/Context';
import { LinkMenu } from "../../app/globalComponents/LinkMenu";
import { motion } from 'framer-motion'

function MenuH() {
  const { onUser, setMenuApp, setPanelMenu, setOnUser, setMenuH } = useContext(Context);

  return (
    <motion.div className="w-full h-[100vh] bg-darkPurple fixed top-0 left-0 flex justify-center items-center z-40" initial={{opacity: 0.7, scale:0.95}} animate={{opacity: 1, scale:1}} transition={{ ease: "easeOut", duration: 0.3 }}>
      {onUser === false && (
        <div className="flex flex-col items-center justify-center gap-10">
          <LinkMenu onClick={() => {setMenuApp(0); setMenuH(false)}}>Home</LinkMenu>
          <LinkMenu onClick={() => {setMenuApp(1); setMenuH(false)}}>Login</LinkMenu>
          <LinkMenu onClick={() => {setMenuApp(2); setMenuH(false)}}>Register</LinkMenu>
        </div>
      )}
      {onUser === true && (
        <div className="flex flex-col items-center justify-center gap-10">
          <LinkMenu onClick={() => {setPanelMenu(0); setMenuH(false)}}>Cases</LinkMenu>
          <LinkMenu onClick={() => {setPanelMenu(1); setMenuH(false)}}>+ New Case</LinkMenu>
          <LinkMenu onClick={() => {setPanelMenu(2); setMenuH(false)}}>Team</LinkMenu>
          <LinkMenu>Profile</LinkMenu>
          <LinkMenu
            onClick={() => {
              setPanelMenu(0);
              setOnUser(false);
              setMenuH(false);
            }}
          >
            Log out
          </LinkMenu>
        </div>
      )}
    </motion.div>
  );
}

export default MenuH;
