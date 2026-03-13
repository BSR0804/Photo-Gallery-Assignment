import React from 'react';

const PhotoCard = ({ photo, isFavourite, onToggleFavourite }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-200/50 transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={photo.download_url}
          alt={`Photo by ${photo.author}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
           <p className="text-white text-sm font-medium truncate">{photo.author}</p>
        </div>
      </div>
      <div className="p-4 flex justify-between items-center">
        <div className="overflow-hidden">
          <p className="text-slate-800 font-semibold truncate text-sm">{photo.author}</p>
          <p className="text-slate-400 text-xs truncate">ID: {photo.id}</p>
        </div>
        <button
          onClick={() => onToggleFavourite(photo.id)}
          className={`p-2 rounded-full transition-all duration-300 ${
            isFavourite 
            ? 'bg-rose-50 text-rose-500 hover:bg-rose-100' 
            : 'bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600'
          }`}
          aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
        >
          <svg 
            className={`w-6 h-6 transition-transform duration-300 ${isFavourite ? 'scale-110 fill-current' : 'scale-100'}`} 
            fill={isFavourite ? "currentColor" : "none"} 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PhotoCard;
