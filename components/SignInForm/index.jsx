'use client'
import Logo from "/public/logoblack.svg";
import Image from "next/image";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secretKey, setSecretKey] = useState('');

    const router = useRouter();
    const searchParams = useSearchParams();

    // Set secretKey from the URL search params
    useEffect(() => {
        const urlId = searchParams.get('id');
        if (urlId) {
            setSecretKey(urlId);
        }
    }, [searchParams]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            email,
            pin: password,
            id: secretKey,
        };

        try {
            const response = await fetch('http://localhost:3000/api/external/support-login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData),
            });
            const result = await response.json();
            console.log(result); // Log the result for debugging
            if (result.success) {
                router.replace('/support');
            } else {
                toast.error("No matching data found");
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error("An error occurred while submitting the form.");
        }
    };

    return (
        <div className="relative w-[90%] md:w-[50%] lg:w-[30%] h-fit">
          <ToastContainer />
            <form className="h-full w-full bg-white rounded-lg shadow-lg flex flex-col gap-7 items-center p-4 pb-8" onSubmit={handleSubmit}>
                <Image src={Logo} width={150} height={120} alt="logo" />
                
                {/* Using CustomInput with proper state binding */}
                <CustomInput 
                    placeholder="Mail" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="inputtext-black"
                />
                <CustomInput 
                    placeholder="Pin" 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <CustomInput 
                    placeholder="Secret Key" 
                    value={secretKey} 
                    readOnly 
                />
                <CustomButton buttonName="Sign In" />
            </form>
        </div>
    );
}

export default SignInForm;
