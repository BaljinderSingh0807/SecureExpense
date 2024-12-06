import { BudgetIcon } from "../icons/BudgetIcon"
import { ExpenseIcon } from "../icons/ExpenseIcon"
import { IncomeIcon } from "../icons/IncomeIcon"
import { LogoIcon } from "../icons/LogoIcon"
import { OverviewIcon } from "../icons/OverviewIcon"
import { SidebarItem } from "./SidebarItem"


export const Sidebar = () => {
  return (
    <div className="bg-white h-screen w-72 flex flex-col justify-start items-start">
        <div className="text-2xl mb-10 mt-3 text-emerald-800 font-semibold flex justify-center items-center">
         <div className="px-3">
            <LogoIcon size='medium'/>
         </div>      
            SecureExpense
        </div>

        <SidebarItem icon={<OverviewIcon />} text='Overview'/>
        <SidebarItem icon={<IncomeIcon />} text='Income'/>
        <SidebarItem icon={<ExpenseIcon />} text='Expenses'/>
        <SidebarItem icon={<BudgetIcon />} text='Budget'/>
    </div>
  )
}
