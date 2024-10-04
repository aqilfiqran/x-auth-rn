import { Palette, PaletteVariant, ThemeColor, ThemeVariant } from "./theme.types"

const palettes: Record<ThemeVariant, Record<PaletteVariant, Palette>> = {
  default: {
    white: {
      50: "#FFFFFF",
      100: "#FFFFFF",
      200: "#FFFFFF",
      300: "#FFFFFF",
      400: "#FFFFFF",
      500: "#FFFFFF",
      600: "#FFFFFF",
      700: "#FFFFFF",
      800: "#FFFFFF",
      900: "#FFFFFF",
      light: "#FFFFFF",
      main: "#FFFFFF",
      dark: "#FFFFFF",
      contrastText: "#C5CBD8",
    },
    neutral: {
      50: "#FAFBFD",
      100: "#F1F4F8",
      200: "#E3E8F2",
      300: "#C5CBD8",
      400: "#9EA4B2",
      500: "#6D7280",
      600: "#4F566E",
      700: "#363E5C",
      800: "#22294A",
      900: "#141B3D",
      light: "#E3E8F2",
      main: "#6D7280",
      dark: "#363E5C",
      contrastText: "#FFFFFF",
    },
    // primary color from tailwindcss palette
    primary: {
      50: "#E6FFFA",
      100: "#B2F5EA",
      200: "#81E6D9",
      300: "#4FD1C5",
      400: "#38B2AC",
      500: "#319795",
      600: "#2C7A7B",
      700: "#285E61",
      800: "#234E52",
      900: "#1D4044",
      light: "#81E6D9",
      main: "#319795",
      dark: "#285E61",
      contrastText: "#FFFFFF",
    },
    secondary: {
      50: "#FFFDDD",
      100: "#FCF3D3",
      200: "#FAE5A7",
      300: "#F2CF7A",
      400: "#E5B757",
      500: "#D59525",
      600: "#B7781B",
      700: "#995E12",
      800: "#7B460B",
      900: "#663507",
      light: "#FAE5A7",
      main: "#D59525",
      dark: "#663507",
      contrastText: "#FFFFFF",
    },
    tertiary: {
      50: "#FFEBFF",
      100: "#F5D7FC",
      200: "#E7B1F9",
      300: "#CE86EC",
      400: "#B065DB",
      500: "#8937C3",
      600: "#6B28A7",
      700: "#501B8C",
      800: "#391171",
      900: "#280A5D",
      light: "#E7B1F9",
      main: "#8937C3",
      dark: "#280A5D",
      contrastText: "#FFFFFF",
    },
    success: {
      50: "#ECFFE7",
      100: "#E2FCDB",
      200: "#BFF9B8",
      300: "#BFF9B8",
      400: "#71DF7A",
      500: "#46CA5D",
      600: "#33AD54",
      700: "#23914B",
      800: "#167541",
      900: "#0D603B",
      light: "#BFF9B8",
      main: "#46CA5D",
      dark: "#23914B",
      contrastText: "#FFFFFF",
    },
    error: {
      50: "#FFEFEC",
      100: "#FEDAD2",
      200: "#FDADA6",
      300: "#FA7879",
      400: "#F65667",
      500: "#F0214A",
      600: "#CE184D",
      700: "#AC104D",
      800: "#8B0A48",
      900: "#730645",
      light: "#FDADA6",
      main: "#F0214A",
      dark: "#AC104D",
      contrastText: "#FFFFFF",
    },
    warning: {
      50: "#FFFAE2",
      100: "#FFF6CC",
      200: "#FFEB99",
      300: "#FFDC66",
      400: "#FFCE3F",
      500: "#FFB700",
      600: "#DB9600",
      700: "#B77900",
      800: "#935D00",
      900: "#7A4900",
      light: "#FFEB99",
      main: "#FFB700",
      dark: "#B77900",
      contrastText: "#FFFFFF",
    },
    info: {
      50: "#E5FAFF",
      100: "#CCF5FF",
      200: "#99E5FF",
      300: "#66D0FF",
      400: "#3FB9FF",
      500: "#0094FF",
      600: "#0072DB",
      700: "#0055B7",
      800: "#003C93",
      900: "#002B7A",
      light: "#99E5FF",
      main: "#0094FF",
      dark: "#0055B7",
      contrastText: "#FFFFFF",
    },
  },
}

export const colors: Record<ThemeVariant, ThemeColor> = {
  default: {
    palette: palettes.default,

    black: "#000000",

    transparent: "rgba(0, 0, 0, 0)",

    text: palettes.default.neutral[800],

    textDim: palettes.default.neutral[600],

    background: palettes.default.neutral.contrastText,

    border: palettes.default.neutral[400],

    tint: palettes.default.primary[500],

    separator: palettes.default.neutral[300],

    error: palettes.default.error[500],

    errorBackground: palettes.default.error[100],
  },
}
