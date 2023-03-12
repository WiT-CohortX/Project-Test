
export function SimpleBtn({type, text, disable}) {
  return (
    <button type={type} disable={disable} className="py-2 px-4 w-full bg-green-600 text-white rounded-full hover:bg-green-600/90">{text}</button>
  )
}

