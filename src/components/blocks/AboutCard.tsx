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

        <p className="paragraph">
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrible vermin. He lay on his
          armour-like back, and if he lifted his head a little he could see his
          brown belly, slightly domed and divided by arches into stiff sections.
          The bedding was hardly able to cover it and seemed ready to slide off
          any moment. His many legs, pitifully thin compared with the size of
          the rest of him, waved about helplessly as he looked.
          &quot;What&apos;s happened to me?&quot; he thought.
        </p>

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
