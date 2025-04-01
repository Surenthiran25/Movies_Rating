import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, MovieDetails as MovieDetailsType } from '../services/api';
import { Loader2, Star } from 'lucide-react';
import toast from 'react-hot-toast';

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetailsType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (!id) return;
      
      try {
        const details = await getMovieDetails(id);
        setMovie(details);
      } catch (error) {
        toast.error('Failed to fetch movie details. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="animate-spin" size={48} />
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold">Movie not found</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img
              src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster'}
              alt={movie.Title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-2/3 p-6">
            <h1 className="text-3xl font-bold mb-4">{movie.Title}</h1>
            <div className="flex items-center gap-2 mb-4">
              <Star className="text-yellow-400 fill-current" size={20} />
              <span className="text-lg">{movie.imdbRating}/10</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="font-semibold text-gray-600">Year</h3>
                <p>{movie.Year}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-600">Runtime</h3>
                <p>{movie.Runtime}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-600">Genre</h3>
                <p>{movie.Genre}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-600">Director</h3>
                <p>{movie.Director}</p>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold text-gray-600 mb-2">Cast</h3>
              <p>{movie.Actors}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-600 mb-2">Plot</h3>
              <p className="text-gray-700 leading-relaxed">{movie.Plot}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;