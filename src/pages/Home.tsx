import {useContext} from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import {Context} from '../context/Context'
import Login from '../components/login/Login';
import Register from '../components/Register/Register';
import UserPanel from '../components/userPanel/UserPanel';
import MenuH from '../components/menuH/MenuH';

export default function Home () {
  
  const {menuApp, onUser, menuH} = useContext(Context);
  
  return (
    <div className="min-h-screen flex flex-col justify-between bg-darkPurple text-yellow-400 font-marcellus overflow-hidden">
      <Header />
      {menuH === true && <MenuH></MenuH>}
      {onUser === false && <main className="flex flex-col items-center text-center flex-grow w-full h-[80vh] justify-center">
        {menuApp === 0 && <div className="w-full h-full flex justify-center items-start">
          <MainContent></MainContent>
        </div>}
        {menuApp === 1 && <Login></Login>}
        {menuApp === 2 && <Register></Register>}
      </main>}
      {onUser === true && <UserPanel></UserPanel>}
      <Footer />
    </div>
  );
}
