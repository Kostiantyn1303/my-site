import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Khymera Kostiantyn
        </motion.span>
        <div className="social">
          <a
            href="https://t.me/Kostiantyn_Khymera"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/telegram.png" alt="telegram" />
          </a>
          <a
            href="https://www.linkedin.com/in/kostiantyn-khymera"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/link.png" alt="" />
          </a>
          <a
            href="https://github.com/Kostiantyn1303"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/git.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
