import { Sidebar } from "../components/Sidebar"
import { IncomePage } from "./IncomePage"

const Dashboard = () => {
  return (
    <div className="bg-emerald-100 flex">

        <Sidebar />
        <IncomePage />
    </div>
  )
}

export default Dashboard