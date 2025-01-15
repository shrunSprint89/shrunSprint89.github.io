import { useState } from "react";
import ContactCode from "../components/ContactCode";
import styles from "../styles/ContactPage.module.css";
import useTranslation from "next-translate/useTranslation";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { t } = useTranslation("contact");
  const {
    successMessage,
    errorMessage,
    nameLabel,
    emailLabel,
    subjectLabel,
    messageLabel,
    submitLabel,
    reactOutSocialsLabel,
    fillOutFormLabel,
  } = t(
    "contact:form",
    {},
    {
      returnObjects: true,
    }
  );

  const submitForm = async (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_s1or9ra",
        "template_706gjmp",
        { from_name: name, reply_to: email, subject, message },
        {
          publicKey: "vu5zbtAReKAaNwI0J",
        }
      )
      .then(
        () => {
          alert(successMessage);
        },
        (error) => {
          alert(`${errorMessage} ${error.text}`);
        }
      );
  };

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>{reactOutSocialsLabel}</h3>
        <ContactCode />
      </div>
      <div>
        <h3 className={styles.heading}>{fillOutFormLabel}</h3>
        <form className={styles.form} onSubmit={submitForm}>
          <div className={styles.flex}>
            <div>
              <label htmlFor="name">{nameLabel}</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">{emailLabel}</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="name">{subjectLabel}</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">{messageLabel}</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">{submitLabel}</button>
        </form>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Contact" },
  };
}

export default ContactPage;
