/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 **/

const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  trailingComma: "none",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  endOfLine: "auto"
};

export default config;
