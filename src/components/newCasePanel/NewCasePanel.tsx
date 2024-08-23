import { Button } from '../../app/globalComponents/Button';
import { ButtonB } from '../../app/globalComponents/ButtonB';
import { InputText } from '../../app/globalComponents/InputText';
import { ItemIcon } from '../../app/globalComponents/ItemIcon';
import { useState, useContext } from 'react';
import Context from '../../context/Context';
import {motion} from 'framer-motion'

function NewCasePanel() {
  // Estados para almacenar los valores de los inputs
  const [category, setCategory] = useState<any>('');
  const [responsibles, setResponsibles] = useState<any>([]);
  const [clients, setClients] = useState<any>([]);
  const [currentResponsible, setCurrentResponsible] = useState<any>('');
  const [currentClient, setCurrentClient] = useState<any>({
    name: '',
    id: '',
    phone: '',
    address: '',
  });
  const [cases, setCases] = useState<any>([]);
  const [formNav, setFormNav] = useState<Number>(0);
  const { setPanelMenu } = useContext(Context);

  // Manejo de cambios en los inputs
  const handleCategoryChange = (e: any) => {
    setCategory(e.target.value);
  };

  const handleResponsibleChange = (e: any) => {
    setCurrentResponsible(e.target.value);
  };

  const handleClientChange = (e: any) => {
    setCurrentClient({
      ...currentClient,
      [e.target.name]: e.target.value,
    });
  };

  // Funciones para agregar a las listas
  const addResponsible = () => {
    if (currentResponsible.trim()) {
      setResponsibles([...responsibles, currentResponsible.trim()]);
      setCurrentResponsible('');
    }
  };

  const addClient = () => {
    if (
      currentClient.name.trim() &&
      currentClient.id.trim() &&
      currentClient.phone.trim() &&
      currentClient.address.trim()
    ) {
      setClients([...clients, { ...currentClient }]);
      setCurrentClient({ name: '', id: '', phone: '', address: '' });
    }
  };

  // Función para crear un caso
  const createCase = () => {
    const newCase = {
      category,
      responsibles,
      clients,
    };
    setCases([...cases, newCase]);
    console.log('Cases:', [...cases, newCase]);

    // Limpiar los campos después de crear el caso
    setCategory('');
    setResponsibles([]);
    setClients([]);
    setCurrentClient({ name: '', id: '', phone: '', address: '' });
    setFormNav(0);
    setPanelMenu(0)
  };

  return (
    <motion.div className="w-[calc(100%-10vh)] h-[calc(100%-10vh)]" initial={{opacity: 0.7, scale:0.95}} animate={{opacity: 1, scale:1}} transition={{ ease: "easeOut", duration: 0.3 }}>
      {formNav === 0 && (
        <div className="w-full h-full flex flex-col justify-center items-center bg-lightPurple rounded-lg">
          <p className="w-full h-1/6 flex justify-center items-center text-yellow-400 font-marcellus md:text-xl mt-7">
            New Case
          </p>

          <div className="h-[55%] w-[40%] flex flex-col items-start justify-start gap-8">
            <div className="flex items-center space-x-8 w-full">
              <ItemIcon src="maletin.svg"></ItemIcon>
              <InputText
                placeholder="Category"
                style={{ width: '100%' }}
                value={category}
                onChange={handleCategoryChange}
              />
            </div>
            <div className="flex items-center space-x-8 w-full">
              <ItemIcon src="name1.svg"></ItemIcon>
              <InputText
                placeholder="Responsible"
                style={{ width: '60%' }}
                value={currentResponsible}
                onChange={handleResponsibleChange}
              />
              <Button onClick={addResponsible}>Add</Button>
            </div>
          </div>
          <div className="w-full h-1/6 flex justify-center items-center gap-6">
            <Button onClick={() => setPanelMenu(0)}>Cancel</Button>
            <ButtonB onClick={() => setFormNav(1)}>Next</ButtonB>
          </div>
        </div>
      )}
      {formNav === 1 && (

        <div className="w-full h-full flex flex-col justify-center items-center bg-lightPurple rounded-lg">
          <p className="w-full h-1/6 flex justify-center items-center text-yellow-400 font-marcellus md:text-xl mt-7">
            New Case
          </p>
          <div className="h-[55%] w-[40%] flex flex-col items-start justify-start gap-8">
            <div className="flex items-center space-x-8 w-full">
              <ItemIcon src="name1.svg"></ItemIcon>
              <InputText
                name="name"
                placeholder="Client Name"
                style={{ width: '100%' }}
                value={currentClient.name}
                onChange={handleClientChange}
              />
            </div>
            <div className="flex items-center space-x-8 w-full">
              <ItemIcon src="name1.svg"></ItemIcon>
              <InputText
                name="id"
                placeholder="Client ID"
                style={{ width: '100%' }}
                value={currentClient.id}
                onChange={handleClientChange}
              />
            </div>
            <div className="flex items-center space-x-8 w-full">
              <ItemIcon src="phone.svg"></ItemIcon>
              <InputText
                name="phone"
                placeholder="Client Phone"
                style={{ width: '100%' }}
                value={currentClient.phone}
                onChange={handleClientChange}
              />
            </div>
            <div className="flex items-center space-x-8 w-full">
              <ItemIcon src="pin.svg"></ItemIcon>
              <InputText
                name="address"
                placeholder="Client Address"
                style={{ width: '100%' }}
                value={currentClient.address}
                onChange={handleClientChange}
              />
            </div>
          </div>
          <div className="w-full h-1/6 flex justify-center items-center gap-6">
            <Button onClick={() => setFormNav(0)}>Back</Button>
            <Button onClick={addClient}>Add Client </Button>
            <ButtonB onClick={createCase}>Create Case</ButtonB>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default NewCasePanel;
