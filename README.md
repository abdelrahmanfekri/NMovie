# NMovie App

A [Next.js](https://nextjs.org) project for searching movies, viewing details, and managing favorites, demonstrating modern frontend development practices.

[Image for Home Page]

## Features

- Search movies using TMDB API
- View detailed movie information
- Manage favorite movies with client-side persistence
- Responsive design for mobile, tablet, and desktop
- Server-side rendering and React Server Components
- Efficient state management with Zustand
- Accessibility considerations

[Image for Movie Details Page]

## Tech Stack

- Next.js 13+ with App Router
- React 18
- TypeScript
- Zustand for state management
- CSS Modules for styling
- Bun as package manager

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a custom font family.

## Installation

1. Clone the repository
2. Install dependencies:
   ```
   bun install
   ```
3. Add TMDB API key to `.env.local`:
   ```
   TMDB_API_KEY=your_api_key_here
   ```
4. Run the development server:
   ```
   bun dev
   ```

[Image for Search Results]

## Key Implementations

- **Search Functionality**: Utilizes TMDB API to fetch and display movie results
- **Movie Details**: Dedicated page for each movie with comprehensive information
- **Favorites Management**: Add/remove favorites with Zustand and local storage persistence
- **Responsive Design**: Ensures optimal viewing across devices using CSS modules
- **State Management**: Zustand for efficient state handling, particularly for favorites
- **Routing**: Next.js App Router for optimized navigation
- **Error Handling**: Graceful error management and loading states
- **Performance Optimization**: Image optimization, code splitting, and lazy loading
- **Accessibility**: Semantic HTML and ARIA attributes for improved usability

[Image for Favorites Page]

## Design Decisions

- Server-side rendering for improved SEO and initial load performance
- CSS Modules for scoped styling to prevent conflicts
- Zustand for lightweight yet powerful state management
- TypeScript for enhanced type safety and developer experience

## Challenges Overcome

- Balancing server-side and client-side rendering for optimal performance
- Implementing responsive design across various screen sizes
- Ensuring type safety with external API data
- Managing favorites state persistently while maintaining UI synchronization

## Future Improvements

- User authentication for server-side favorites management
- Advanced search filters and sorting options
- Integration with additional movie data APIs
- Automated testing implementation

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

Contributions are welcome! Please submit a Pull Request.

## License

This project is open source under the [MIT License](LICENSE).
