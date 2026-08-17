---
name: Kinetic Horizon
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#bfc7d4'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#89919e'
  outline-variant: '#3f4752'
  surface-tint: '#9dcaff'
  primary: '#9dcaff'
  on-primary: '#003257'
  primary-container: '#0298f9'
  on-primary-container: '#002e51'
  inverse-primary: '#0061a2'
  secondary: '#afc6ff'
  on-secondary: '#002d6c'
  secondary-container: '#0169e8'
  on-secondary-container: '#f2f4ff'
  tertiary: '#ffb783'
  on-tertiary: '#4f2500'
  tertiary-container: '#e37601'
  on-tertiary-container: '#492200'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d1e4ff'
  primary-fixed-dim: '#9dcaff'
  on-primary-fixed: '#001d36'
  on-primary-fixed-variant: '#00497c'
  secondary-fixed: '#d9e2ff'
  secondary-fixed-dim: '#afc6ff'
  on-secondary-fixed: '#001a43'
  on-secondary-fixed-variant: '#004398'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#703700'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
  electric-indigo: '#0000FF'
  surface-elevated: '#111111'
  glass-stroke: rgba(255, 255, 255, 0.1)
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 80px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
  button:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
  section-gap: 120px
---

## Brand & Style

The design system is engineered for a high-stakes entrepreneurship environment, blending the precision of a high-tech platform with the energy of a flagship summit. The aesthetic is rooted in **Modern Minimalism with Glassmorphic accents**, utilizing deep, ink-black voids contrasted against vibrant, high-energy blues.

The brand personality is **Visionary, Professional, and Kinetic**. It aims to evoke a sense of future-readiness and technical excellence. Key visual drivers include:
- **Depth through Luminance:** Using light as a functional element against dark backgrounds rather than physical shadows.
- **Precision Typography:** Large, confident headlines paired with highly legible, structured body text.
- **Technological Sheen:** Subtle gradients and frosted surfaces that imply a sophisticated, digital-first infrastructure.

## Colors

The palette is anchored in a **Pure Black (#000000)** foundation to maximize contrast and focus attention on technical content. 

- **Primary Electric Blue (#0298F9):** Used for interactive elements, primary actions, and key highlights. It represents innovation and clarity.
- **Deep Tech Blue (#086BEA):** Used for secondary accents, hover states, and subtle gradients to provide depth.
- **The Void (Neutral):** Backgrounds must remain true black or deep charcoal (#111111) to ensure the vibrant blues "pop" with a neon-like quality.
- **Typography:** Pure White (#FFFFFF) is reserved for high-priority text, while a slightly muted gray is used for secondary metadata to manage visual hierarchy.

## Typography

This design system employs a tiered typographic strategy to balance impact with technical precision.

1.  **Montserrat (Display/Headlines):** Used for all major headings. Its geometric construction provides a sturdy, professional foundation. Use tight letter-spacing for large display text.
2.  **Hanken Grotesk (Body):** A modern, sharp sans-serif chosen for its exceptional readability in dark mode environments. It feels more "tech-forward" than traditional sans-serifs.
3.  **JetBrains Mono (Labels/System):** Reserved for small labels, dates, and technical data points (e.g., event timings, ticket counts) to reinforce the "tech-focused" flagship vibe.

## Layout & Spacing

The layout follows a **structured 12-column fluid grid** for desktop and a **single-column vertical stack** for mobile.

- **Rhythm:** Spacing is strictly based on an 8px base unit.
- **Sectioning:** Large vertical gaps (120px+) are encouraged between major sections to allow the dark background to act as a "buffer," emphasizing the importance of each content block.
- **Alignment:** Content should be predominantly left-aligned to maintain a clean, architectural feel. Center alignment is reserved exclusively for hero sections and high-impact call-to-actions.

## Elevation & Depth

In a deep dark UI, depth is achieved through **Tonal Layering and Glassmorphism** rather than traditional drop shadows.

- **Surface Tiers:** 
    - Base: #000000 (The canvas)
    - Surface-Low: #0A0A0A (Standard containers)
    - Surface-High: #161616 (Floating cards/modals)
- **Glassmorphism:** For top navigation and overlays, use a background blur (20px) with a semi-transparent dark fill (e.g., `rgba(0,0,0,0.7)`).
- **Glow Borders:** Use subtle 1px "inner glows" or borders with a 10% opacity white or primary blue to define the edges of containers against the black background.

## Shapes

The shape language is **Soft (0.25rem)** to maintain a professional and rigorous technical appearance. 

- **Interactive Elements:** Use small radii (4px) to keep buttons feeling sharp and precise.
- **Card Containers:** Use 8px (rounded-lg) for larger content blocks to provide a subtle hint of approachability without feeling "bubbly."
- **Geometric Accents:** Incorporate 45-degree angled corners or subtle grid patterns in the background to reinforce the engineering/entrepreneurial theme.

## Components

- **Buttons:** Primary buttons use a solid Electric Blue fill with white Montserrat text. Secondary buttons should be "Ghost" style: a 1px primary blue border with no fill, transitioning to a subtle blue glow on hover.
- **Cards:** Cards should have a #111111 background with a 1px `glass-stroke` border. On hover, the border color should shift to the primary blue.
- **Input Fields:** Use a dark-gray background (#0F0F0F) with a bottom-only border that lights up in Primary Blue when focused.
- **Chips/Badges:** Use JetBrains Mono for the text. Use a low-opacity primary blue fill (15%) with a full-opacity text color for a modern "tag" look.
- **Status Indicators:** Use the Electric Indigo (#0000FF) for high-energy states like "Live Now" or "Flash Sale," paired with a subtle pulsing animation.
- **Event Timeline:** Use a vertical line in Primary Blue with circular nodes, representing the sequential nature of a flagship event.