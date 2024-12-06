import { ReactElement } from "react"

export const SidebarItem = ({icon, text}: {icon: ReactElement, text: string}) => {
  return (
    <div className="text-emerald-900 text-xl flex items-center text-center justify-start w-full font-medium p-2 my-2 hover:bg-emerald-50 cursor-pointer">
        <span className="px-2 ml-5">{icon}</span>
        <span className="mr-10">{text}</span>
    </div>
  )
}
