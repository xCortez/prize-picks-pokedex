import styled from "styled-components";

const AvatarAndContent = styled.div`
  display: flex;
  align-items: center;
`;

const ContentColumn = styled.span`
  display:flex;
  flex-flow: column;
  margin: 1rem;
  align-self: flex-start;
`;

const Stat = styled.span`
  display: contents;
`;

const Footer = styled.div`
  display:flex;
  flex-flow: column;
`;

const CardWrapper = styled.div`
  max-width: 300px;
  padding: 0 2rem;
`

const Identifier = styled.p``

export { AvatarAndContent, CardWrapper, Stat, Footer, ContentColumn, Identifier};