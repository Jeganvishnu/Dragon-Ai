import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				/* Chat specific colors */
				'chat-bg': 'hsl(var(--chat-bg))',
				'message-user': 'hsl(var(--message-user))',
				'message-ai': 'hsl(var(--message-ai))',
				'sidebar-bg': 'hsl(var(--sidebar-bg))',
				'sidebar-hover': 'hsl(var(--sidebar-hover))',
				'sidebar-active': 'hsl(var(--sidebar-active))',
				'ai-accent': 'hsl(var(--ai-accent))',
				'ai-accent-muted': 'hsl(var(--ai-accent-muted))',
				'user-accent': 'hsl(var(--user-accent))',
				'input-border': 'hsl(var(--input-border))',
				
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				success: 'hsl(var(--success))',
				warning: 'hsl(var(--warning))'
			},
			backgroundImage: {
				'gradient-ai': 'var(--gradient-ai)',
				'gradient-user': 'var(--gradient-user)',
				'gradient-bg': 'var(--gradient-bg)'
			},
			boxShadow: {
				'ai': 'var(--shadow-ai)',
				'user': 'var(--shadow-user)',
				'sidebar': 'var(--shadow-sidebar)'
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)',
				'bounce': 'var(--transition-bounce)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(0)'
					}
				},
				'typing': {
					'0%, 60%': {
						transform: 'translateY(0px)'
					},
					'30%': {
						transform: 'translateY(-10px)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 5px hsl(var(--ai-accent) / 0.3)'
					},
					'50%': {
						boxShadow: '0 0 20px hsl(var(--ai-accent) / 0.6), 0 0 30px hsl(var(--ai-accent) / 0.4)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-in': 'slide-in 0.3s ease-out',
				'typing': 'typing 1.4s infinite ease-in-out',
				'pulse-glow': 'pulse-glow 2s infinite ease-in-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
