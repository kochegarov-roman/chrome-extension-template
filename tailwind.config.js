/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
	// prefix: 'tw_ext-',
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--tw_ext-radius)',
  			md: 'calc(var(--tw_ext-radius) - 2px)',
  			sm: 'calc(var(--tw_ext-radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--tw_ext-background))',
  			foreground: 'hsl(var(--tw_ext-foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--tw_ext-card))',
  				foreground: 'hsl(var(--tw_ext-card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--tw_ext-popover))',
  				foreground: 'hsl(var(--tw_ext-popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--tw_ext-primary))',
  				foreground: 'hsl(var(--tw_ext-primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--tw_ext-secondary))',
  				foreground: 'hsl(var(--tw_ext-secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--tw_ext-muted))',
  				foreground: 'hsl(var(--tw_ext-muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--tw_ext-accent))',
  				foreground: 'hsl(var(--tw_ext-accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--tw_ext-destructive))',
  				foreground: 'hsl(var(--tw_ext-destructive-foreground))'
  			},
  			border: 'hsl(var(--tw_ext-border))',
  			input: 'hsl(var(--tw_ext-input))',
  			ring: 'hsl(var(--tw_ext-ring))',
  			chart: {
  				'1': 'hsl(var(--tw_ext-chart-1))',
  				'2': 'hsl(var(--tw_ext-chart-2))',
  				'3': 'hsl(var(--tw_ext-chart-3))',
  				'4': 'hsl(var(--tw_ext-chart-4))',
  				'5': 'hsl(var(--tw_ext-chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

