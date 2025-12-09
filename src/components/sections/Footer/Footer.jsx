import { FooterWrapper, Container, ThirdTitle, Text } from "../../ui";

const Footer = ({ content, theme }) => {
  const styles = content?.styles?.container || {};
  const contacts = content?.contacts || {};
  const copyright = content?.copyright;

  return (
    <FooterWrapper
      style={{
        backgroundColor: theme.colors.ACCENT_COLOR,
        fontFamily: theme.fonts.fontsFamily.regular,
      }}
    >
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          ...styles,
        }}
      >
        <div className="mb-4">
          <ThirdTitle
            text={content.title}
            style={{ color: theme.colors.white[100] }}
          />
        </div>

        <ul className="space-y-2 mb-6">
          {contacts.email && (
            <li>
              <Text
                text={`Email: ${contacts.email}`}
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
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
                }}
              />
            </li>
          )}
        </ul>

        <Text
          text={`© ${new Date().getFullYear()} ${copyright}`}
          style={{
            color: "rgba(255, 255, 255, 0.6)",
            // textAlign: "center",
          }}
        />
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
