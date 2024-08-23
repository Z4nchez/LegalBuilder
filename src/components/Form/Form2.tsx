import { useState } from 'react';
import { Button } from '../../app/globalComponents/Button';
import { InputText } from '../../app/globalComponents/InputText';
import { ItemIcon } from '../../app/globalComponents/ItemIcon';
import { Select } from '../../app/globalComponents/Select';
import {motion} from 'framer-motion'

export default function Form2({
  setSteps,
  setData,
}: {
  setSteps: React.Dispatch<React.SetStateAction<number>>;
  setData: React.Dispatch<React.SetStateAction<object>>;
}) {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneType, setPhoneType] = useState(
    'movil' as 'movil' | 'telefono' | ''
  );
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const results = {
      firstname,
      lastname,
      phone,
      phoneType,
      street,
      city,
      zip,
    };

    setData(results);

    setSteps(3);
  };

  const handleCancel = () => {
    setSteps(1);
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
        <label htmlFor="firstname" className="flex items-center justify-center">
          <ItemIcon src="name1.svg" />
        </label>
        <div className='w-[60%] h-auto'> 
        <InputText
          placeholder="First Name"
          id="firstname"
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          autoComplete="given-name"
        />
        </div>
      </div>

      {/* Este es el div de lastname */}
      <div className="flex w-[95%] md:w-full justify-center gap-4 items-center h-[15%]">
        <label htmlFor="lastname" className="flex items-center justify-center">
          <ItemIcon src="name1.svg" />
        </label>
        <div className='w-[60%] h-auto'> 
        <InputText
          placeholder="Last Name"
          id="lastname"
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          autoComplete="family-name"
        />
        </div>
      </div>

      {/* Este es el div de phone */}
      <div className="flex w-[95%] md:w-full justify-center gap-4 items-center h-[15%]">
    
          <label htmlFor="phone" className="flex items-center justify-center">
            <ItemIcon src="phone.svg" />
          </label>

          <div className="w-[60%] h-auto flex justify-between">
            <div className='w-[calc(95%-96px)] h-auto'> 
            <InputText
              placeholder="Phone"
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
            />
            </div>
            <Select
              name="phone"
              id="typephone"
              value={phoneType}
              onChange={(e) =>
                setPhoneType(e.target.value as 'movil' | 'telefono')
              }
            >
              <option className="mx-0" value="movil">
                Movil
              </option>
              <option className="mx-0" value="telefono">
                Phone
              </option>
            </Select>
          </div>

      </div>

      {/* Este es el div de street */}
      <div className="flex w-[95%] md:w-full justify-center md:justify-center md:gap-4 items-center h-[45%] md:h-[15%]">
        <label htmlFor="street" className="hidden md:flex">
          <ItemIcon src="pin.svg" alt="street icon" />
        </label>
        <div className="w-full h-full flex justify-start items-center flex-col md:flex-row md:w-[60%] md:justify-between md:h-auto">
          <div className="flex justify-center gap-4 w-full md:justify-center md:w-[30%] h-1/3 md:h-auto">
            <label htmlFor="street" className="md:hidden flex items-center justify-center">
              <ItemIcon src="pin.svg" alt="street icon" />
            </label>
            <div className='w-[60%] h-auto md:w-full flex items-center'> 
            <InputText
              type="text"
              placeholder="Street"
              id="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              autoComplete="street-address"
            />
            </div>
          </div>

          <div className="flex justify-center gap-4 w-full md:justify-center md:w-[30%] h-1/3 md:h-auto">
            <label htmlFor="city" className="md:hidden flex items-center justify-center">
              <ItemIcon src="pin.svg" alt="city icon" />
            </label>
            <div className='w-[60%] h-auto md:w-full flex items-center'> 
            <InputText
              type="text"
              placeholder="City"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              autoComplete="address-level2"
            />
            </div>
          </div>

          <div className="flex justify-center gap-4 w-full md:justify-center md:w-[30%] h-1/3 md:h-auto">
            <label htmlFor="zip" className="md:hidden flex items-center justify-center">
              <ItemIcon src="pin.svg" alt="zip icon" />
            </label>
            <div className='w-[60%] h-auto md:w-full flex items-center'>
            <InputText
              type="text"
              placeholder="Zip Code"
              id="zip"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              autoComplete="postal-code"
            />
            </div>
          </div>
        </div>
      </div>
      </div>
      

      {/* Estos son los botones */}
      <div className="flex w-full justify-center gap-4 items-center h-[10%]">
        <Button onClick={handleCancel}>Back</Button>
        <Button onClick={handleSubmit}>Next</Button>
      </div>
    </motion.form>
  );
}
