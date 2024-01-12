import styled from "styled-components";
import palette from "../../../../theme/palette";
import { Link } from 'react-router-dom';

const AvatarAndContent = styled.div`
  align-items: center;
  display: flex;
`;

const CardWrapper = styled.div`
  max-width: 300px;
  padding: 0 2rem;
`

const ContentColumn = styled.span`
  align-self: flex-start;
  display:flex;
  flex-flow: column;
  margin: 1rem;
`;

const Footer = styled.div`
  display:flex;
  flex-flow: column;
`;

const Identifier = styled.p`
  font-size: .80rem;
  margin: 0.25rem;
`
const Stat = styled.span`
  display: contents;
`;

const Stats = styled.span`
  background-color: ${palette.light};
  border: 0.5px solid ${palette.primary};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 1rem;
  padding: 1rem;
`;

const HistoryLink = styled(Link)`
  color: ${palette.primary}
  text-decoration: none;

  &:hover {
    background-color: ${palette.light};
    box-shadow: 2px 5px 5px ${palette.gold};
  }

  &:focus,
  &:visited,
  &:link {
    text-decoration: none;
  }
`;

export {
  AvatarAndContent,
  CardWrapper,
  ContentColumn,
  Footer,
  HistoryLink,
  Identifier,
  Stat,
  Stats
};