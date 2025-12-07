import ThirdTitle from "./ThirdTitle";
import Text from "./Text";

const FeatureCard = ({ data, icon: Icon, theme }) => (
  <div
    className="p-4 sm:p-6 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-200 hover:-translate-y-2"
    style={{
      backgroundColor: theme.colors.white[100],
    }}
  >
    {Icon && (
      <div className="flex justify-center items-center mb-4">
        <Icon width={28} height={28} fill={theme.colors.ACCENT_COLOR} />
      </div>
    )}

    <div className="mb-4">
      <ThirdTitle
        text={data.title}
        style={{ color: theme.colors.ACCENT_COLOR, textAlign: "center" }}
      />
    </div>

    <Text
      text={data.text}
      style={{ color: theme.colors.TEXT_COLOR, textAlign: "center" }}
    />
  </div>
);

export default FeatureCard;
