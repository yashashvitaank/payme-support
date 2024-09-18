'use client'
import Logo from "/public/logoblack.svg";
import Image from "next/image";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function SignInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secretKey, setSecretKey] = useState('');

    const router = useRouter();
    const searchParams = useSearchParams();

    // Extract id from the URL parameters
    useEffect(() => {
        const urlId = searchParams.get('id'); // Get the `id` from URL
        if (urlId) {
          console.log(urlId)
            setSecretKey(urlId);
        }
    }, [searchParams]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        console.log("clicked");

        // Create the payload for API request, including the id from the URL
        const userData = {
            id, // Include the id from the URL params
            email,
            password,
            secretKey
        };

        try {
            // API call
            const response = await fetch('http://localhost:3001/api/external/support-login', { // Update this with your API endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.ok) {
                // Handle success (e.g., storing token, redirecting)
                console.log('Login successful:', data);

                // Redirect to the support page
                router.replace('/support');
            } else {
                // Handle errors
                console.error('Login failed:', data.message);
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="relative w-[90%] md:w-[50%] lg:w-[30%] h-fit">
            <form className="h-full w-full bg-white rounded-lg shadow-lg flex flex-col gap-7 items-center p-4 pb-8" onSubmit={handleSubmit}>
                <Image src={Logo} width={150} height={120} alt="logo" className="" />
                <CustomInput placeholder="Mail" value={email} onChange={(e) => setEmail(e.target.value)}  className="inputtext-black"/>
                <CustomInput placeholder="Pin" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <CustomInput placeholder="Ticket ID" value={secretKey} onChange={(e) => setSecretKey(e.target.value)} />
                <CustomButton buttonName="Sign In" handleClick={handleSubmit} />
            </form>
        </div>
    );
}

export default SignInForm;
