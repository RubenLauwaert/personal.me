# personal.me

Source code for my personal portfolio website — a single-page app showcasing my experience, projects, and skills as a software engineer and quant researcher.

**Live at:** [rubenlauwaert.com](https://rubenlauwaert.com) *(update with actual URL)*

## Tech Stack

- **React 18** + TypeScript
- **Vite** — dev server and build tooling
- **Tailwind CSS 4** — utility-first styling with custom theme variables
- **Radix UI / shadcn/ui** — accessible UI primitives
- **Lucide** — icon set

## Project Structure

```
src/
  app/
    App.tsx                # Root layout, section ordering
    components/
      Hero.tsx             # Intro section with profile photo and social links
      Experience.tsx       # Work history timeline
      Education.tsx        # Academic background
      Skills.tsx           # Technical, financial, and social skills
      Projects.tsx         # Featured projects (HodlBase, LevelHub, etc.)
      Languages.tsx        # Language proficiency bars
      Contact.tsx          # Contact info + Google Calendar booking
      Navigation.tsx       # Responsive nav with theme toggle
      Footer.tsx           # Footer with social links
      ThemeProvider.tsx     # Light/dark theme context (localStorage-persisted)
      ui/                  # Reusable shadcn/ui components
  styles/
    theme.css              # CSS custom properties for light/dark themes
    fonts.css              # Font imports
    index.css              # Global styles
    tailwind.css           # Tailwind entry point
public/                    # Static assets (images, favicon)
```

## Running Locally

```bash
pnpm install
pnpm dev
```

Build for production:

```bash
pnpm build
```

## Theming

Light and dark mode are toggled via a button in the nav. Theme preference is stored in `localStorage` and applied as a class on `<html>`. All color tokens are defined as CSS custom properties in `src/styles/theme.css` and mapped to Tailwind utilities.

## Notes

- Some project cards (HodlBase) swap images based on the active theme
- The contact section links to a Google Calendar appointment page for scheduling calls
- Navigation links and section order are managed in `App.tsx` and `Navigation.tsx`
