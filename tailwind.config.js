/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
	container:{
		center: true,
		padding: "15px",
	},
	screens:{
		sm: "640px",
		md: "760px",
		lg: "960px",
		xl: "1200px"

	},
	fontFamily:{
		primary:"var(--font-jetbrainsMono)",
	},
  	extend: {
		colors: {
			primary: '#1c1c22',
			accent: {
				DEFAULT: "#6252f2",
				hover: "#6252f2"
			},
		},
  		keyframes: {
			"accordion-down":{
				from:{height:"0"},
				to:{height:"var(--readix--accordion-content-height)"},
			},
			"accordion-up":{
				from:{height:"var(--readix--accordion-content-height)"},
				to:{height:"0"},
			},
  		},
		animation:{
			"accordion-down":"accordion-down 0.2s ease-out",
			"accordion-up":"accordion-up 0.2s ease-out",
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
