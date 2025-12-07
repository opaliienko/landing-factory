const ReviewCard = ({ data, icon: Icon, theme }) => (
  <div
    className={`p-4 sm:p-6 md:p-6 bg-white shadow-md rounded-xl mt-4 h-52 sm:h-54 md:h-56 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300`}
  >
    <p
      className="text-center text-base leading-relaxed"
      style={{ color: theme.colors.TEXT_COLOR }}
    >
      "{data.text}"
    </p>

    <div className="border-t pt-4">
      <div className="flex justify-center items-center gap-2">
        {Icon && (
          <Icon width={28} height={28} fill={theme.colors.ACCENT_COLOR} />
        )}

        <h4
          className="text-center font-bold text-lg"
          style={{ color: theme.colors.ACCENT_COLOR }}
        >
          {data.name}
        </h4>
      </div>

      {data.position && (
        <p
          className="text-center text-sm opacity-70 mt-1"
          style={{ color: theme.colors.TEXT_COLOR }}
        >
          {data.position}
        </p>
      )}
    </div>
  </div>
);

export default ReviewCard;
