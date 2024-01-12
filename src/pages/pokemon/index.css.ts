import styled from "styled-components";

const PageWrapper = styled.div<{ $url?: string }>`
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin: 2rem 0;
  width: 100%;
`;

const BackgroundImg = styled.div<{ $url?: string }>`
  background: url(${props => props.$url ? props.$url : ''}) center/cover;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  height: 200px;
  justify-content: center;
  opacity: 0.15;
  position: absolute;
  width: 100%;
`;

const SpeciesData = styled.div`
  display:flex;
  flex-flow: column;
  max-width: 300px;
`;

export { PageWrapper, BackgroundImg, SpeciesData };