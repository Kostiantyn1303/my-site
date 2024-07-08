import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <div className="container">
        <motion.div className="textContainer" variants={variants}>
          <p>
            I focus on helping your brand grow
            <br /> and move forward
          </p>
          <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
          <div className="title">
            <img src="/people.webp" alt="" />
            <h1>
              <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
            </h1>
          </div>
          <div className="title">
            <h1>
              <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
              Business.
            </h1>
            <button>My Experience</button>
          </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Frontend Developer</h2>
            <p>
              Affnotech Lviv| mar 2022 - apr 2023 Developing and maintaining web
              applications using React.js and other related technologies. <br />
              Implementing responsive design and ensuring cross- browser
              compatibility. <br /> Through this role, I honed my skills in
              front-end development, responsive design, and cross-browser
              compatibility, contributing to the successful delivery of multiple
              projects and enhancements, including high-impact landing pages and
              complex web applications.
            </p>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Full Stack Developer</h2>
            <p>
              KPI creatives | dec 2023 - june 2024 Create user interface designs
              and web layouts using HTML, CSS, JavaScript, and front-end
              frameworks like React ,Next.js. <br /> Back-End Development and
              Database Management Develop and maintain server-side logic,
              integration, and application architecture. Service Development for
              Professional Video Creation and Editing: User Dashboard: Developed
              a dashboard for users to create projects, upload files, and track
              progress. Project Management: Implemented features for clients to
              manage and submit video projects for editing. Payment Integration:
              Integrated Stripe for secure payment processing. API Integration:
              Utilized various APIs, including video processing and third-party
              services. Next.js: Leveraged Next.js for server-side rendering and
              improved performance.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
