import React, { useState, useContext } from 'react';
import { Button } from '../../app/globalComponents/Button';
import { ButtonB } from '../../app/globalComponents/ButtonB';
import Context from '../../context/Context';
import listCases from '../../../listCases.json'
import {motion} from 'framer-motion'

interface caseInter{
  id: number;
  nExp: string;
  category: string;
  state: string;
}
interface casesPanelInter extends React.HTMLAttributes<HTMLDivElement>{
  setACase : (m: caseInter) => void
}

function CasesPanel (props: casesPanelInter){
  const { setMenuApp, setPanelMenu } = useContext(Context);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCases, setFilteredCases] = useState(listCases);
  const [currentPage, setCurrentPage] = useState(1);
  const casesPerPage = 7;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredCases(
      listCases.filter(
        (c) =>
          c.nExp.toLowerCase().includes(value) ||
          c.category.toLowerCase().includes(value) ||
          c.state.toLowerCase().includes(value)
      )
    );
    setCurrentPage(1); // Reset to first page on search
  };

  const handleMoreInfo = (caseId: number) => {
    // Lógica para mostrar más información sobre el caso
    //alert(`Mostrar más información sobre el caso: ${caseId}`);
    const acCase = listCases.find((c) => c.id === caseId)
    if(acCase){
      props.setACase(acCase)
    }
    setPanelMenu(3)
  };

  // Get current cases
  const indexOfLastCase = currentPage * casesPerPage;
  const indexOfFirstCase = indexOfLastCase - casesPerPage;
  const currentCases = filteredCases.slice(indexOfFirstCase, indexOfLastCase);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredCases.length / casesPerPage)) {
      paginate(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  return (
    <motion.div className="w-[95%] min-w-[200px] h-[85%] min-h-[200px]" initial={{opacity: 0.7, scale:0.95}} animate={{opacity: 1, scale:1}} transition={{ ease: "easeOut", duration: 0.3 }}>
      <div className="mb-6 pl-8 flex justify-start xs:justify-center xs:mr-8">
        <input
          type="text"
          placeholder="Insert a case"
          className="w-80 h-8 p-2 rounded bg-purpleTransparent border-[rgba(255,255,255,0.3)] border-[1px] pr-3 mr-6 xs:mr-2 "
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className='xs:mt-1'>        <Button  onClick={() => setMenuApp(0)}>Search</Button>
        </div>
      </div>
      <div className="w-full h-[90%] rounded-md bg-grey flex justify-center items-center">
        <div className="w-[calc(100%-5vh)] h-[calc(100%-5vh)] flex flex-col justify-between items-center">
          <div className="w-full h-[90%] flex flex-col justify-start items-center gap-[2.8%]">
            <div className="text-white bg-grisoscuro border-stone-800 border-solid h-[10%] w-full">
              <div className="flex justify-between w-full h-full">
                <div className="w-1/4 border-r border-stone-800 flex justify-center items-center">
                  N° EXP
                </div>
                <div className="w-1/4 border-r border-stone-800 flex justify-center items-center ">
                  Category
                </div>
                <div className="w-1/4 border-r border-stone-800 flex justify-center items-center">
                  State
                </div>
                <div className="w-1/4 flex justify-center items-center">
                  Details
                </div>
              </div>
            </div>
            {currentCases.map((c) => (
              <motion.div
                key={c.id}
                className="bg-whitecases shadow-md rounded-md h-[10%] w-full"
                initial={{opacity: 0.7, marginLeft:"40px"}} animate={{opacity: 1, marginLeft: "0px"}} transition={{ ease: "easeOut", duration: 0.3 }}
              >
                <div className="flex justify-between items-center border-b border-stone-800 text-black h-full">
                  <div className="w-1/4  border-r border-stone-800 flex justify-center items-center text-base xs:text-xs">
                    {c.nExp}
                  </div>
                  <div className="w-1/4 border-r border-stone-800 flex justify-center items-center text-base xs:text-xs">
                    {c.category}
                  </div>
                  <div className="w-1/4 border-r border-stone-800 flex justify-center items-center font-bold text-base xs:text-xs">
                    <span
                      className={
                        c.state === 'In Progress'
                          ? 'text-greencases'
                          : 'text-orangecases'
                      }
                    >
                      {c.state}
                    </span>
                  </div>
                  <div className="w-1/4  flex justify-center items-center">
                    <ButtonB onClick={() => handleMoreInfo(c.id)}>More</ButtonB>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center items-end gap-[4px] h-[10%] w-full">
            <button
              onClick={prevPage}
              className={`h-[60%] w-auto aspect-square flex justify-center items-center rounded ${
                currentPage === 1
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-purpleTransparent text-white'
              }`}
              disabled={currentPage === 1}
            >
              &laquo;
            </button>
            <button
              onClick={nextPage}
              className={`h-[60%] w-auto aspect-square flex justify-center items-center rounded ${
                currentPage === Math.ceil(filteredCases.length / casesPerPage)
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-purpleTransparent text-white'
              }`}
              disabled={
                currentPage === Math.ceil(filteredCases.length / casesPerPage)
              }
            >
              &raquo;
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CasesPanel;
