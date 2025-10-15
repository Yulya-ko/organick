const GreenCircleIcon = ({ outerColor = '#7EB693', innerColor = '#ECECEC', size = 19 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="9.5" cy="9.5" r="9.5" fill={outerColor} />
    <circle cx="9.5" cy="9.5" r="5.5" fill={innerColor} />
  </svg>
);

export default GreenCircleIcon;
