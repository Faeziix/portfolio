import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        xh1: "3.5rem",
        xh2: "2.92rem",
        xh3: "2.43rem",
        xh4: "2.02rem",
        xh5: "1.68rem",
        mh1: "3rem",
        mh2: "2.25rem",
        mh3: "1.75rem",
        mh4: "1.5rem",
        mh5: "1.25rem",
        h1: "2.5rem",
        h2: "2rem",
        h3: "1.75rem",
        h4: "1.5rem",
        h5: "1.25rem",
      },
      spacing: {
        // Basic spacing
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "32px",
        xl: "64px",
        "2xl": "128px",
        // Inset utility classes
        "inset-xs": "4px 4px 4px 4px",
        "inset-sm": "8px 8px 8px 8px",
        "inset-md": "16px 16px 16px 16px",
        "inset-lg": "32px 32px 32px 32px",
        "inset-xl": "64px 64px 64px 64px",
        "inset-2xl": "128px 128px 128px 128px",
        // Stack spacing for margin and padding
        "stack-default": "0 0 16px 0",
        "stack-xs": "0 0 4px 0",
        "stack-sm": "0 0 8px 0",
        "stack-md": "0 0 16px 0",
        "stack-lg": "0 0 32px 0",
        "stack-xl": "0 0 64px 0",
        "stack-2xl": "0 0 128px 0",
      },
    },
  },
  plugins: [],
};
export default config;
