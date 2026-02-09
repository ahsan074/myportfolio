# Muhammad Ahsan Shakeel - Portfolio Website

A high-end, professional portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Setup

```bash
npm install
npm run dev
```

## Add Your Profile Photo

Place your profile photo as `mypicture.jpeg` in the `public/` directory:

```
public/mypicture.jpeg
```

## Build for Production

```bash
npm run build
```

The output will be in the `dist/` directory, ready for deployment.

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast builds and HMR
- **Tailwind CSS v4** for utility-first styling
- **Framer Motion** for smooth animations
- **React Icons** for professional iconography

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Sticky navigation with smooth scrolling
│   ├── Hero.tsx            # Full-viewport hero with animated particles
│   ├── About.tsx           # Bio section with animated stat counters
│   ├── Research.tsx        # Research highlights cards
│   ├── Services.tsx        # Professional services offerings
│   ├── Skills.tsx          # Technical skills with animated progress bars
│   ├── Projects.tsx        # Featured project cards grid
│   ├── Education.tsx       # Academic timeline with certifications
│   ├── Experience.tsx      # Professional experience cards
│   ├── Testimonials.tsx    # Rotating testimonial carousel
│   ├── Contact.tsx         # Dual-purpose contact form
│   ├── Footer.tsx          # Site footer
│   ├── BackToTop.tsx       # Scroll-to-top button
│   └── SectionHeading.tsx  # Reusable animated section header
├── hooks/
│   ├── useScrollAnimation.ts  # Intersection observer hook
│   └── useCountUp.ts         # Animated counter hook
├── App.tsx                 # Main app with lazy-loaded sections
├── main.tsx                # Entry point
└── index.css               # Global styles and Tailwind config
```
