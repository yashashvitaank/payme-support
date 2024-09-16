import { Children } from "react";
import TextMessage from "../TextMessage";

function TextBox({messages = []}) {
  return (
    <div className="px-3 flex flex-col overflow-y-scroll max-h-[calc(100dvh-120px)]">
      {Children.toArray(messages.map((msg) => <TextMessage {...msg} />))}
    </div>
  );
}

export default TextBox;
