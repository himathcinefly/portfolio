// import about.sass from the src folder
import "./about.css";
import Type from "./Type";
export default function About() {
  return (
    <section id="about">
      <div className="about-container">
        <h1 id="#mainheader">
          WELCOME TO MY <Type />
        </h1>
      </div>
    </section>
  );
}
