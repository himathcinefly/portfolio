import "./projects.scss";

export default function Projects() {
  return (
    <section id="parent">
      <h1>PROJECTS</h1>
      <div className="row">
        <div className="column">
          <div className="container">
            <img
              src="https://media.istockphoto.com/photos/over-shoulder-view-asian-chinese-man-using-fitness-tracker-mobile-app-picture-id1339594011?b=1&k=20&m=1339594011&s=170667a&w=0&h=JYzRtxrG_7wN9n3Gq3SZamnAFNQWcjZtuNn57Ft5flU="
              alt=""
            />
            <div className="overlay">
              <div className="text">
                Project 1
                <div className="subtext">
                  According to all known laws of aviation, there is no way a bee
                  should be able to fly.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="container">
            <img
              src="https://images.pexels.com/photos/792199/pexels-photo-792199.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
            <div className="overlay">
              <div className="text">
                Project 2<div className="subtext">More Text</div>
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="container">
            <img
              src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
            <div className="overlay">
              <div className="text">
                Project 3<div className="subtext">Even more text</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
