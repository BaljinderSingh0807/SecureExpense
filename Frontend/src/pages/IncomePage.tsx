import { ListCard } from "../components/ListCard"

export const IncomePage = () => {
  return (
    <div className="ml-14 w-4/5 mt-6 flex flex-col">
        <div className="text-3xl font-medium text-emerald-900">Your Total Income</div>
        <div className="text-4xl font-medium text-green-600">$10000</div>
        <div className="mt-12">
            <div className="flex mr-20 text-emerald-800 justify-between">
                <div className="text-xl py-2">Income Transactions</div>
                <div className="text-xl font-semibold py-2 rounded-md hover:text-emerald-950 cursor-pointer ">+ Add Income</div>
            </div>
            <ListCard />
        </div>
    </div>
  )
}
