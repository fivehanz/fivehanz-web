import { Linkedin, Github, Twitter } from "@icons-pack/react-simple-icons";

const AboutCard = () => {
  return (
    <div className="about-card">
      <div className="thumb-box">
        <div className="thumb"></div>
      </div>

      <div className="card-desc">
        <div className="titles">
          <h2 className="title">haniel rameshbabu (hanz)</h2>
        </div>

        <p className="paragraph">wip/tbc.</p>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/fivehanz/"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="https://twitter.com/fivehanz"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter />
          </a>
          <a
            href="https://github.com/fivehanz"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
