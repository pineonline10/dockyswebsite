import dockys from "../assets/dockys.png";
import { navigation } from "../constants";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-n-8">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#hero" className="block">
          <img src={dockys} width={190} height={40} alt="Docky's" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="text-n-1 font-code text-sm uppercase tracking-wide hover:text-color-2"
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Mobile Navbar */}
        <MobileNavbar />
      </div>
    </header>
  );
};

export default Header;
