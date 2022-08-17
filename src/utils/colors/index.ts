export const toRGBA = (rgb: string, a = "0.1") => {
  const matchRGB = rgb.match(/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/);
  if (matchRGB) {
    const [, r, g, b] = matchRGB;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
};
