const Footer = ({ content, theme }) => {
  const customClasses = content.customClasses || {};
  const contacts = content.contacts || {};
  const copyright = content.copyright;

  return (
    <footer
      className={`w-full ${customClasses.section}`}
      style={{ backgroundColor: theme.colors.ACCENT_COLOR }}
    >
      <div className={`${customClasses.container}`}>
        <h3 className={customClasses.title}>{content.title}</h3>

        <ul className={customClasses.list}>
          {contacts.email && <li>Email: {contacts.email}</li>}
          {contacts.phone && <li>Phone: {contacts.phone}</li>}
          {contacts.address && <li>Address: {contacts.address}</li>}
        </ul>

        <p className={customClasses.copyright}>
          © {new Date().getFullYear()} {copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
