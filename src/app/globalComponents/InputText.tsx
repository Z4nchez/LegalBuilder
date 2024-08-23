type propsInterface = React.InputHTMLAttributes<HTMLInputElement>

export function InputText(props:propsInterface) {
  return (
    <input {...props} className="w-full h-8 border-b border-b-grey text-sm text-yellow-500 bg-transparent placeholder:text-[rgba(255,255,255,0.5)] placeholder:text-sm font-marce px-2 focus:outline-0 focus:bg-lightPurple transition-all ease-in-out duration-300
    md:w-full md:text-base md:placeholder:text-base"></input>
  )
}
