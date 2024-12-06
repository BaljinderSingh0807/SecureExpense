import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { LogoIcon } from "../icons/LogoIcon"

export const Login = () => {
  return (
    <div className="w-screen h-screen bg-emerald-100 flex justify-center items-center flex-col">
        <div className="text-emerald-800">
        <LogoIcon size='medium' />
        </div>       
            <div className="text-2xl font-semibold text-emerald-800">Welcome Back!</div>
            <Input placeholder="Username" />
            <Input placeholder="Email Address" />
            <Input placeholder="Password" />
            <div className="my-4">
                <Button variant="primary" text="Login" size="medium" />
            </div>     
    </div>
    
  )
}
