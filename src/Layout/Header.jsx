import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Inspect } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BsInstagram } from "react-icons/bs";
import logo from "../../public/logo.jpeg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`top-0 left-0 w-full z-50 md:fixed ${
        location.pathname === "/"
          ? "fixed md:bg-transparent"
          : "relative md:bg-transparent bg-[#0e0e0d] "
      }`}
    >
      <div className="relative flex items-center justify-between px-5 sm:px-8 py-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex-shrink-0">
            <img
            src={logo}
              alt="Constrator Logo"
              className="h-16 md:h-18 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Mobile Company Name */}
        <div className="md:hidden ml-2 absolute left-1/2 -translate-x-1/2  pointer-events-none">
          <h1
            className="text-white text-md tracking-[0.2em] font-semibold"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            THUIS
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["HOME", "ABOUT US", "PROJECTS", "CONTACT US"].map((item) => (
            <Link
              key={item}
              to={
                item === "HOME"
                  ? "/"
                  : `/${item.toLowerCase().replace(/\s+/g, "-")}`
              }
              className="text-white text-[13px] tracking-[0.15em] font-medium hover:text-white/70 transition-colors duration-200"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Social Icons - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.instagram.com/thuisbuilders?utm_source=qr"
            className="text-white hover:text-white/70 transition-colors"
          >
            <BsInstagram size={16} />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="md:hidden overflow-hidden"
          >
            <nav className="flex flex-col items-center gap-6 py-6 bg-black/80 backdrop-blur-md">
              {["HOME", "ABOUT US", "PROJECTS", "CONTACT US"].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={
                      item === "HOME"
                        ? "/"
                        : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                    }
                    onClick={() => setMenuOpen(false)}
                    className="text-white text-[13px] tracking-[0.15em] font-medium hover:text-white/70 transition-colors duration-200"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="flex items-center gap-5 mt-2"
              >
                <a
                  href="https://www.instagram.com/thuisbuilders?utm_source=qr"
                  className="text-white hover:text-white/70 transition-colors"
                >
                  <BsInstagram size={18} />
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;