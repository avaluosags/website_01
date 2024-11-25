/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				xsm: "600px",
				sm: "768px",
				md: "1024px",
				lg: "1280px",
				xl: "1440px",
			},

			fontFamily: {
				cako: ["Cako", "sans-serif"],
				cardo: ["Cardo", "serif"]
			},

			fontSize: {
				0: "0px",
				1: "8px",
				2: "16px",
				3: "24px",
				4: "32px",
				5: "40px",
				6: "48px",
				7: "56px",
				8: "64px",
				9: "72px",
				10: "80px",
				11: "88px",
				12: "96px",
				13: "104px",
				14: "112px",
				15: "120px",
				16: "128px",
				17: "136px",
				18: "144px",
				19: "152px",
				20: "160px",
				21: "168px",
				22: "176px",
				23: "184px",
				24: "192px",
			},
			
			colors: {
				primary_super: "#0064DF",
				primary: "#006EB6",
				primary_bg: "#D6EEFF",
				white: "#FFFFFF",
				black: "rgba(0, 0, 0, .9)",
				transparent: "rgba(255, 255, 255, 0)",
			},

			animation: {
				moveVariable: 'moveVariable 8s ease-in-out infinite',
			  },
			  keyframes: {
				moveVariable: {
				  '0%, 100%': { transform: 'translateY(-20%)' },
				  '50%': { transform: 'translateY(20%)' },
				},
			  },
		},
	},
	plugins: [],
}
