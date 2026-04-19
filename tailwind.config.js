/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0C0C0E",
        ink2: "#1A1A1F",
        ink3: "#2A2A32",
        mist: "#F5F3EF",
        mist2: "#EAE8E3",
        mist3: "#DEDBD5",
        gold: "#C9A96E",
        gold2: "#E8C98A",
        sky: "#4A90D9",
        green: "#2ECC8B",
        rose: "#E8547A",
      },
      fontFamily: {
        head: ["'Clash Display'", "sans-serif"],
        body: ["'Cabinet Grotesk'", "sans-serif"],
      },
      fontSize: {
        xs: ["0.72rem", "1rem"],
        sm: ["0.85rem", "1.2rem"],
        base: ["1rem", "1.5rem"],
        lg: ["1.2rem", "1.6rem"],
        xl: ["1.4rem", "1.8rem"],
        "2xl": ["1.8rem", "2rem"],
        "3xl": ["2.5rem", "2.8rem"],
        "4xl": ["3rem", "3.2rem"],
        "5xl": ["4rem", "4.2rem"],
        "6xl": ["5rem", "5.2rem"],
        "7xl": ["6.5rem", "7rem"],
      },
      animation: {
        blink: "blink 2s infinite",
        scrollDrop: "scrollDrop 2s ease-in-out infinite",
        fadeSlideUp: "fadeSlideUp 0.9s cubic-bezier(0.16,1,0.3,1) both",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        scrollDrop: {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top" },
          "51%": { transform: "scaleY(1)", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
        fadeSlideUp: {
          from: {
            opacity: "0",
            transform: "translateY(40px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
}
