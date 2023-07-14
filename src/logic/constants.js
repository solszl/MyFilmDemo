const DPI = window.devicePixelRatio;
const PX_PER_INCH = "72";
export const SIZE_MAP = {
  "8INx10IN": [8 * PX_PER_INCH * DPI, 10 * PX_PER_INCH * DPI],
  "10INx12IN": [10 * PX_PER_INCH * DPI, 12 * PX_PER_INCH * DPI],
  "11INx14IN": [11 * PX_PER_INCH * DPI, 14 * PX_PER_INCH * DPI],
  "14INx17IN": [14 * PX_PER_INCH * DPI, 17 * PX_PER_INCH * DPI],
  "14INx14IN": [14 * PX_PER_INCH * DPI, 14 * PX_PER_INCH * DPI],
  A3: [297, 420],
  A4: [210, 297],
};
