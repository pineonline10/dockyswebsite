import { useState } from "react";
import { navigation } from "../constants";

// Design Elements
export const Rings = () => {
  return (
    <div className="absolute top-1/2 left-1/2 w-[25rem] aspect-square border border-color-2/20 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-70">
      <div className="absolute top-1/2 left-1/2 w-[18rem] aspect-square border border-color-3/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-[12rem] aspect-square border border-color-4/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export const SideLines = () => {
  return (
    <>
      <div className="absolute top-0 left-4 w-0.5 h-full bg-color-5 opacity-30"></div>
      <div className="absolute top-0 right-4 w-0.5 h-full bg-color-6 opacity-30"></div>
    </>
  );
};

export const BackgroundCircles = () => {
  return (
    <>
      <div className="absolute top-[5rem] left-10 w-4 h-4 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full"></div>
      <div className="absolute top-[10rem] right-10 w-4 h-4 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full"></div>
      <div className="absolute bottom-[5rem] left-16 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"></div>
    </>
  );
};

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden relative">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-6 z-50 flex flex-col items-center justify-center space-y-1.5 bg-gradient-to-r from-color-2 to-color-3 p-2 rounded-md shadow-lg"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </button>

      {/* Full-Screen Overlay and Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-n-8 text-n-1 flex flex-col items-center justify-center p-6">
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-6 z-50 flex flex-col items-center justify-center space-y-1.5 bg-gradient-to-r from-color-2 to-color-3 p-2 rounded-md shadow-lg"
            aria-label="Close navigation"
          >
            <span className="w-6 h-0.5 bg-white rotate-45"></span>
            <span className="w-6 h-0.5 bg-white -rotate-45"></span>
          </button>

          {/* Navigation Links */}
          <div className="relative space-y-6">
            <h2 className="h2 text-color-1 text-center mb-4">Docky's Menu</h2>
            <ul className="space-y-4 text-center">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.url}
                    className="text-n-1 text-lg font-grotesk hover:text-color-2 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Design Elements */}
          <Rings />
          <SideLines />
          <BackgroundCircles />
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
