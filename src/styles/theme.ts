import { Theme, defaultTheme } from "evergreen-ui";
import { unit, precision } from "@src/utils/styleHelpers";

type CustomTheme = Theme & {
  stroke: {
    width: string;
    color: string;
    type: "solid";
    backgroundPattern: string;
    border: string;
  };
};

enum FontFamily {
  SOURCE_PRO = "'Source Serif Pro', serif",
  M_PLUS_1P = '"M PLUS 1p"',
}

enum Colors {
  DARK_GRAY = "#333333",
  // RED = "#E94F37",
  // RED = "#4F5D75",
  RED = "#EF8354",
  // PASTEL_CREAM = "#EADAA2",
  PASTEL_CREAM = "#EADAD2",
}

// type a = CustomTheme["colors"]

const theme: CustomTheme = {
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    red: {
      ...defaultTheme.palette.red,
      base: Colors.RED,
    },
  },
  colors: {
    ...defaultTheme.colors,
    background: {
      ...defaultTheme.colors.background,
      overlay: Colors.PASTEL_CREAM,
    },
    text: {
      ...defaultTheme.colors.text,
      default: Colors.DARK_GRAY,
      danger: Colors.RED,
    },
    border: {
      ...defaultTheme.colors.border,
      default: Colors.DARK_GRAY,
    },
  },
  typography: {
    ...defaultTheme.typography,
    fontFamilies: {
      display: FontFamily.SOURCE_PRO,
      mono: FontFamily.M_PLUS_1P,
      ui: FontFamily.SOURCE_PRO,
    },
    headings: {
      ...defaultTheme.typography.headings,
      ["600"]: {
        ...defaultTheme.typography.headings[600],
        color: Colors.DARK_GRAY,
        fontFamily: FontFamily.SOURCE_PRO,
        fontSize: unit(6),
        fontWeight: 600,
      },
    },
    paragraph: {
      ...defaultTheme.typography.paragraph,
    },
    text: {
      ...defaultTheme.typography.text,
      ["400"]: {
        ...defaultTheme.typography.text[400],
        fontSize: precision(14),
      },
    },
  },
  stroke: {
    width: precision(3),
    type: "solid",
    color: Colors.DARK_GRAY,
    backgroundPattern: "",
    border: `${precision(3)} solid ${Colors.DARK_GRAY}`,
  },
};

const darkTheme: CustomTheme = {
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    red: {
      ...defaultTheme.palette.red,
      base: Colors.RED,
    },
  },
  colors: {
    ...defaultTheme.colors,
    background: {
      ...defaultTheme.colors.background,
      overlay: Colors.DARK_GRAY,
    },
    text: {
      ...defaultTheme.colors.text,
      default: Colors.PASTEL_CREAM,
      dark: Colors.DARK_GRAY,
      danger: Colors.RED,
    },
    border: {
      ...defaultTheme.colors.border,
      default: Colors.PASTEL_CREAM,
    },
  },
  typography: {
    ...defaultTheme.typography,
    fontFamilies: {
      display: FontFamily.SOURCE_PRO,
      mono: FontFamily.M_PLUS_1P,
      ui: FontFamily.SOURCE_PRO,
    },
    headings: {
      ...defaultTheme.typography.headings,
      ["400"]: {
        ...defaultTheme.typography.headings[400],
        color: Colors.PASTEL_CREAM,
        fontFamily: FontFamily.SOURCE_PRO,
        fontSize: unit(8),
        fontWeight: 600,
      },
      ["500"]: {
        ...defaultTheme.typography.headings[500],
        color: Colors.PASTEL_CREAM,
        fontFamily: FontFamily.SOURCE_PRO,
        fontSize: unit(6),
        fontWeight: 600,
      },
      ["600"]: {
        ...defaultTheme.typography.headings[600],
        color: Colors.PASTEL_CREAM,
        fontFamily: FontFamily.SOURCE_PRO,
        fontSize: unit(5),
        fontWeight: 600,
      },
    },
    paragraph: {
      ...defaultTheme.typography.paragraph,
    },
    text: {
      ...defaultTheme.typography.text,
      ["400"]: {
        ...defaultTheme.typography.text[400],
        fontSize: precision(14),
      },
    },
  },
  stroke: {
    width: precision(3),
    type: "solid",
    color: Colors.DARK_GRAY,
    backgroundPattern: "",
    border: `${precision(3)} solid ${Colors.PASTEL_CREAM}`,
  },
};

export default darkTheme;
