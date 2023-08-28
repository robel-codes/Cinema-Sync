interface Spacing {
  space_2: Number;
  space_4: Number;
  space_8: Number;
  space_10: Number;
  space_12: Number;
  space_15: Number;
  space_16: Number;
  space_18: Number;
  space_20: Number;
  space_24: Number;
  space_28: Number;
  space_32: Number;
  space_36: Number;
}
export const SPACING: Spacing = {
  space_2: 2,
  space_4: 4,
  space_8: 8,
  space_10: 10,
  space_12: 12,
  space_15: 15,
  space_16: 16,
  space_18: 18,
  space_20: 20,
  space_24: 24,
  space_28: 28,
  space_32: 32,
  space_36: 36,
};

interface Color {
  Black: string;
  BlackRGB10: string;
  Orange: String;
  OrangeRGBA0: String;
  Gray: String;
  DarkGrey: String;
  Yellow: String;
  White: String;
  WhiteRGBA75: String;
  WhiteRGBA50: String;
  WhiteRGBA32: String;
  WhiteRGBA15: String;
}

export const COLORS: Color = {
  Black: '#000000',
  BlackRGB10: 'rgba(0,0,0,0.1)',
  Orange: '#FF5524',
  OrangeRGBA0: 'rgba(255,85,36,0)',
  Grey: '#333333',
  DarkGrey: '#0b0b0b',
  Yellow: '#E1CD17',
  White: '#FFFFFF',
  WhiteRGBA75: 'rgba(255,255,255,0.75)',
  WhiteRGBA50: 'rgba(255,255,255,0.50)',
  WhiteRGBA32: 'rgba(255,255,255,0.32)',
  WhiteRGBA15: 'rgba(255,255,255,0.15)',
};

interface FontFamily {
  poppins_black: String;
  poppins_bold: String;
  poppins_extrabold: String;
  poppins_extralight: String;
  poppins_light: String;
  poppins_medium: String;
  poppins_regular: String;
  poppins_semibold: String;
  poppins_thin: String;
}

export const FONTFAMILY: FontFamily = {
  poppins_black: 'Poppins-Black',
  poppins_bold: 'Poppins-Bold',
  poppins_extrabold: 'Poppins-ExtraBold',
  poppins_extralight: 'Poppins-ExtraLight',
  poppins_light: 'Poppins-Light',
  poppins_medium: 'Poppins-Medium',
  poppins_regular: 'Poppins-Regular',
  poppins_semibold: 'Poppins-SemiBold',
  poppins_thin: 'Poppins-Thin',
};

interface FontSize {
  size_8: Number;
  size_10: Number;
  size_12: Number;
  size_14: Number;
  size_16: Number;
  size_18: Number;
  size_20: Number;
  size_24: Number;
  size_30: Number;
}

export const FONTSIZE: FontSize = {
  size_8: 8,
  size_10: 10,
  size_12: 12,
  size_14: 14,
  size_16: 16,
  size_18: 18,
  size_20: 20,
  size_24: 24,
  size_30: 30,
};

interface BorderRadius {
  radius_4: Number;
  radius_8: Number;
  radius_10: Number;
  radius_15: Number;
  radius_20: Number;
  radius_25: Number;
}

export const BORDERRADIUS: BorderRadius = {
  radius_4: 4,
  radius_8: 8,
  radius_10: 10,
  radius_15: 15,
  radius_20: 20,
  radius_25: 25,
};
