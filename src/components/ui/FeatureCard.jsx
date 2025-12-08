import CardWrapper from "./CardWrapper";

import ThirdTitle from "./ThirdTitle";
import Text from "./Text";

const FeatureCard = ({ data, icon: Icon, backgroundColor, theme }) => (
  <CardWrapper
    style={{
      justifyContent: "center",
      alignItems: "center",
      backgroundColor,
    }}
  >
    {Icon && (
      <div className=" mb-4">
        <Icon width={28} height={28} fill={theme.colors.ACCENT_COLOR} />
      </div>
    )}

    <div className="mb-4">
      <ThirdTitle
        text={data.title}
        style={{ color: theme.colors.TITLE_TEXT_COLOR, textAlign: "center" }}
      />
    </div>

    <Text
      text={data.text}
      style={{ color: theme.colors.TEXT_COLOR, textAlign: "center" }}
    />
  </CardWrapper>
);

export default FeatureCard;
