
import { ButtonB } from '../../app/globalComponents/ButtonB';
import { ItemIcon } from '../../app/globalComponents/ItemIcon';
import { useState } from 'react';
import { motion } from 'framer-motion';

function CaseDocumentation() {
  const [isOpen, setIsOpen] = useState(null);
  const [items, setItems] = useState([
    { name: 'img002.png' },
    { name: 'img047.png' },
    { name: 'declaracion-d1.doc' },
    { name: 'img242.png' },
    { name: 'resumen-pruebas.pdf' },
    { name: 'img089.png' },
  ]);
  const [files, setFiles] = useState<any>([]);

  const handleNewFile = (event: any) => {
    const newFile = event.target.files[0];
    if (newFile) {
      setItems([...items, { name: newFile.name }]);
      setFiles([...files, newFile]);
    }
  };

  const toggleModal = (index: any) => {
    setIsOpen(isOpen === index ? null : index);
  };

  const deleteItem = (index: any) => {
    setItems(items.filter((item, i) => i !== index));
  };

  const handleDownload = (index: any) => {
    console.log('Download', index);
  };

  return (
    <motion.div className="w-full h-[90%] bg-grey rounded-lg text-darkPurple overflow-x-hidden" initial={{opacity: 0.7, scale:0.95}} animate={{opacity: 1, scale:1}} transition={{ ease: "easeOut", duration: 0.3 }}>
      <div className="w-full h-[6%] bg-aura font-bold flex justify-center items-center">
        Documentation
      </div>
      <div className="w-full min-h-[84%] grid grid-cols-auto gap-6 justify-start ml-10" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
        {items.map((item, index) => (
          <section className="flex flex-col w-40 mt-5" key={index}>
            <div className="text-lightBlack w-40 h-40 bg-lightWhite"></div>
            <div className="flex justify-center items-center">
              <p className="text-center flex-grow">{item.name}</p>
              <button className="" onClick={() => toggleModal(index)}>
                <ItemIcon
                  src="3-points-download.svg"
                  style={{ width: '20px' }}
                />
              </button>
            </div>
            {isOpen === index && (
              <motion.div
                initial={{ opacity: 0, x: -50, y: -50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                className="relative left-[96%] top-[-20%] w-32 flex flex-col bg-lightWhite"
              >
                <button
                  className="flex gap-2 pt-1 hover:bg-darkWhite"
                  onClick={() => deleteItem(index)}
                >
                  <ItemIcon src="trash.svg" />
                  Eliminar
                </button>
                <button className="flex gap-2 pb-1 hover:bg-darkWhite" onClick={() => handleDownload(index)}>
                  <ItemIcon src="download.svg" />
                  Descargar
                </button>
              </motion.div>
            )}
          </section>
        ))}
      </div>
      <div className="w-full relative bottom-0 h-[10%] bg-aura flex justify-end items-center">
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={handleNewFile}
        />
        <ButtonB style={{ marginRight: '12px' }} onClick={() => Document.prototype.getElementById('fileInput')?.click()}>
          New File
        </ButtonB>
      </div>
    </motion.div>
  );
}

export default CaseDocumentation;
