/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        skin: {
          base: "var(--text-color)",
          base2: "var(--text-color2)",
          base3: "var(--text-color3)",
          base4: "var(--text-color4)",
          base5: "var(--text-color5)",
          base6: "var(--text-color6)",
          base7: "var(--text-color7)",
          base8: "var(--text-color8)",
        },
      },

      fontSize: {
        mysize: "var(--font-size)",
        mysize2: "var(--font-size2)",
        mysize3: "var(--font-size3)",
        mysize4: "var(--font-size4)",
        mysize5: "var(--font-size5)",
      },

      fontWeight: {
        cusweight: "var(--font-weight)",
        cusweight2: "var(--font-weight2)",
      },

      fontFamily: {
        cusfamily: "var(--font-family)",
        cusfamily2: "var(--font-family2)",
        cusfamily3: "var(--font-family3)",
      },

      backgroundColor: {
        skin: {
          fill: "var(--fill-color)",
          fill2: "var(--fill-color2)",
          fill3: "var(--fill-color3)",
          fill4: "var(--fill-color4)",
          fill5: "var(--fill-color5)",
          fill6: "var(--fill-color6)",
          fill7: "var(--fill-color7)",
          indicator: "var(--fill-color-indicator)",
        },
      },

      gradientColorStops: {
        greenStart: "var(--gradient-color-start)", // Start color
        greenEnd: "var(--gradient-color-end)", // End color
      },

      backgroundImage: {
        "gradient-green":
          "linear-gradient(to right, var(--gradient-color-start), var(--gradient-color-end))",
      },
    },
  },
  plugins: [],
};
