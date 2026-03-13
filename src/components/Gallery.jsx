import React, { useReducer, useState, useMemo, useCallback } from 'react';
import { useFetchPhotos } from '../hooks/useFetchPhotos';
import { favouritesReducer, initialState } from '../reducers/favoritesReducer';
import PhotoCard from './PhotoCard';
import SearchInput from './SearchInput';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

const Gallery = () => {
  const { photos, loading, error } = useFetchPhotos();
  const [favourites, dispatch] = useReducer(favouritesReducer, initialState);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [photos, searchTerm]);

  const toggleFavourite = useCallback((id) => {
    dispatch({ type: 'TOGGLE_FAVOURITE', payload: id });
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Gallery</span>
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Explore a curated collection of stunning photography by talented creators from around the world.
        </p>
      </header>

      <SearchInput value={searchTerm} onChange={handleSearchChange} />

      {filteredPhotos.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl shadow-inner border border-dashed border-slate-200">
          <p className="text-slate-400">No photos found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavourite={favourites.includes(photo.id)}
              onToggleFavourite={toggleFavourite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
