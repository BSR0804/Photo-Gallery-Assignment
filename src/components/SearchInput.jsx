import React from 'react';

const SearchInput = ({ value, onChange }) => {
  return (
    <div className="max-w-md mx-auto mb-8 sticky top-4 z-10">
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Search by author..."
          className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-2xl leading-5 bg-white/80 backdrop-blur-md placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm shadow-xl shadow-slate-200/50 transition-all"
        />
      </div>
    </div>
  );
};

export default SearchInput;
