function PrevIcon({ width = 20, height = 20, fill = "#000" }) {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      xmlSpace="preserve"
      transform="rotate(180)"
    >
      <path d="M6.8 23.7L5.4 22.3 15.7 12 5.4 1.7 6.8 0.3 18.5 12z" />
    </svg>
  );
}

export default PrevIcon;
