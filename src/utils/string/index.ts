export const initials = (name: string) => {
  const sn = name.trim().split(" ");
  const initials = `${sn[0].charAt(0)}${
    sn.length > 1 ? sn[sn.length - 1].charAt(0) : ""
  }`.toLocaleUpperCase();

  return initials;
};

export const toRem = (size: number) => `${size}rem`;

export const toPercent = (value: number) => `${value}%`;
