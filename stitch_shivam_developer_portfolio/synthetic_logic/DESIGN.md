---
name: Synthetic Logic
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#bcc7de'
  on-secondary: '#263143'
  secondary-container: '#3e495d'
  on-secondary-container: '#aeb9d0'
  tertiary: '#c0c1ff'
  on-tertiary: '#1000a9'
  tertiary-container: '#8083ff'
  on-tertiary-container: '#0d0096'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
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
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
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
  gutter: 24px
  margin: 32px
  container-max: 1280px
  section-gap: 80px
---

## Brand & Style

The design system is engineered to reflect the precision of high-level code and the fluidity of artificial intelligence. It targets a technical audience—CTOs, developers, and product founders—who value performance and architectural integrity. 

The aesthetic is **Modern Corporate Tech**, blending the structural rigor of a developer tool with the polished finish of a premium SaaS product. It utilizes a **Dark Mode** foundation to reduce eye strain during deep work sessions, punctuated by vibrant accents that suggest energy and activity. The style employs **Subtle Glassmorphism** and high-precision borders to create a sense of depth without sacrificing the speed and clarity expected of production-grade engineering interfaces.

## Colors

The palette is anchored in deep "Space" neutrals to provide an infinite canvas for technical content. 

- **Primary (Electric Blue):** Used for primary actions, progress indicators, and syntax highlighting. It represents the "active" state of the system.
- **Secondary/Tertiary (Indigo/Slate):** Used for structural elements, secondary buttons, and subtle gradients that guide the eye.
- **Accents:** A high-contrast white (#f8fafc) is used for primary text to ensure maximum legibility against the dark background.
- **Gradients:** Use linear gradients sparingly (e.g., `linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)`) for specialized "hero" elements or AI-driven features.

## Typography

This design system uses a triple-threat typographic approach:
1. **Geist** for headlines: Its geometric precision provides the "tech-forward" impact required for engineering leadership.
2. **Inter** for body text: The industry standard for readability in complex interfaces.
3. **JetBrains Mono** for labels and code: Reinforces the engineering persona, used for metadata, tags, and snippets.

Headlines should utilize tight letter-spacing to appear "locked-in" and authoritative. Body copy is given generous line-height to ensure technical documentation remains approachable.

## Layout & Spacing

The system follows an **8px base grid** to ensure mathematical consistency across all components.

- **Grid Model:** 12-column fluid grid for desktop with 24px gutters.
- **Sectioning:** Large vertical gaps (80px+) are used to separate major logical blocks, reflecting the "generous whitespace" requirement.
- **Content Width:** Technical content is centered in a 1280px max-width container to prevent line-lengths from becoming unreadable on ultra-wide monitors.
- **Mobile:** Reflows to a 1-column layout with 16px side margins and reduced section gaps (48px).

## Elevation & Depth

Depth is communicated through **Tonal Layering** and **Subtle Glows** rather than heavy shadows.

- **Level 0 (Base):** #020617.
- **Level 1 (Cards/Surface):** #0f172a with a 1px solid border of #1e293b.
- **Interaction (Hover):** When hovering over interactive surfaces, the border color shifts to #3b82f6 (Primary) and a subtle 20px blur outer glow (Primary at 10% opacity) is applied.
- **Glassmorphism:** For overlays or navigation bars, use a backdrop filter of `blur(12px)` combined with a semi-transparent surface color (`rgba(15, 23, 42, 0.7)`).

## Shapes

The shape language is **Technical & Precise**. Elements use "Soft" (4px) corner radii for standard components like inputs and small buttons, while larger containers and cards use "Rounded" (8px) radii. This creates a balance between a rigorous, "square" engineering feel and modern UI friendliness. 

Avoid pill-shaped buttons unless used for tags or status indicators. Use sharp 90-degree angles only for decorative grid lines or code blocks.

## Components

### Buttons
- **Primary:** Solid background (#3b82f6), white text, no shadow. On hover, a slight scale-up (1.02x) and a primary-colored glow.
- **Secondary:** Transparent background with a 1px border (#1e293b). On hover, background shifts to #1e293b and border brightens.

### Cards
- Standard cards feature a 1px border and a subtle gradient background from #0f172a to #020617. 
- Hover effects are mandatory: border-color transition and a subtle "lift" using a translateY(-4px) transform.

### Input Fields
- Dark backgrounds (#020617) with a 1px border. 
- The "Focus" state is indicated by a primary blue border and a 2px inner glow.

### Chips & Tags
- Use JetBrains Mono for text. 
- Minimalist styling: #1e293b background with low-opacity text colors to indicate categories (e.g., green for "Production," blue for "Architecture").

### Code Blocks
- Styled to look like a premium IDE. 
- Includes a header bar with "Window Controls" (three dots) and a copy-to-clipboard action.