import { ItemIcon } from "../app/globalComponents/ItemIcon";
import { LinkMenu } from "../app/globalComponents/LinkMenu";
import { useContext } from "react";
import { Context } from '../context/Context'


const Header = () => {

    const {setMenuApp, onUser, setPanelMenu, setOnUser, setMenuH, menuH} = useContext(Context);

    return (
        <header className="flex items-center justify-between bg-darkPurple text-yellow-500 h-[10vh] ml-6 mr-6 z-50">
            <div className="flex items-center">
                <img src="/src/images_Home/logo_con_palitos.svg" alt="Legal Builder Logo" className="h-[6vh] w-auto" />
                <h1 className="ml-4 text-2xl text-yellow font-marce hidden md:flex">Legal Builder</h1>
                <h1 className="ml-4 text-2xl text-yellow font-marce flex md:hidden">LB</h1>
            </div>
            <div className="hidden w-auto h-auto lg:flex">
                {onUser === false && <div className="flex space-x-3">
                    <LinkMenu onClick={() => setMenuApp(0)}>Home</LinkMenu>
                    <LinkMenu onClick={() => setMenuApp(1)}>Login</LinkMenu>
                    <LinkMenu onClick={() => setMenuApp(2)}>Register</LinkMenu>
                </div>}
                {onUser === true && <div className="flex space-x-3 bg-lightPurple">
                    <LinkMenu onClick={() => setPanelMenu(0)}>Cases</LinkMenu>
                    <LinkMenu onClick={() => setPanelMenu(1)}>+ New Case</LinkMenu>
                    <LinkMenu onClick={() => setPanelMenu(2)}>Team</LinkMenu>
                    <ItemIcon src="user.svg"></ItemIcon>
                    <LinkMenu onClick={() => {setPanelMenu(0); setOnUser(false)}}>Log out</LinkMenu>
                </div>}
            </div>
            <div className="flex w-[100px] h-full lg:hidden justify-end items-center text-grey hover:drop-shadow-[0px_0px_1px_rgb(105,0,187)] hover:scale-[1.1] transition-all ease-in-out duration-300 cursor-pointer">
                {menuH === false && <img src="bars-m.svg" alt="menu" className="h-[60%] w-auto" onClick={() => setMenuH(true)}/>}
                {menuH === true && <img src="bars-m.svg" alt="menu" className="h-[60%] w-auto" onClick={() => setMenuH(false)}/>}               
            </div>
            
        </header>
    );
};

export default Header;



