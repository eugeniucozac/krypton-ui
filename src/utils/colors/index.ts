export const toRGBA = (rgb: string, a = "0.1") => {
  const matchRGB = rgb.match(/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/);
  if (matchRGB) {
    const [, r, g, b] = matchRGB;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
};

export const toRGB = (color: string) => {
  const isRGB = color.match(/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/);
  const isHEX = color.match(/#(?:[0-9a-fA-F]{3}){1,2}/g);
  const isHSL = color.match(/^hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)$/);

  if (isRGB) {
    return isRGB[0];
  }

  if (isHEX) {
    let hex = color.replace("#", "");

    if (hex.length === 3) {
      hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgb(${r}, ${g}, ${b})`;
  }

  if (isHSL) {
    let [, h, s, l] = isHSL.map(Number);
    const light = l / 100;
    const chroma = (n: number) => (n + h / 30) % 12;
    const inter = (s / 100) * Math.min(light, 1 - light);
    const result = (n: number) =>
      light -
      inter * Math.max(-1, Math.min(chroma(n) - 3, Math.min(9 - chroma(n), 1)));
    return [255 * result(0), 255 * result(8), 255 * result(4)];
  }
};
