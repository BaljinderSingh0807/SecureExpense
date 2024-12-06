export const Input = ({placeholder}: {placeholder: string}) => {
    return (
      <div className="w-1/4">
          <input type="text" placeholder={placeholder} className="px-4 w-full text-lg py-2 border rounded m-2"/>
      </div>
      
    )
  }