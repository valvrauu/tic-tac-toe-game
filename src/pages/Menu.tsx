import Logo from "../components/Logo";
import PickPlayer from "../components/PickPlayer";
import { LinkButton } from "../components/Button";

function Menu() {
  return (
    <div className="tablet:gap-10 grid w-full max-w-115 gap-8">
      <div className="justify-self-center">
        <Logo />
      </div>
      <PickPlayer />
      <div className="tablet:gap-5 grid gap-4">
        <LinkButton variant="primary" color="yellow" to="/game/solo">
          New Game (Vs Cpu)
        </LinkButton>
        <LinkButton variant="primary" color="blue" to="/game/multiplayer">
          New Game (Vs Player)
        </LinkButton>
      </div>
    </div>
  );
}

export default Menu;
