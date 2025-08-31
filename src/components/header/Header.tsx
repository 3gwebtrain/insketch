import SiteLogo from "../micros/Logo";
import { NavLink } from "../micros/NavLink";

export const Header = (): React.ReactElement => {
  return (
    <header className="lg:flex lg:justify-between lg:items-center">
      <SiteLogo />
      <NavLink />
    </header>
  );
};
