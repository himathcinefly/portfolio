import "./contact.css";
export default function Contact() {
  // create contact me form
  return (
    <section id="contact">
      <h1>CONTACT</h1>
      <form action="https://formspree.io/xqjqjqjq" method="POST">
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message"></textarea>
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}
