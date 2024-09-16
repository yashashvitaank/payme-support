import { Children } from "react";
import TextMessage from "../TextMessage";

function TextBox({messages = []}) {
  return (
    <div className="h-full px-3 flex flex-col gap-4">
      {Children.toArray(messages.map((msg) => <TextMessage {...msg} />))}
    </div>
  );
}

export default TextBox;
