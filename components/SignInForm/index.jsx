'use client'
import Logo from "/public/logoblack.svg"
import Image from "next/image"
import CustomInput from "../CustomInput"
import CustomButton from "../CustomButton"
import { useRouter } from "next/navigation"
function SignInForm() {
    const router = useRouter();
    const handleSubmit= ()=> {
        console.log("clicked");
        router.replace('/support');
    }
  return (
    <div className='relative w-[90%] min-h-[60%] md:h-[50%] md:w-[50%] lg:h-[70%] lg:w-[35%]'>
        <form className="h-full w-full bg-white rounded-lg shadow-lg flex flex-col gap-7 items-center p-4" onSubmit={(e)=> {e.preventDefault(); e.stopPropagation();}}>
            <Image src={Logo} width={150} height={120} alt="logo" className="" />
            <CustomInput placeholder="Mail" />
            <CustomInput placeholder="Password" />
            <CustomInput placeholder="Secret Key" />
            <CustomButton buttonName="Sign In" handleClick={handleSubmit} />
        </form>
    </div>
  )
}

export default SignInForm