import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Indiev",
    img: "https://res.cloudinary.com/dps8chkig/image/upload/v1720377132/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA_%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2024-07-07_%D0%BE_20.31.41_t2grxi.png",
    desc: "Web aplication that has a payment system and its own file upload system, helps clients create professional content together with video editors.The code is in a private repository, due to NDA policy, but you can contact me and i will tell you how i did this work.",
    site: "https://indiev.org",
    stack:
      "JS | HTML | SCSS | React | Next.js | Mongo DB | Stripe |  RESTful API",
  },
  {
    id: 2,
    title: "Nike",
    img: "https://res.cloudinary.com/dps8chkig/image/upload/v1720378093/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA_%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2024-07-07_%D0%BE_20.47.34_tifqmx.png",
    desc: "Nike is a sleek and modern layout is crafted to provide you with an immersive browsing experience.Dive into the world of style and innovation, and find the perfect pair that matches your lifestyle.",
    site: "https://nike-store-85c7.onrender.com",
    stack: "JS | HTML | Tailwind | React",
  },
  {
    id: 3,
    title: "Task pro",
    img: "https://res.cloudinary.com/dps8chkig/image/upload/v1720378330/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA_%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2024-07-07_%D0%BE_20.51.28_fvulm1.png",
    desc: "TaskPro is a widely used project management tool that utilizes boards, lists, and cards to help individuals and teams organize their work and collaborate effectively.A great application for self-organization and for team projects.",
    site: "https://serhiirepinskyi.github.io/project-future777-frontend/welcome",
    stack:
      "JS | HTML | SCSS | React | Redux | Mongo DB | RESTful API | Node.js",
  },
  {
    id: 4,
    title: "Start Podcast",
    img: "https://res.cloudinary.com/dps8chkig/image/upload/v1720378558/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA_%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2024-07-07_%D0%BE_20.55.17_cj1ldf.png",
    desc: "The landing page for Start Podcast is designed to effectively promote and sell our comprehensive podcast video service. This page aims to attract visitors, inform them about the service's capabilities, and convert them into customers.",
    site: "https://www.start-podcast.com/",
    stack: "JS | HTML | SCSS | Webflow | Next.js",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className="portfolio-hight">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="Indiev project" loading="lazy" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <p className="stack">{item.stack}</p>
            <a className="site-link" href={item.site}>
              See It
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
