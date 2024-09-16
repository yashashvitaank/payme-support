"use client";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ChatInput from "../ChatInput";
import TextBox from "./TextBox";

import { messages } from "@/utils/messages";

function SupportChat() {
  console.log(messages);
  const [messagesList, setMessagesList] = useState([]);
  const [input, setInput] = useState("");

  const receiveMessage = async () => {
    return new Promise((resolve, reject) => {
      // do something

      setTimeout(() => {
        console.log("messagesList", messagesList);
        resolve(
          setMessagesList([
            ...messagesList,
            { type: "received", text: "We have received your query." },
          ])
        );
      }, 2000);
    });
  };

  const handleSend = async () => {
    const newList = [...messagesList, { type: "sent", text: input }]
    setMessagesList(newList);
    setInput("");
    setTimeout(() => {
      setMessagesList([...newList,{type: "received", text: "We got your query. Our team is processing it."}])
    },1500)
  };

  useEffect(() => {
    setMessagesList(messages);
  }, []);

  return (
    <div className="customGradient text-black w-full h-full pb-3 bg-red-700 shadow-lg grid grid-rows-[56px_auto_48px]">
      <NavBar tktId='tkn0101' />
      <TextBox messages={messagesList} />
      <ChatInput handleSend={handleSend} input={input} setInput={setInput} />
    </div>
  );
}

export default SupportChat;
