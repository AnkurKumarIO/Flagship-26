---
name: Prestige Prime
colors:
  surface: '#111415'
  surface-dim: '#111415'
  surface-bright: '#373a3b'
  surface-container-lowest: '#0c0f10'
  surface-container-low: '#191c1d'
  surface-container: '#1d2021'
  surface-container-high: '#282a2b'
  surface-container-highest: '#323536'
  on-surface: '#e1e3e4'
  on-surface-variant: '#c5c6cd'
  inverse-surface: '#e1e3e4'
  inverse-on-surface: '#2e3132'
  outline: '#8f9097'
  outline-variant: '#44474d'
  surface-tint: '#b9c7e4'
  primary: '#b9c7e4'
  on-primary: '#233148'
  primary-container: '#0a192f'
  on-primary-container: '#74829d'
  inverse-primary: '#515f78'
  secondary: '#e9c176'
  on-secondary: '#412d00'
  secondary-container: '#604403'
  on-secondary-container: '#dab36a'
  tertiary: '#b6c6ed'
  on-tertiary: '#20304f'
  tertiary-container: '#061836'
  on-tertiary-container: '#7282a5'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#b6c6ed'
  on-tertiary-fixed: '#091b39'
  on-tertiary-fixed-variant: '#374767'
  background: '#111415'
  on-background: '#e1e3e4'
  surface-variant: '#323536'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
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
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The design system is engineered for high-stakes, premium corporate events. The brand personality is authoritative, exclusive, and impeccably organized. It targets C-suite executives and industry leaders who expect a frictionless, high-end digital experience.

The design style is **Corporate / Modern** with a strong emphasis on **Minimalism**. It utilizes a sophisticated "Dark Mode" aesthetic as the primary baseline to evoke a sense of nocturnal elegance and exclusivity. The UI prioritizes heavy whitespace (or "dark space"), allowing content to breathe and emphasizing the importance of featured speakers and event schedules. Visual interest is generated through subtle gold accents and precision-engineered typography rather than decorative clutter.

## Colors

The palette is anchored by a deep **Midnight Navy** (#0A192F) which serves as the canvas for all interfaces. **Champagne Gold** (#C5A059) is used sparingly as an accent for high-level calls to action, active states, and decorative flourishes that signify prestige.

- **Primary (Midnight Navy):** Backgrounds and deep structural elements.
- **Secondary (Champagne Gold):** Primary buttons, focus indicators, and key highlights.
- **Tertiary (Slate Blue):** Used for card backgrounds and surface-level elevation.
- **Neutral (Off-White):** Reserved strictly for typography and high-contrast iconography to ensure maximum legibility against the dark background.

## Typography

This design system uses a dual-font strategy to balance impact with utility. **Montserrat** is the display face, providing a geometric, confident structure for headlines. **Inter** is the workhorse typeface for body copy and UI labels, chosen for its exceptional legibility on digital screens.

For large display headings, negative letter-spacing is applied to create a tighter, more "editorial" feel. Labels and small metadata should use uppercase with increased tracking to maintain a premium, architectural look.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop, centered within a 1280px container. A 12-column system is used with generous 24px gutters to prevent information density from feeling overwhelming.

**Vertical Rhythm:**
Spacing is strictly derived from an 8px base unit. Section headers should be separated from content by at least 64px (8 units) to maintain the "premium flagship" feel. On mobile, margins are reduced to 20px, and the grid collapses to a single-column layout for readability, with vertical spacing reduced by 25% to account for smaller screen real estate.

## Elevation & Depth

This design system avoids heavy shadows, instead using **Tonal Layers** and **Low-contrast Outlines** to create depth. Surfaces are stacked using color luminosity:
- **Level 0 (Background):** #0A192F (Midnight Navy)
- **Level 1 (Cards/Modals):** #112240 (Slate Blue)
- **Level 2 (Interactive):** #1D2D50 (Lightened Navy)

A very subtle, 1px border (#FFFFFF with 10% opacity) is applied to elevated elements to define edges against the dark background. When shadows are used for critical modals, they should be extra-diffused, large-radius blurs using a tinted navy color (#050C16) at 40% opacity.

## Shapes

The shape language is **Soft** yet disciplined. The 0.25rem (4px) base radius provides a modern touch without appearing overly "bubbly" or casual. This subtle rounding maintains the professional and architectural integrity required for a corporate flagship brand. Larger components like hero images or main cards may use `rounded-lg` (8px) to soften the overall visual impact of the grid.

## Components

### Buttons
- **Primary:** Champagne Gold background with Midnight Navy text. No border. 4px corner radius. Bold weight.
- **Secondary:** Transparent background with a 1px Champagne Gold border. Champagne Gold text.
- **Interaction:** On hover, primary buttons shift to a lighter gold tint; secondary buttons fill with a 10% gold opacity.

### Cards
Cards use the Tertiary color (#112240) with a 1px #FFFFFF (10% opacity) border. Padding should be generous (minimum 32px) to signify a premium content experience.

### Input Fields
Inputs are dark-themed with a subtle Slate Blue background. The bottom border is used as the primary focus indicator, turning Champagne Gold when active. Labels always sit above the field in `label-caps` style.

### Navigation
The main navigation should be sticky with a backdrop-blur (12px) and 90% opacity of the Primary color. Links use Inter medium with a Champagne Gold underline appearing only on the active state.

### Specialized Components
- **Speaker Profile:** Round headshots with a 2px Gold ring.
- **Agenda Timeline:** A vertical 1px line in Slate Blue with Gold nodes for active/current sessions.