type Color = number[] | string;

const hexToRbg = (hex: string) => {
  // Parse the r, g, b values
  const cleaned = hex.replace(/^#/, '');
  const bigint = parseInt(cleaned, 16);

  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r, g, b };
};

const rgbToHex = (rgb: number[]) => {
  const componentToHex = (c: number) => {
    const hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  };

  return `#${rgb.map(componentToHex).join('')}`;
};

const invert = (color: Color) => {
  const invertRgb = (rgb: number[]) =>
    rgb.map(col => {
      return 255 - col;
    });

  // handle HEX
  if (typeof color === 'string') {
    const { r, g, b } = hexToRbg(color);

    const rgb = invertRgb([r, g, b]);
    return rgbToHex(rgb);
  }

  return invertRgb(color);
};

export const colorModification = {
  invert: (color: Color) => {
    return invert(color);
  },
};
