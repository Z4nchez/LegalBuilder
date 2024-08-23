interface propsInterface extends React.ImgHTMLAttributes<HTMLImageElement>{}

export function ItemIcon(props:propsInterface) {
  return (
    <img {...props} className="w-6 h-auto md:w-7"></img>
  )
}
