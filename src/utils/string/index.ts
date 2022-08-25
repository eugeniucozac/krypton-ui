export const initials = (name: string) => {
  const sn = name.trim().split(" ");
  const initials = `${sn[0].charAt(0)}${
    sn.length > 1 ? sn[sn.length - 1].charAt(0) : ""
  }`.toLocaleUpperCase();

  return initials;
};

export const toRem = (size: number) => `${size}rem`;

export const toPx = (size: number) => `${size}px`;

export const toPercent = (value: number) => `${value}%`;

export const uuid = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
