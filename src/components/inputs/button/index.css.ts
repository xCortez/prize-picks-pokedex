import styled from "styled-components";
import palette from "../../../theme/palette";

const StyledButton = styled.button`
  align-items: center;
  background-color: ${palette.white};
  border-radius: 5px;;
  border: 1px solid ${palette.primary_dark};
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  justify-content: center;
  padding: .75rem 1.25rem;

  &:hover {
    background-color: ${palette.offwhite};
  };

  &:active{
    background-color: ${palette.gold};
  }
`;

export { StyledButton };