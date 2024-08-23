import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full flex justify-center items-center h-[10vh] text-grey ">
      <div className='w-full h-[40%] min-h-[28px] flex justify-end items-center pr-8 bg-lightPurple xs:justify-center xs:pr-0'>
        <div className="flex space-x-8">
          <a href="https://www.congreso.gob.ar/constitucionNacional.php" className='flex justify-center items-center' target="_blank" rel="noopener noreferrer">
            <img src="/src/images_Home/libro_footer.svg" className='w-auto h-[70%]' alt="Icon 1" />
          </a>
          <a href="https://www.argentina.gob.ar/normativa" className='flex justify-center items-center' target="_blank" rel="noopener noreferrer">
            <img src="/src/images_Home/apilados.svg" className='w-auto h-[70%]' alt="Icon 2" />
          </a>
          <a href="https://new.cpacf.org.ar/noticia/5143/reglamento-de-procedimiento" className='flex justify-center items-center' target="_blank" rel="noopener noreferrer">
            <img src="/src/images_Home/templo.svg" className='w-auto h-[70%]' alt="Icon 3" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
