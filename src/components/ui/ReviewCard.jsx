import { CardWrapper, ThirdTitle, Text } from "../ui";

const ReviewCard = ({ data, icon: Icon, theme }) => (
  <CardWrapper
    className="h-40 md:h-48"
    style={{
      justifyContent: "space-between",
      alignItems: "stretch",
      backgroundColor: theme.colors.white[100],
    }}
  >
    <Text
      text={data.text}
      style={{ color: theme.colors.TEXT_COLOR, textAlign: "left" }}
    />

    <div
      className="border-t pt-4"
      style={{ borderColor: theme.colors.ACCENT_COLOR }}
    >
      <div className="flex justify-start items-center gap-2">
        {Icon && (
          <Icon width={28} height={28} fill={theme.colors.ACCENT_COLOR} />
        )}

        <ThirdTitle
          text={data.name}
          style={{ color: theme.colors.TITLE_TEXT_COLOR, textAlign: "left" }}
        />
      </div>

      {data.position && (
        <Text
          text={data.position}
          style={{ color: theme.colors.TEXT_COLOR, textAlign: "left" }}
        />
      )}
    </div>
  </CardWrapper>
);

export default ReviewCard;
