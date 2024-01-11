import { useEffect, useState } from "react";
import { InputWrapper, Input } from "./index.css";

interface TextInputInterface {
  children?: React.ReactNode 
  onInputChange: (val: string) => void;
};

function TextInput({ children, onInputChange }: TextInputInterface) {
  const [value, setValue] = useState('');

  // preserve the changed input, but debounce user input (1 second) to prevent
  // hitting the api while the user is still typing
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  // debouncer
  useEffect(() => {
    const delayedTimeoutId = setTimeout(() => {
      onInputChange(value)
    }, 1000)

    return () => clearTimeout(delayedTimeoutId);
  }, [value, 1000])

  return (
    <InputWrapper><Input onChange={onChange}/>{children}</InputWrapper>
  );
}

export default TextInput;