import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Manrope', 'Inter', 'sans-serif'],
        luxury: ['Manrope', 'sans-serif'],
        body: ['Manrope', 'Inter', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Auto Mivrus inspired palette tokens with native alpha support
        gold: {
          DEFAULT: "#D9AC46",
          soft: "#E8C46B",
          contrast: "#835C0D",
          foreground: "#08090B",
        },
        ink: {
          DEFAULT: "#101215",
          deep: "#08090B",
          raised: "#16181C",
          foreground: "#F4F4F6",
          muted: "#A1A1AA",
          border: "rgba(255, 255, 255, 0.08)",
        },
        steel: "#858A91",
        // Backwards compatible luxury tokens
        "luxury-gold": {
          DEFAULT: "#D9AC46",
          hover: "#E8C46B",
          deep: "#835C0D",
        },
        "luxury-silver": "#858A91",
        "luxury-dark": "#101215",
        "luxury-darker": "#08090B",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #E8C46B 0%, #D9AC46 50%, #B88B2A 100%)',
        'gradient-hero': 'linear-gradient(to top, #08090B 0%, rgba(8, 9, 11, 0.85) 40%, rgba(8, 9, 11, 0.4) 100%)',
        'gradient-side': 'linear-gradient(to right, #08090B 0%, rgba(8, 9, 11, 0.9) 35%, rgba(8, 9, 11, 0.3) 70%, transparent 100%)',
        'gradient-silver': 'linear-gradient(135deg, #F4F4F6 0%, #858A91 100%)',  
        'gradient-dark': 'linear-gradient(135deg, #16181C 0%, #08090B 100%)',
      },
      boxShadow: {
        'luxury': '0 10px 30px -10px rgba(217, 172, 70, 0.25)',
        'gold': '0 8px 24px -4px rgba(217, 172, 70, 0.3)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
