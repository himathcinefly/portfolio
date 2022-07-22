import "./contact.css";
export default function Contact() {
  // create contact me form
  return (
    <section id="contact">
      <div className="titleheader">
        <h1>CONTACT</h1>
      </div>
      <div className="mainbody">
        <div className="contactcontainer">
          <form action="https://formspree.io/xqjqjqjq" method="POST">
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter E-Mail Address"
            />
            <label htmlFor="message"></label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter Message"
            ></textarea>
            <br></br>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </section>
  );
}
