# Movie Search App

A full-featured movie search application built with React that integrates with the OMDB API. Users can search for movies, view detailed information, and filter results by type.

## Features

- Search for movies, series, and episodes
- Filter results by type (movie/series/episode)
- Pagination for search results
- Detailed movie information view
- Responsive design
- Error handling and loading states
- Clean and modern UI with Tailwind CSS

## Tech Stack

- React
- TypeScript
- React Router for navigation
- Tailwind CSS for styling
- OMDB API for movie data
- Lucide React for icons
- React Hot Toast for notifications

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your OMDB API key:
   ```
   VITE_OMDB_API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

- `/src/components` - Reusable UI components
- `/src/pages` - Page components
- `/src/services` - API service functions
- `/src/types` - TypeScript type definitions

## API Integration

The app uses the OMDB API for fetching movie data. The API service functions are located in `/src/services/api.ts`.

## Deployment

The app is deployed on Netlify. You can view it at [your-netlify-url].

## Contributing

Feel free to submit issues and pull requests.

## License

MIT