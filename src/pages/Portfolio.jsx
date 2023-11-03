import ME from "../assets/home.png";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <p>My recent Work</p>
      <p>Portfolio</p>
      <div className="container">
        <article className="item">
          <div className="image">
            <img src={ME} alt="" />
          </div>
          <p>item del portfolio</p>
          <div className="buttons">
            <a
              href="https://github.com"
              className="buttonGit"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com"
              className="buttonLive"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </div>
        </article>
        <article className="item">
          <div className="image">
            <img src={ME} alt="" />
          </div>
          <p>item del portfolio</p>
          <div className="buttons">
            <a
              href="https://github.com"
              className="buttonGit"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com"
              className="buttonLive"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </div>
        </article>
        <article className="item">
          <div className="image">
            <img src={ME} alt="" />
          </div>
          <p>item del portfolio</p>
          <div className="buttons">
            <a
              href="https://github.com"
              className="buttonGit"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com"
              className="buttonLive"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Portfolio;
