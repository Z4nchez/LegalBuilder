
type propsInterface = React.SelectHTMLAttributes<HTMLSelectElement>

export function Select(props:propsInterface) {
  return (
    <select {...props} className="bg-grey w-20 h-8 text-xs font-marce text-center text-darkPurple transition-all ease-in-out duration-300 md:w-24 md:text-base "></select>
  )
}
