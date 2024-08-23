import { useState } from 'react';
import { Button } from '../../app/globalComponents/Button';
import { InputText } from '../../app/globalComponents/InputText';
import { ItemIcon } from '../../app/globalComponents/ItemIcon';
import { motion } from 'framer-motion';

export default function Form3({
  setSteps,
  setData,
  data,
}: {
  setSteps: React.Dispatch<React.SetStateAction<number>>;
  setData: React.Dispatch<React.SetStateAction<object>>;
  data: object;
}) {
  const [lawyerid, setLawyerid] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const results = {
      lawyerid,
    };

    const finalResults = { ...data, ...results };

    setData(finalResults);

    console.log(finalResults);

    /*axiosInterceptor.post("/register", finalResults)
      .then(res => console.log(res.data));*/
  };

  const handleCancel = () => {
    setSteps(2);
  };
  return (
    <motion.form
      action=""
      className="flex flex-col justify-center items-center mx-auto font-Marcellus text-lg w-full h-[80%]"
      onSubmit={handleSubmit}
      initial={{ opacity: 0.5, marginLeft: '40px' }}
      animate={{ opacity: 1, marginLeft: '0px' }}
      transition={{ ease: 'easeOut', duration: 0.3 }}
    >
      <div className="flex flex-col w-full h-[80%] justify-start md:gap-4 items-center">
        <div className="flex w-[95%] md:w-full justify-center gap-4 items-center h-[15%]">
          <label htmlFor="lawyerid" className="flex items-center justify-center">
            <ItemIcon src="maletin.svg" />
          </label>

          <div className="w-[60%] h-auto">
            <InputText
              placeholder="LAWYER ID"
              type="text"
              id="lawyerid"
              value={lawyerid}
              onChange={(e) => setLawyerid(e.target.value)}
              autoComplete="off"
            />
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center gap-4 items-center h-[10%]">
        <Button onClick={handleCancel}>Back</Button>
        <Button onClick={handleSubmit}>Create User</Button>
      </div>
    </motion.form>
  );
}
