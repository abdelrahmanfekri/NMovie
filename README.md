# NMovie App  Demo https://n-movie.vercel.app/

A [Next.js](https://nextjs.org) project for searching movies, viewing details, and managing favorites, demonstrating modern frontend development practices.

![image](https://github.com/user-attachments/assets/9c57d931-d83f-4b34-805a-9360843de09a)

## Features
- List movies from TMDB API
- Search movies using TMDB API
- View detailed movie information
- Manage favorite movies with client-side persistence
- Responsive design for mobile, tablet, and desktop
- Server-side rendering and React Server Components
- Efficient state management with Zustand
- Accessibility considerations

![image](https://github.com/user-attachments/assets/db590251-c1af-40a6-abd9-555decd85f27)
![image](https://github.com/user-attachments/assets/bfd81a33-2109-49c9-b937-3bdf83ace420)


## Tech Stack

- Next.js 14 with App Router, Server Side Render
- React 18
- TypeScript
- Zustand for state management
- CSS Modules for styling
- Bun as package manager

## Installation
Make sure you have any package management I used bun in my case.

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
- **Error Handling**: Graceful error management and loading states
- **Performance Optimization**: Image optimization, and code splitting.
- **Accessibility**: Semantic HTML.

![image](https://github.com/user-attachments/assets/b2a1f690-8dcc-4bae-9372-399a24bb7982)


## Design Decisions

- Server-side rendering for improved SEO and initial load performance.
- CSS Modules for scoped styling.
- Zustand for state management.
- TypeScript for type safety.

## Challenges Overcome

- Balancing server-side and client-side rendering for optimal performance
- UI design for the application
- Implementing responsive design across various screen sizes
- Ensuring type safety
- Managing favorites state
  
## Additional Features and Bonus Tasks

Pagination: Implemented a custom pagination component to allow users to browse large set of movies.
Performance Optimization: Utilized Next.js Server Sider Render and Image component for automatic image optimization.
Animation: Add css animation and effects.
