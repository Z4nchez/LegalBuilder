import { useContext, useState } from 'react';
import { Button } from '../../app/globalComponents/Button';
import { InputText } from '../../app/globalComponents/InputText';
import { ItemIcon } from '../../app/globalComponents/ItemIcon';
import Context from '../../context/Context';
import {motion} from 'framer-motion'

export default function Form1({
  setSteps, setData
}: {
    setSteps: React.Dispatch<React.SetStateAction<number>>;
    setData: React.Dispatch<React.SetStateAction<object>>;
}) {
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [email, setEmail] = useState('');

  const { setMenuApp } = useContext(Context);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const results = {
      username,
      password1,
      password2,
      email,
    };

    setData(results);
    setSteps(2);
  };

  const handleCancel = () => {
    setMenuApp(0);
  };

  return (
    <motion.form
      action=""
      className="flex flex-col justify-center items-center mx-auto font-Marcellus text-lg w-full h-[80%]"
      onSubmit={handleSubmit}
      initial={{opacity: 0.5, marginLeft: "40px"}}
      animate={{opacity: 1, marginLeft: "0px"}}
      transition={{ease: "easeOut", duration: 0.3}}
    >
      <div className='flex flex-col w-full h-[80%] justify-start md:gap-4 items-center'>
        {/* Este es el div de first name */}
      <div className="flex w-[95%] md:w-full justify-center gap-4 items-center h-[15%]">
        <label htmlFor="username" className="flex items-center justify-center">
          <ItemIcon src="user.svg" alt="user icon" />
        </label>
        <div className='w-[60%] h-auto'>
        <InputText
          placeholder="User Name"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
        />
        </div>
        
      </div>

      {/* Este es el div de password */}
      <div className="flex w-[95%] md:w-full justify-center gap-4 items-center h-[15%]">
        <label htmlFor="password1" className="flex items-center justify-center">
          <ItemIcon src="pass.svg" alt="password icon" />
        </label>

        <div className='w-[60%] h-auto'>
        <InputText
          placeholder="Password"
          type="password"
          id="password1"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
          autoComplete="new-password"
        />
        </div>
        
      </div>

      {/* Este es el div de repeat password */}
      <div className="flex w-[95%] md:w-full justify-center gap-4 items-center h-[15%]">
        <label htmlFor="password2" className="flex items-center justify-center">
          <ItemIcon src="pass.svg" alt="password icon" />
        </label>

        <div className='w-[60%] h-auto'>
        <InputText
          placeholder="Repeat Password"
          type="password"
          id="password2"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          autoComplete="new-password"
        />
        </div>
        
      </div>

      {/* Este es el div de email */}
      <div className="flex w-[95%] md:w-full justify-center gap-4 items-center h-[15%]">
        <label htmlFor="email" className="flex items-center justify-center">
          <ItemIcon src="gm.svg" alt="" />
        </label>

        <div className='w-[60%] h-auto'>
        <InputText
          placeholder="Email"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input bg-inherit border-b text-pastel border-pastel px-4 py-2"
          autoComplete="email"
        />
        </div>
        
      </div>
      </div>

      <div className="flex w-full justify-center gap-4 items-center h-[10%]">
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleSubmit}>Next</Button>
      </div>
    </motion.form>
  );
}
