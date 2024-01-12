import styled from "styled-components";
import palette from "../../../theme/palette";

const AvatarFrame = styled.div`
  border: 1px solid ${palette.dark};
  background-color: ${palette.light};
  border-radius: 0.75rem;
  width: min-content;
  height: fit-content;
`

const AvatarImage = styled.img`
  width: 6.25rem;
  height: auto;
`;

export { AvatarFrame, AvatarImage };