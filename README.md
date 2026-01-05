## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Spline** - Interactive 3D design tool
- **Framer Motion** - Animation library

## Getting Started

### Prerequisites

Make sure you have Node.js installed (version 18 or higher recommended).

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind directives
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/
│   └── ui/                # UI components
│       ├── card.tsx       # Card component from shadcn/ui
│       ├── spotlight.tsx  # Spotlight effect component
│       ├── spotlight-interactive.tsx  # Interactive spotlight variant
│       ├── splite.tsx     # Spline scene wrapper
│       └── demo.tsx       # Demo component with 3D scene
├── lib/
│   └── utils.ts           # Utility functions (cn helper)
└── public/                # Static assets

```

## Components

### SplineScene

A client-side component that lazy loads Spline scenes for optimal performance.

```tsx
<SplineScene
  scene="https://prod.spline.design/yourSceneId/scene.splinecode"
  className="w-full h-full"
/>
```

### Spotlight

Two variants available:
- **Spotlight**: SVG-based animated spotlight effect
- **SpotlightInteractive**: Mouse-following interactive spotlight

### Card

A versatile card component from shadcn/ui with support for:
- CardHeader
- CardTitle
- CardDescription
- CardContent
- CardFooter

## Customization

### Adding More 3D Scenes

Replace the scene URL in `components/ui/demo.tsx` with your own Spline scene URL from [spline.design](https://spline.design).

### Styling

All components use Tailwind CSS classes. Customize the design system in:
- `tailwind.config.ts` - Theme configuration
- `app/globals.css` - CSS variables and global styles

## Build for Production

```bash
npm run build
npm start
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Spline Documentation](https://docs.spline.design/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

MIT
