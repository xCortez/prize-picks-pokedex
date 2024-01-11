import { InputWrapper, Input } from "./index.css";

function TextInput({ children }: { children?: React.ReactNode }) {
  return (
    <InputWrapper><Input />{children}</InputWrapper>)
}

export default TextInput;