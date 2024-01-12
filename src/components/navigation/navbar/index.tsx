import { StyledNavbar } from "./index.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <StyledNavbar>
      <Link to="/">
        Home
      </Link>
      <Link to={'/history'}>
        History
      </Link>
    </StyledNavbar>
  );
}