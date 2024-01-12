import { StyledNavbar } from "./index.css";
import { Link } from 'react-router-dom';
import { Pokedex } from "../../inputs/text-input/index.css"
import pokedexIcon from "../../../assets/pokedex-icon.png"

export default function Navbar() {
  return (
    <StyledNavbar>
      <Pokedex src={pokedexIcon}/>
      Pokedex
      <Link to="/">
        Home
      </Link>
      <Link to={'/history'}>
        History
      </Link>
    </StyledNavbar>
  );
}