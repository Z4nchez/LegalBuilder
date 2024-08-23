interface propsInterface extends React.ButtonHTMLAttributes<HTMLButtonElement>{
}

export function ButtonB({children, ...props}: propsInterface) {
  return (
    <button className=" w-16 bg-yellow-600 rounded h-6 text-xs font-bold text-darkPurple border-2 border-aura font-marce hover:bg-yellow-500 transition-all ease-in-out duration-300 md:w-32 md:h-8 md:text-base" {...props}>{children}</button>
  )
}
