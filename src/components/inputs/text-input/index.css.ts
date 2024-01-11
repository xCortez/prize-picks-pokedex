import styled from "styled-components";
import palette from "../../../theme/palette";

const Input = styled.input`
  padding: 1rem  .5rem;
  margin-right: 0.5rem;
`;

const InputWrapper = styled.div`
  align-items: center;
  background-color: ${palette.white};
  border-radius: 4px;
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 1rem;
`;

const Pokedex = styled.img`
  width: 25px;
`;

export { InputWrapper, Input, Pokedex };