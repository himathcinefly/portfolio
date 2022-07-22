import "./projects.css";

export default function Projects() {
  return (
    <section id="parent">
      <h2>PROJECTS</h2>
      <div className="row">
        <div className="column">
          <div className="container">
            <img
              src="http://assets.stickpng.com/images/58afd6b70187e59a7d8a8f1c.png"
              alt=""
            />
            <div className="overlay">
              <div className="text">Project 1</div>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="container">
            <img
              src="http://assets.stickpng.com/images/58afd6b70187e59a7d8a8f1c.png"
              alt=""
            />
            <div className="overlay">
              <div className="text">Project 2</div>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="container">
            <img
              src="http://assets.stickpng.com/images/58afd6b70187e59a7d8a8f1c.png"
              alt=""
            />
            <div className="overlay">
              <div className="text">Project 3</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
