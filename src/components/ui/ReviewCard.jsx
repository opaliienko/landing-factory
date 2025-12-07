import ThirdTitle from "./ThirdTitle";
import Text from "./Text";

const ReviewCard = ({ data, icon: Icon, theme }) => (
  <div
    className={`p-4 sm:p-6 md:p-6 bg-white shadow-md rounded-xl h-52 sm:h-54 md:h-56 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300`}
  >
    <Text
      text={data.text}
      style={{ color: theme.colors.TEXT_COLOR, textAlign: "center" }}
    />

    <div
      className="border-t pt-4"
      style={{ borderColor: theme.colors.ACCENT_COLOR }}
    >
      <div className="flex justify-center items-center gap-2">
        {Icon && (
          <Icon width={28} height={28} fill={theme.colors.ACCENT_COLOR} />
        )}

        <ThirdTitle
          text={data.name}
          style={{ color: theme.colors.TITLE_TEXT_COLOR, textAlign: "center" }}
        />
      </div>

      {data.position && (
        <Text
          text={data.position}
          style={{ color: theme.colors.TEXT_COLOR, textAlign: "center" }}
        />
      )}
    </div>
  </div>
);

export default ReviewCard;
