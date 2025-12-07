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

    <h3
      className="text-2xl font-bold mb-4 text-center"
      style={{ color: theme.colors.ACCENT_COLOR }}
    >
      {data.title}
    </h3>

    <p
      className="text-base text-center leading-relaxed"
      style={{ color: theme.colors.TEXT_COLOR }}
    >
      {data.text}
    </p>
  </div>
);

export default FeatureCard;
