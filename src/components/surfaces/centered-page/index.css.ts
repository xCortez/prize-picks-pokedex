import styled from "styled-components";
import palette from '../../../theme/palette/index'

const Wrapper = styled.div`
  align-items: flex-start;
  border-radius: 8px;
  box-shadow: 5px 5px 5px 5px ${palette.light};
  display: flex;
  justify-content: center;
  margin: 1rem auto;
  max-width: 1200px;
  min-height: 500px;
  height: 100%;
`;

export { Wrapper };