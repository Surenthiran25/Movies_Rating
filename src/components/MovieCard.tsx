import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../services/api';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.imdbID}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform group-hover:scale-105">
        <div className="aspect-[2/3] relative">
          <img
            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster'}
            alt={movie.Title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg truncate">{movie.Title}</h3>
          <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
            <span>{movie.Year}</span>
            <span className="capitalize">{movie.Type}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;