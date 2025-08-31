import { siteLinks } from "../../../public/Links/siteLinks";

export const NavLink = (): React.ReactElement => {
  return (
    <nav className="p-4">
      <ul className="flex gap-4 flex-wrap text-[1rem]">
        {siteLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
