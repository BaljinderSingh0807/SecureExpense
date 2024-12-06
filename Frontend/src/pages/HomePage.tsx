import { Button } from "../components/Button"
import { LogoIcon } from "../icons/LogoIcon"

export const HomePage = () => {
  return (
    <div className="w-screen h-screen bg-emerald-100 flex justify-center items-center flex-col">
        <div className="text-7xl mb-10 text-emerald-800 font-semibold flex justify-center items-center">
         <div className="px-3">
            <LogoIcon size='big'/>
         </div>      
            SecureExpense
        </div>
        <div className="text-2xl text-emerald-800 font-semibold">
            Get Started
        </div>
        <div className="mt-1 mb-5 text-xl text-emerald-800 italic">
            Your money, your rules – all in one place!
        </div>
        <div>
            <Button variant='primary' text="Sign Up" size="big" />
            <Button variant='secondary' text="Log In" size="big" />
        </div>        
    </div>
    
  )
}
