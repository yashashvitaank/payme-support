"use client";
import Logo from "/public/logoblack.svg";
import Image from "next/image";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignInForm() {
    //using an object for updating the user fields together
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const [secretKey, setSecretKey] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  // Set secretKey from the URL search params
  useEffect(() => {
    const urlId = searchParams.get("id");
    if (urlId) {
      setSecretKey(urlId);
    }
  }, [searchParams]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(inputData)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email: inputData.email,
      pin: inputData.password,
      id: secretKey,
    };
    console.log("Data from input", userData);
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
      <form
        className="h-full w-full bg-white rounded-lg shadow-lg flex flex-col gap-7 items-center p-4 pb-8"
        onSubmit={(e)=> {e.preventDefault(); e.stopPropagation();}}>
        <Image src={Logo} width={150} height={120} alt="logo" />

        {/* Using CustomInput with proper state binding */}
        <CustomInput
          placeholder="Mail"
          name="email" // passing name as props
          onChangeHandler={onChangeHandler} //passing the handler function as props to input component
        />
        <CustomInput
          placeholder="Pin"
          type="password"
          name="password"
          onChangeHandler={onChangeHandler}
        />
        <CustomInput placeholder="Secret Key" name="secretKey" readOnly value={secretKey}/>
        <CustomButton buttonName="Sign In" onSubmitHandler={handleSubmit} />
      </form>
    </div>
  );
}

export default SignInForm;
