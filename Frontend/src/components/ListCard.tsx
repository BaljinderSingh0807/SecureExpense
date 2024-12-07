import { DeleteIcon } from "../icons/DeleteIcon"
import { EditIcon } from "../icons/EditIcon"

export const ListCard = () => {
  return (
    <div className="bg-white rounded-md text-emerald-900 flex items-center justify-between py-3 px-6  w-auto mr-16">
        <div className="flex flex-col">
            <div className="text-xl font-semibold">
                Source
            </div>
            <div className="text-md">
                Random
            </div>
        </div>
        <div className="flex flex-col">
            <div className="text-xl font-semibold">
                    Category
            </div>
            <div className="text-md">
                    Random
            </div>
        </div>
        <div className="flex flex-col">
            <div className="text-xl font-semibold">
                Amount
            </div>
            <div className="text-md">
                Random
            </div>
        </div>
        <div className="flex">
            <div className="mx-2 hover:text-emerald-950 cursor-pointer">
                <EditIcon />
            </div>
            <div className="mx-2 hover:text-emerald-950 cursor-pointer">
                <DeleteIcon />
            </div>
        </div>
    </div>
  )
}
