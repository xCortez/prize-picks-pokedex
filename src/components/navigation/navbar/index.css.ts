import styled from "styled-components";
import palette from "../../../theme/palette";

const StyledNavbar = styled.nav`
  border-bottom: 1px solid ${palette.light};
  box-shadow: 3px 5px 5px ${palette.light};
  display: flex;
  padding: 1rem;

  & a {
    border-radius: .5rem;
    font-size: 1.25rem;
    margin: .5rem;
    padding: .5rem 1rem;
    text-decoration: none;

    &:hover {
      background-color: ${palette.light};
    }

    &:active {
      background-color: ${palette.gold};
      color: ${palette.primary};
    }
  }
`;

export { StyledNavbar };