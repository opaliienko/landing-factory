import ThirdTitle from "../ui/ThirdTitle";
import Text from "../ui/Text";

const Footer = ({ content, theme }) => {
  const customClasses = content.customClasses || {};
  const contacts = content.contacts || {};
  const copyright = content.copyright;

  return (
    <footer
      className={customClasses.section}
      style={{ backgroundColor: theme.colors.ACCENT_COLOR }}
    >
      <div className={customClasses.container}>
        <div className="mb-4">
          <ThirdTitle
            text={content.title}
            style={{ color: theme.colors.white[100], textAlign: "center" }}
          />
        </div>

        <ul className="space-y-2 mb-6">
          {contacts.email && (
            <li>
              <Text
                text={`Email: ${contacts.email}`}
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  textAlign: "center",
                }}
              />
            </li>
          )}
          {contacts.phone && (
            <li>
              <Text
                text={`Phone: ${contacts.phone}`}
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  textAlign: "center",
                }}
              />
            </li>
          )}
          {contacts.address && (
            <li>
              <Text
                text={`Address: ${contacts.address}`}
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  textAlign: "center",
                }}
              />
            </li>
          )}
        </ul>

        <Text
          text={`© ${new Date().getFullYear()} ${copyright}`}
          style={{
            color: "rgba(255, 255, 255, 0.6)",
            textAlign: "center",
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
