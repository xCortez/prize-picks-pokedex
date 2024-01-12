import styled from "styled-components";
import palette from "../../../theme/palette";

const StyledCard = styled.div`
  padding: 1rem 0.5rem;
  border: 1px solid ${palette.dark};
  box-shadow: 2px 4px 10px ${palette.primary};
  border-radius: 10px;
`;

export { StyledCard };