import { useState } from "react";
import { Link } from "react-router-dom";
import { Inspect } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BsInstagram } from "react-icons/bs";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="md:fixed bg-[#0e0e0d] md:bg-transparent top-0 left-0 w-full z-50  ">
      <div className="flex items-center max-w-7xl mx-auto justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://img.magnific.com/premium-vector/black-white-geometric-logo-with-white-line-middle_695270-1089.jpg"
              alt="Constrator Logo"
              className="h-16 md:h-18 w-auto object-contain"
            />
          </Link>
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
            href="/https://www.instagram.com/thuisbuilders?utm_source=qr"
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

      {/* Mobile Menu */}
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
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="flex items-center gap-5 mt-2"
              >
                <a
                  href="#"
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
