import Image from 'next/image'
import Logo from "/public/logo.svg";
import SignInForm from '../SignInForm';
function SignIn() {
  return (
    <div className='flex justify-center w-full overflow-x-hidden items-center h-dvh'>
        <SignInForm />
    </div>
  )
}

export default SignIn