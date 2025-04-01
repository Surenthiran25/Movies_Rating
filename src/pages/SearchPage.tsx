import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';
import { searchMovies, Movie } from '../services/api';
import { Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

const SearchPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [lastQuery, setLastQuery] = useState('');
  const [lastType, setLastType] = useState('');

  const handleSearch = async (query: string, type: string, page: number = 1) => {
    if (!query.trim()) return;

    setLoading(true);
    try {
      const { movies, totalResults } = await searchMovies(query, type, page);
      setMovies(movies);
      setTotalResults(totalResults);
      setLastQuery(query);
      setLastType(type);
      setCurrentPage(page);
    } catch (error) {
      toast.error('Failed to fetch movies. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    handleSearch(lastQuery, lastType, page);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Movie Search</h1>
      <SearchBar onSearch={(query, type) => handleSearch(query, type)} />
      
      {loading ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <Loader2 className="animate-spin" size={48} />
        </div>
      ) : movies.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(totalResults / 10)}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <div className="text-center mt-12 text-gray-600">
          {lastQuery && 'No movies found. Try a different search term.'}
        </div>
      )}
    </div>
  );
};

export default SearchPage;