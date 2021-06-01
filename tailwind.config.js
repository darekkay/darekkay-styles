/**
 * Base configuration for Tailwind CSS.
 *
 * - Theme configuration: https://tailwindcss.com/docs/theme
 * - Presets: https://tailwindcss.com/docs/presets
 * - Default configuration: https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const theme = {
  screens: {
    md: "768px",
  },

  // Base

  inset: {
    "-1": "-1px",
    0: "0",
  },

  height: (theme) => ({
    ...theme("spacing"),
    auto: "auto",
    full: "100%",
  }),

  maxHeight: {
    full: "100%",
  },

  width: (theme) => ({
    ...theme("spacing"),
    auto: "auto",
    full: "100%",
  }),

  minWidth: {
    full: "100%",
  },

  maxWidth: {
    content: "var(--content-max-width)",
    full: "100%",
  },

  // Typography

  fontSize: {
    1: ["1.2rem", "1.7"],
    2: ["1.4rem", "1.6"],
    3: ["1.6rem", "1.5"],
    4: ["1.8rem", "1.5"],
    5: ["2rem", "1.35"],
    6: ["2.4rem", "1.25"],
    7: ["3rem", "1.2"],
  },

  fontWeight: {
    light: "300",
    normal: "400",
    semibold: "600",
    bold: "700",
    extrabold: "800",
  },

  // Spacing

  spacing: {
    0: "0",
    1: "0.2rem",
    2: "0.5rem",
    3: "0.8rem",
    4: "1rem",
    5: "1.5rem",
    6: "2rem",
    7: "3rem",
    8: "4rem",
    9: "8rem",
  },

  margin: (theme) => ({
    auto: "auto",
    ...theme("spacing"),
  }),
  padding: (theme) => theme("spacing"),
  space: (theme) => theme("spacing"),

  // CSS Grid

  gridTemplateColumns: {
    auto: "auto",
    "auto-max": "auto max-content",
  },

  // Colors

  // TODO: align with utilities
  // TODO: define colors per track (font, bg, border)
  colors: {
    transparent: "transparent",
    white: "#fff",
    primary: "var(--color-primary)",
    inverted: "var(--inverted-background-color)",
    tomorrow: {
      background: "var(--color-tomorrow-background)",
      red: "var(--color-tomorrow-red)",
      orange: "var(--color-tomorrow-orange)",
      yellow: "var(--color-tomorrow-yellow)",
      green: "var(--color-tomorrow-green)",
      blue: "var(--color-tomorrow-blue)",
      cyan: "var(--color-tomorrow-cyan)",
      purple: "var(--color-tomorrow-purple)",
      comment: "var(--color-tomorrow-comment)",
    },
  },

  textColor: (theme) => ({
    // ...theme("colors"),
  }),
  backgroundColor: (theme) => theme("colors"),

  // Misc

  boxShadow: {
    none: "none",
  },

  cursor: {
    auto: "auto",
    default: "default",
    pointer: "pointer",
    wait: "wait",
    text: "text",
    move: "move",
    "not-allowed": "not-allowed",
  },

  opacity: {
    0: "0",
    100: "1",
  },

  zIndex: {
    10: 10,
    20: 20,
    30: 30,
  },
};

const variants = {
  // Base
  display: ["responsive"],
  position: [],
  inset: [],
  overflow: [],
  resize: [],
  height: [],
  maxHeight: [],
  width: ["responsive"],
  minWidth: [],
  maxWidth: [],

  // Flexbox

  flexDirection: ["responsive"],
  flexWrap: ["responsive"],
  flexGrow: [],
  flexShrink: [],
  alignItems: ["responsive"],
  justifyContent: ["responsive"],

  // CSS Grid

  gridTemplateColumns: ["responsive"],

  // Spacing

  margin: ["responsive"],
  padding: ["responsive"],
  space: ["responsive"],

  // Typography

  fontSize: [],
  fontWeight: [],
  fontStyle: [],
  textAlign: ["responsive"],
  textDecoration: ["hover", "focus"],
  textTransform: [],

  // Colors

  textColor: ["hover"],
  backgroundColor: ["hover"],

  // Misc

  boxShadow: ["hover", "focus"],
  cursor: [],
  listStyleType: [],
  opacity: [],
  visibility: [],
  whitespace: [],
  wordBreak: [],
  zIndex: [],
};

/* To enable a plugin, remove the plugin from this object and add it to the variants. */
const disabledPlugins = {
  accessibility: false,
  alignContent: false,
  alignSelf: false,
  animation: false,
  appearance: false,
  backdropBlur: false,
  backdropBrightness: false,
  backdropContrast: false,
  backdropFilter: false,
  backdropGrayscale: false,
  backdropHueRotate: false,
  backdropInvert: false,
  backdropOpacity: false,
  backdropSaturate: false,
  backdropSepia: false,
  backgroundAttachment: false,
  backgroundBlendMode: false,
  backgroundClip: false,
  backgroundImage: false,
  backgroundOpacity: false,
  backgroundPosition: false,
  backgroundRepeat: false,
  backgroundSize: false,
  blur: false,
  borderCollapse: false,
  borderColor: false,
  borderOpacity: false,
  borderRadius: false,
  borderStyle: false,
  borderWidth: false,
  boxDecorationBreak: false,
  boxSizing: false,
  brightness: false,
  clear: false,
  container: false,
  contrast: false,
  divideColor: false,
  divideOpacity: false,
  divideStyle: false,
  divideWidth: false,
  dropShadow: false,
  fill: false,
  filter: false,
  flex: false,
  float: false,
  fontFamily: false,
  fontSmoothing: false,
  fontVariantNumeric: false,
  gap: false,
  gradientColorStops: false,
  grayscale: false,
  gridAutoColumns: false,
  gridAutoFlow: false,
  gridAutoRows: false,
  gridColumn: false,
  gridColumnEnd: false,
  gridColumnStart: false,
  gridRow: false,
  gridRowEnd: false,
  gridRowStart: false,
  gridTemplateRows: false,
  hueRotate: false,
  invert: false,
  isolation: false,
  justifyItems: false,
  justifySelf: false,
  letterSpacing: false,
  lineHeight: false,
  listStylePosition: false,
  minHeight: false,
  mixBlendMode: false,
  objectFit: false,
  objectPosition: false,
  order: false,
  outline: false,
  overscrollBehavior: false,
  placeContent: false,
  placeholderColor: false,
  placeholderOpacity: false,
  placeItems: false,
  placeSelf: false,
  pointerEvents: false,
  preflight: false,
  ringColor: false,
  ringOffsetColor: false,
  ringOffsetWidth: false,
  ringOpacity: false,
  ringWidth: false,
  rotate: false,
  saturate: false,
  scale: false,
  sepia: false,
  skew: false,
  stroke: false,
  strokeWidth: false,
  tableLayout: false,
  textOpacity: false,
  textOverflow: false,
  transform: false,
  transformOrigin: false,
  transitionDelay: false,
  transitionDuration: false,
  transitionProperty: false,
  transitionTimingFunction: false,
  translate: false,
  userSelect: false,
  verticalAlign: false,
};

/* Derive corePlugins from variants and disabledPlugins */
const corePlugins = {
  ...Object.keys(variants).reduce(
    (accumulator, key) => ({
      ...accumulator,
      [key]: true,
    }),
    {}
  ),
  ...disabledPlugins,
};

module.exports = {
  purge: false,
  prefix: "",
  important: false,
  separator: ":",
  presets: [], // don't inherit default Tailwind config
  theme,
  variants,
  corePlugins,
  plugins: [],
};
