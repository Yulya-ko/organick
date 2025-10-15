// src/assets/fonts/utils.js
export const FontFamily = {
  roboto: "'Roboto', sans-serif",
  openSans: "'Open Sans', sans-serif",
  yellowtail: "'Yellowtail', cursive",
};

export const FontWeight = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
};

export const font = ({ family, weight, size, lineHeight, style, color }) => ({
  fontFamily: FontFamily[family],
  fontWeight: FontWeight[weight],
  fontSize: size,
  lineHeight: lineHeight,
  fontStyle: style,
  color: color,
});
