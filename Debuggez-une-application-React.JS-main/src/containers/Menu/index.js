/* eslint-disable no-return-assign */
import Button from "../../components/Button";
import Logo from "../../components/Logo";

import "./style.scss";

const Menu = () => (
  <nav>
    <Logo />
    <ul>
      {/* <li>
        <a href="#nos-services">Nos services</a>
      </li>
      <li>
        <a href="#nos-realisations">Nos réalisations</a>
      </li>
      <li>
        <a href="#notre-equipe">Notre équipe</a>
      </li> */}

      <Button title="Nos services" onClick={() => (window.document.location.hash = "#nos-services")}>
      Nos services
    </Button>

    <Button title="Nos réalisations" onClick={() => (window.document.location.hash = "#nos-realisations")}>
    Nos réalisations
    </Button>

    <Button title="Notre équipe" onClick={() => (window.document.location.hash = "#notre-equipe")}>
    Notre équipe
    </Button>


    <Button title="contact" onClick={() => (window.document.location.hash = "#contact")}>
      Contact
    </Button>
    </ul>
   
  </nav>
);

export default Menu;
