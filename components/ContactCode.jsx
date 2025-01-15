import styles from "../styles/ContactCode.module.css";

const contactItems = [
  {
    social: "email",
    link: "sharan.bizid@gmail.com",
    href: "mailto:sharan.bizid@gmail.com",
  },
  {
    social: "github",
    link: "shrunSprint89",
    href: "https://github.com/shrunSprint89/",
  },
  {
    social: "linkedin",
    link: "sharanselvaraj",
    href: "https://www.linkedin.com/in/sharanselvaraj/",
  },
  {
    social: "x/twitter",
    link: "shrunSprint89",
    href: "https://www.x.com/shrunSprint89",
  },
  {
    social: "instagram",
    link: "shruninsta",
    href: "https://www.instagram.com/shruninsta",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
